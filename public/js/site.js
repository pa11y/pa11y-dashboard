// This file is part of Pa11y Dashboard.
//
// Pa11y Dashboard is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// Pa11y Dashboard is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with Pa11y Dashboard.  If not, see <http://www.gnu.org/licenses/>.

$(document).ready(function(){

    var data = {};
	var standardsList = $('[data-role="standards-list"]');
	var standardSelect = $('[data-role="new-task-select"]');
    var taskListSelector = $('[data-role="task-list"] a');
	var detailsCollapse = $('[data-role="details-collapse"]');
	var contextPopover = $('[data-role="context-popover"]');
	var ruleTooltip = $('[data-role="rule-tooltip"]');
    var toTopLinks = $('[data-role="top"]');
    var zoomResetButton = $('[data-role="zoom-reset"]');
    var graphContainer = $('[data-role="graph"]');
    var dateSelectDropdownMenu = $('[data-role="date-select-dropdown-menu"]');
    var legend = graphContainer.parent('.graph-container').find('.dashedLegend');
	var list = localStorage.getItem("listview") || "";    // get choice or nothing


    var graphOptions = {
        series: {
            dashes: { show: false, lineWidth: 3 },
            lines: { show: true },
            points: { show: true },
            hoverable: true
        },
        xaxis: {
            mode: 'time',
            tickLength: 0,
            minTickSize: [1, 'day'],
            timeformat: '%d %b'
        },
        yaxis: {
            tickDecimals: 0
        },
        lines: {
            lineWidth: 3
        },
        points: {
            fill: true,
            radius:4,
            lineWidth:3
        },
        shadowSize: 0,
        grid: {
            backgroundColor: '#fff',
            borderColor: '#808080',
            hoverable: true,
            clickable: true,
            borderWidth: {
                top: 1,
                right: 1,
                bottom: 1,
                left: 1
            }
        },
        selection: {
            mode: 'x'
        }
    };

    // have we declared a custom legend
    if (legend.length === 1) {
        $('body').addClass('custom-legend');
    }

	// Update details button title by click
	detailsCollapse.click(function(){
		$(this).toggleClass('btn_state_collapsed');
	});

	// Initialize context popovers
	$(contextPopover).popover({
		container: 'body',
		placement: 'bottom'
	});

	$(document.body).click(function (e) {
		$(contextPopover).each(function () {
			if (!$(this).is(e.target) && $(this).has(e.target).length === 0 && $('.popover').has(e.target).length === 0) {
				if ($(this).data('bs.popover').tip().hasClass('in')) {
					$(this).popover('toggle');
				}
			}
		});
	});

     // Back to top links
    toTopLinks.click( function(e){
        e.preventDefault();
        $(animateSection($('#top'), -55));
    });

    // Switch standards list of rules
	switchStandardsList(standardSelect);
    $('.rules-list-title').addClass('hidden');
    $('.date-links').removeClass('list-group date-links').addClass('dropdown-menu');
    $('.dropdown-menu a').removeClass('list-group-item');
    dateSelectDropdownMenu.removeClass('hidden');

	standardSelect.change( function(){
		switchStandardsList($(this));
	});

    taskListSelector.click( function(e) {
        e.preventDefault();
        target = $(this).attr('href');
        animateSection($(target), -25);
        if (!$(target).hasClass('showing')) {
            $(target).click();
        }
    });

    zoomResetButton.click( function() {
        plotGraphData();
        toggleResetZoomButton();
    });

    $.each(graphContainer, function(){
        getGraphData();
        plotGraphData();
    });

    ruleTooltip.tooltip();

    // Function to animate sections
    function animateSection (sectionName, offset){
        $('html,body').animate({
            scrollTop: $(sectionName).offset().top + offset
        }, 750);
    }

    // Standards list switcher for new task form
	function switchStandardsList(el){
		standardsList.hide();
		chosenValue = (el.val());
		$('[data-attr="' + chosenValue + '"]').show();
	}

	function getGraphData() {
        $($('[data-role="url-stats"]').get().reverse()).each( function() {
            var el = $(this);
            storeDatum(el, getXAxisLabel(el));
        });
    }

    function getXAxisLabel (el) {
        return el.find('[data-role="date"]').attr('data-value');
    }

    function storeDatum (el, label) {
        $.each(el.find('[data-label]'), function() {
            var type = $(this).attr('data-label');
            var value = $(this).html();
            if (typeof data[type] === 'undefined') {
                data[type] = [];
            }
            data[type].push([label, +value]);
        });
    }

    function plotGraphData () {
        $.plot(graphContainer, getData(), graphOptions);
        exportGraph();
    }

    function getData() {
        return [
            {
                color: 'rgb(216, 61, 45)',
                label: 'Errors',
                data: data.error
            },
            {
                color: 'rgb(168, 103, 0)',
                label: 'Warnings',
                data: data.warning,
                lines: { show: false },
                dashes: { show: true, dashLength: [10, 5] }
            },
            {
                color: 'rgb(23, 123, 190)',
                label: 'Notices',
                data: data.notice,
                lines: { show: false },
                dashes: { show: true, dashLength: 5 }
            }
        ];
    }

    function toggleResetZoomButton() {
        zoomResetButton.toggleClass('hidden');
    }

	function exportGraph() {
		var exportBtn = $('.btn_action_export');

		exportBtn.click(function(e) {
			e.preventDefault();

			var fileName = $('h1').text().toLowerCase().split(' ').join('_');
			var date = new Date();

			fileName += '_' + date.getDate() + '-' + (date.getMonth() + 1) + '-' + date.getFullYear();

			html2canvas($('.graph').get(0), {
				onrendered: function (canvas) {
					downloadFile(canvas.toDataURL('image/png'), fileName + '.png');
				}
			});
		});
	}

	function downloadFile(dataurl, filename) {
		var link = document.createElement('a');
		link.href = dataurl;
		link.setAttribute('download', filename);

		var clickEvent = document.createEvent('MouseEvents');
		clickEvent.initEvent('click', false, true);
		link.dispatchEvent(clickEvent);

		return false;
	}

    graphContainer.bind('plotselected', function (event, ranges) {
        // clamp the zooming to prevent eternal zoom
        if (ranges.xaxis.to - ranges.xaxis.from < 0.00001) {
            ranges.xaxis.to = ranges.xaxis.from + 0.00001;
        }
        if (ranges.yaxis.to - ranges.yaxis.from < 0.00001) {
            ranges.yaxis.to = ranges.yaxis.from + 0.00001;
        }
        // do the zooming
        plot = $.plot(graphContainer, getData(ranges.xaxis.from, ranges.xaxis.to),
        $.extend(true, {}, graphOptions, {
                xaxis: { min: ranges.xaxis.from, max: ranges.xaxis.to },
                yaxis: { min: ranges.yaxis.from, max: ranges.yaxis.to }
            })
        );
        if (!zoomResetButton.is(':visible')) {
            toggleResetZoomButton();
        }
    });

    var choiceContainer = $('[data-role="series-checkboxes"]');
    var datasets = getData();

    $.each(datasets, function(key, val) {
        var lowerCaseValue = (val.label.substring(0, val.label.length - 1)).toLowerCase();
        choiceContainer.append(
            '<li class="text-center ' + lowerCaseValue + '">' +
                '<div class="series-checkbox-container">' +
                    '<input type="checkbox"' +
                        'name="' + key + '" ' +
                        'id="id' + key + '" ' +
                        'data-stat-type="' + val.label.toLowerCase() + '"' +
                        '/>' +
                    '<label for="id' + key + '">' +
                        '<span class="stat-type">' + val.label + '</span>' +
                    '</label>' +
                '</div>' +
            '</li>'
        );

    });

    choiceContainer.find('input').click(plotAccordingToChoices);
    choiceContainer.find('[data-stat-type=errors]').click();

    function plotAccordingToChoices() {
        var data = [];
        var labels = [];
        choiceContainer.find('input:checked').each(function () {
            var key = $(this).attr('name');
            if (key && datasets[key]) {
                labels.push(datasets[key].label);
                data.push(datasets[key]);
            }
        });

        if (labels.length && legend.length === 1) {
            legend.find('tr').hide();
            $.each(labels, function (index, value) {
                $('.legend' + value).parents('tr').show();
            });
            legend.show();
        } else {
            legend.hide();
        }

        if (data.length > -1) {
            $.plot(graphContainer, data, graphOptions);
        }
    }

    function showTooltip(x, y, contents) {
        $('<div data-role="tooltip" class="tooltip tooltip-graph in"><div class="tooltip-inner">' +
        contents +
        '</div></div>').css({top: y + 5,left: x + 5}).appendTo('body').fadeIn(200);
    }

    var previousPoint = null;
    graphContainer.bind('plothover', function (event, pos, item) {
        if (item) {
            if (previousPoint !== item.dataIndex) {
                previousPoint = item.dataIndex;
                $('[data-role="tooltip"]').remove();
                var count = item.datapoint[1].toFixed(0);
                var date = $.plot.formatDate(new Date(item.datapoint[0]), '%d %b' +
                '<small> (%H:%M)</small>');
                var contents = '<p class="crunch">' +
                    date + '<br/>' +
                    count + ' ' + item.series.label +
                '</[h6]>';
                showTooltip(item.pageX, item.pageY, contents);
            }
        } else {
            $('[data-role="tooltip"]').remove();
            previousPoint = null;
        }
    });


	// Task filter

	function initTaskFilter (container) {
		var tasks = initTaskFilterTasks(container);
		var input = initTaskFilterInput(container, tasks);
	}

	function initTaskFilterTasks (container) {
		var tasks = container.find('[data-role=task]');
		return tasks;
	}

	function initTaskFilterInput (container, tasks) {
		var input = container.find('[data-role=input]');
		input.on('keyup', function () {
			filterTasks(tasks, input.val());
		});
		return input;
	}

	function filterTasks (tasks, query) {
		query = $.trim(query.replace(/[^a-z0-9\s]+/gi, ''));
		tasks.removeClass('hidden');
		if (/^\s*$/.test(query)) {
			return;
		}
		var queryRegExp = new RegExp('(' + query.replace(/\s+/gi, '|') + ')', 'i');
		tasks.filter(function () {
			return !queryRegExp.test($(this).data('keywords'));
		}).addClass('hidden');
	}

	var taskLists = $('[data-control=task-list]');
	if (taskLists.length > 0) {
		$('[data-control=task-list]').each(function () {
			initTaskFilter($(this));
		});
	}

	// Extend public/js/vendor/bootstrap/js/collapse.js
	// Add keyboard control for filters

	$.fn.collapse.Constructor.prototype.keydown = function (e) {
		var $this = $(this);
		var k = e.which || e.keyCode;

		if (!/(13|32)/.test(k)) {
			return;
		}
		if (k === 13 || k === 32) {
			$this.click();
		}

		e.preventDefault();
		e.stopPropagation();
	};

	$('[data-toggle="collapse"]').attr('role', 'button').attr('tabindex', 0);
	$(document).on(
		'keydown.collapse.data-api',
		'[data-toggle="collapse"]',
		$.fn.collapse.Constructor.prototype.keydown
	);

	// List View
	$('.btn-list').click(function () {
		var elements = $("#grid-container .task-card");
		for (i = 0; i < elements.length; i++) {
			$(elements[i]).removeClass('col-md-4 col-sm-6');
			$(elements[i]).addClass('col-md-12');
			$(elements[i]).find('.gridview:nth-child(1)').addClass('listview col-md-9 col-sm-8');
			$(elements[i]).find('.gridview:nth-child(2)').addClass('listview col-md-3 col-sm-4 task-actions clearfix');
			$(elements[i]).find('.gridview').removeClass('gridview');
		};
		$('.view-btn').removeClass('btn-default')
		$(this).addClass('btn-default');
		localStorage.setItem("listview", "yes") //save the choice
	});

	// Grid View
	$('.btn-grid').click(function () {
		var elements = $("#grid-container .task-card");
		for (i = 0; i < elements.length; i++) {
			$(elements[i]).removeClass('col-md-12');
			$(elements[i]).addClass('col-md-4 col-sm-6');
			$(elements[i]).find('.listview').addClass('gridview')
			$(elements[i]).find('.listview:nth-child(1)').removeClass('listview col-md-9 col-sm-8');
			$(elements[i]).find('.listview:nth-child(2)').removeClass('listview col-md-3 col-sm-4 task-actions clearfix');
		};
		$('.view-btn').removeClass('btn-default')
		$(this).addClass('btn-default')
		localStorage.setItem("listview", "") //clears the choice
	});

	//load the view as per user's choice
	if (list === 'yes') {
		$('.btn-list').trigger('click');
	}
});
