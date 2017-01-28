new Chartist.Bar('.ct-chart1', {
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Nedele'],
    series: [
        [2, 8, 2, 4, 5, 8, 10],
        [4, 5, 8, 2, 6, 3, 10]
    ]
}, {
    seriesBarDistance: 6,
    axisX: {
        showGrid: false,
        labelInterpolationFnc: function (value) {
            return value[0];
        }
    }
}, [
    ['screen and (min-width: 300px)', {
        seriesBarDistance: 15,
        axisX: {
            labelInterpolationFnc: function (value) {
                return value.slice(0, 3);
            }
        }
    }],
    ['screen and (min-width: 600px)', {
        seriesBarDistance: 30,
        axisX: {
            labelInterpolationFnc: Chartist.noop
        }
    }]
]);



new Chartist.Bar('.ct-chart2', {
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Nedele'],
    series: [
        [2, 8, 2, 4, 5, 8, 10],
        [4, 5, 8, 2, 6, 3, 10]
    ]
}, {
    seriesBarDistance: 6,
    axisX: {
        showGrid: false,
        labelInterpolationFnc: function(value) {
            return value[0];
        }
    }
}, [
    ['screen and (min-width: 300px)', {
        seriesBarDistance: 15,
        axisX: {
            labelInterpolationFnc: function(value) {
                return value.slice(0, 3);
            }
        }
    }],
    ['screen and (min-width: 600px)', {
        seriesBarDistance: 30,
        axisX: {
            labelInterpolationFnc: Chartist.noop
        }
    }]
]);
