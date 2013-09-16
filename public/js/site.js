$(document).ready(function(){

    var data = {};
	var standardsList = $('[data-role="standards-list"]');
	var standardSelect = $('[data-role="new-task-select"]');
	var headingBadges = $('.heading-badges');
    var taskListSelector = $('[data-role="task-list"] a');
    var toTopLinks = $('[data-role="top"]');
    var zoomResetButton = $('[data-role="zoom-reset"]');
    var graphContainer = $('[data-role="graph"]');

    var graphOptions = {
        series: {
                lines: { show: true },
                points: { show: true },
                hoverable: true
            },
        xaxis: {
            mode: "categories",
            tickLength: 0
        },
        lines: {
            lineWidth: 3
        },
        grid: {
            backgroundColor: "#fff",
            borderColor: "#808080",
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
            mode: "x"
        }
    };

    // Toggle appearance of lists of error/warnings/notifications
	headingBadges.click( function(){
		$(this).parent().next('ul').slideToggle();
        $(this).toggleClass('showing');
	});

     // Back to top links
    toTopLinks.click( function(e){
        e.preventDefault();
        $(animateSection($('#top'), -25));
    });

	switchStandardsList(standardSelect);

	standardSelect.change( function(){
		switchStandardsList($(this));
	});

    taskListSelector.click( function(e) {
        e.preventDefault();
        target = $(this).attr('href');
        animateSection($(target), -25);
        if (!$(target).next('ul').hasClass('showing')) {
            $(target).children('.heading-badges').click();
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
        $.each($('[data-role="url-stats"]'), function() {
            var el = $(this);
            storeDatum(el, getXAxisLabel(el));
        });
    }

    function getXAxisLabel (el) {
        return el.find('[data-role="category"]').html();
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
    }

    function getData() {
        return [
            { color: "rgb(231, 76, 60)", label: "Errors", data:  data.error },
            { color: "rgb(243, 156, 18)", label: "Warnings", data:  data.warning  },
            { color: "rgb(52, 152, 219)", label: "Notifications", data:  data.notification }
        ];
    }

    function toggleResetZoomButton() {
        zoomResetButton.toggleClass('hidden');
    }

    graphContainer.bind("plotselected", function (event, ranges) {
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
        toggleResetZoomButton();
    });

    var choiceContainer = $('[data-role="series-checkboxes"]');
    var datasets = getData();

    $.each(datasets, function(key, val) {
        var lowerCaseValue = (val.label.substring(0, val.label.length - 1)).toLowerCase();
        choiceContainer.append("<li class='"+ lowerCaseValue +"'><label class='checkbox-inline' for='id" + key + "'><input type='checkbox' name='" + key + "' checked='checked' id='id" + key + "'/>" + val.label + "</label></li>");
    });
    
    choiceContainer.find("input").click(plotAccordingToChoices);
        
    function plotAccordingToChoices() {
        var data = [];
        choiceContainer.find("input:checked").each(function () {
            var key = $(this).attr("name");
            if (key && datasets[key]) {
                data.push(datasets[key]);
            }
        });
        
        if (data.length > -1) {
            $.plot(graphContainer, data, graphOptions);
        }
    }

    function showTooltip(x, y, contents) {
        $("<div data-role='tooltip' class='tooltip'>" + contents + "</div>").css({
        top: y + 5,
        left: x + 5
        }).appendTo("body").fadeIn(200);
    }

    var previousPoint = null;
    graphContainer.bind("plothover", function (event, pos, item) {
        if (item) {
            if (previousPoint != item.dataIndex) {
                previousPoint = item.dataIndex;
                $("[data-role='tooltip']").remove();
                var y = item.datapoint[1].toFixed(0);
                var contents = "<h6 class='crunch'>" + y + " " + item.series.label + "</h6>";
                showTooltip(item.pageX, item.pageY, contents);
            }
            } else {
                $("[data-role='tooltip']").remove();
                previousPoint = null;
            }
    });
});