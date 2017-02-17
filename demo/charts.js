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

new Chartist.Pie('.chart-teamcity', data, options);

// Line chart
var sprintChart = new Chartist.Line('.ct-chart2', {
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
var jiraChart = new Chartist.Pie('.chart-jira-type', data);


var webapi = getWebApiVersion();

console.log(webapi.version);
document.getElementById("webapi.version").innerHTML = webapi.version;

document.getElementById("webapi.date").innerHTML = webapi.date.split(" ")[0];
document.getElementById("webapi.time").innerHTML = webapi.date.split(" ")[1];

setInterval(myCounter, 3000);

function myCounter() {
    var value1 = Math.floor((Math.random() * 100) + 1);
    var value2 = Math.floor((Math.random() * 100) + 1);
    var value3 = Math.floor((Math.random() * 100) + 1);

    data = {
        series: [value1, value2, value3]
    };
    jiraChart.update(data);

    // switch of charts
    //new Chartist.Pie('.ct-chart2', data);

}


function getWebApiVersion() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "https://www.csas.cz/webapi/api/v1/version", false);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send();
    return JSON.parse(xhttp.responseText);
}



// Initialize Firebase
var config = {
    apiKey: "AIzaSyAVjS9iKb2IN2lNr1C0Gnip1VVcOvfWosc",
    authDomain: "fir-9b338.firebaseapp.com",
    databaseURL: "https://fir-9b338.firebaseio.com",
    storageBucket: "fir-9b338.appspot.com",
    messagingSenderId: "819813640707"
};
firebase.initializeApp(config);




