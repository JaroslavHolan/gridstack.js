var data;
var options;
var responsiveOptions;

data = {
    labels: ['To Do', 'Open', 'Closed'],
    series: [
        [2, 8, 2],
        [4, 5, 8]
    ]
};


options = {
    seriesBarDistance: 50,
    height: '400px',
    axisX: {
        showGrid: false
    },
    axisY: {
        onlyInteger: true
    }
};

new Chartist.Bar('.chart-jira', data, options).on('draw', function (data) {
    if (data.type === 'bar') {
        data.element.attr({
            style: 'stroke-width: 50px'
        });
    }
});




// Chart Teamcity builds
data = {
    series: [5, 28]
};
options = {
    donut: true,
    donutWidth: 60,
    startAngle: 270,
    total: 66,
    showLabel: true
};

new Chartist.Pie('.chart-teamcity', data, options)

// Line chart
new Chartist.Line('.ct-chart2', {
    labels: ['Po', 'Út', 'St', 'Čt', 'Pá', 'Po', 'Út', 'St', 'Čt', 'Pá'],
    series: [
        [2, 3, 2, 4, 5, 2, 3]
    ]
}, {
    height: '300px',
    showArea: true,
    axisX: {
        showGrid: true
    },
    axisY: {
        onlyInteger: true
    }
});


// Pie chart
data = {
    labels: ['common:10', 'intrabanking:9', 'monkbox:7', 'netbanking:10', 'slq:5'],
    series: [10, 9, 7, 10, 5]
};

options = {
    labelInterpolationFnc: function (value) {
        return value
    },
    // labelDirection: 'explode',
    labelOffset: 10
};

new Chartist.Pie('.chart-pending', data, options);


// demo pie
// Simple pie chart example with four series
data = {
    series: [10, 2, 4]
};
new Chartist.Pie('.chart-jira-type', data);


