// This file is part of pa11y-dashboard.
//
// pa11y-dashboard is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// pa11y-dashboard is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with pa11y-dashboard.  If not, see <http://www.gnu.org/licenses/>.

$(document).ready(function(){

    var data = {};
	var standardsList = $('[data-role="standards-list"]');
	var standardSelect = $('[data-role="new-task-select"]');
	var expandLink = $('[data-role="expander"]');
    var taskListSelector = $('[data-role="task-list"] a');
    var toTopLinks = $('[data-role="top"]');
    var zoomResetButton = $('[data-role="zoom-reset"]');
    var graphContainer = $('[data-role="graph"]');
    var dateSelectDropdownMenu = $('[data-role="date-select-dropdown-menu"]');

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
            fillColor: "rgb(255, 255, 255)"
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
        legend: {
            labelFormatter: function(label, series) {
                return '<span id="' + label +'Legend">' + label + '</span>';
            }
        },
        selection: {
            mode: 'x'
        }
    };

    // Toggle appearance of lists of error/warnings/notices
    expandLink.click( function(){
		$(this).next().slideToggle('slow', function(){});
        if ($(this).hasClass('showing')) {
            $(this).find('span.expander').html('+');
            $(this).attr('aria-expanded', false);
        }
        else {
            $(this).find('span.expander').html('-');
            $(this).attr('aria-expanded', true);
        }
        $(this).toggleClass('showing');
	});
    $(document).on('keydown.lists', '[data-role="expander"]', function (e) {
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

    $('[data-role="rules-tooltip"]').tooltip();

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

    function newLegend () {
        var errors = graphContainer.find('.legend #ErrorsLegend');
        var warnings = graphContainer.find('.legend #WarningsLegend');
        var notices = graphContainer.find('.legend #NoticesLegend');
        var legend = graphContainer.find('.legend');
        var table = graphContainer.find('table');

        var tableStyle = table.attr('style');
        legend.attr('style', tableStyle);
        table.removeAttr('style');

        legend.css({
            background: 'rgba(255, 255, 255, 0.75)'
        });

        table.css({
            background: '#fff',
            border: '1px solid #808080',
            margin: '5px'
        });
        table.find('tr > td:first-child').css({
            paddingLeft: '10px',
            paddingRight: '5px'
        });
        table.find('tr > td:last-child').css({
            paddingRight: '10px'
        });
        table.find('tr:first-child > td').css({
            paddingTop: '5px'
        });
        table.find('tr:last-child > td').css({
            paddingBottom: '5px'
        });
        table.prev('div').remove();

        if (errors.length) {
            var icon = errors.parent().prev().children('div');
            icon.css({
                padding: 3
            });
            icon.find('div').css({
                width: '25px',
                borderWidth: 3,
                borderBottom: 0,
                borderLeft: 0,
                borderRight: 0,
            })
        }

        if (warnings.length) {
            var icon = warnings.parent().prev().children('div');
            icon.addClass('clearfix').css({
                padding: 3
            });
            icon.find('div').clone().appendTo(icon[0]);
            icon.find('div').css({
                float: 'left',
                width: '10px',
                borderWidth: 3,
                borderBottom: 0,
                borderLeft: 0,
                borderRight: 0,
            })
            icon.find('div:first-child').css({
                marginRight: '5px'
            });
        }

        if (notices.length) {
            var icon = notices.parent().prev().children('div');
            icon.addClass('clearfix').css({
                padding: 3
            });
            icon.find('div').clone().appendTo(icon[0]).end().clone().appendTo(icon[0]);
            icon.find('div').css({
                float: 'left',
                width: '5px',
                marginRight: '5px',
                borderWidth: 3,
                borderBottom: 0,
                borderLeft: 0,
                borderRight: 0,
            })
            icon.find('div:last-child').css({
                marginRight: '0'
            });
        }
    }

    function plotGraphData () {
        $.plot(graphContainer, getData(), graphOptions);
        newLegend();
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
        choiceContainer.find('input:checked').each(function () {
            var key = $(this).attr('name');
            if (key && datasets[key]) {
                data.push(datasets[key]);
            }
        });

        if (data.length > -1) {
            $.plot(graphContainer, data, graphOptions);
            newLegend();
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
            if (previousPoint != item.dataIndex) {
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

});
