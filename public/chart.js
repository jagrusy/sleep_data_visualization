// google.charts.load('current', {'packages': ['line']});
google.charts.load('current', {packages: ['corechart', 'line']});
google.charts.setOnLoadCallback(getData);

function drawChart(arrayData) {
  // var arrayData = getData();
  // alert('::got dta');
  var data = google.visualization.arrayToDataTable(arrayData);

  var options = {
    title: 'Sleep Data',
    curveType: 'function',
    legend: {
      position: 'bottom'
    },
    explorer: {},
    selectionMode: 'multiple',
    hAxis: {
      viewWindow: {
        min: 0,
        max: 10
      }
    }
  };

  var chart = new google.visualization.LineChart(document.getElementById('classic'));

  chart.draw(data, options);
  //------------------
  //console.log('::::' + arrayData);
  // var data1 = new google.visualization.DataTable();
  // data1.addColumn('string', 'TimeStamp');
  // data1.addColumn('number', 'X');
  // data1.addColumn('number', 'Y');
  // data1.addColumn('number', 'Z');
  //
  // for (var i = 1; i < arrayData.length; i++) {
  //   data1.addRow(arrayData[i]);
  // }
  //
  // var options1 = {
  //   chart: {
  //     title: 'Sleep data for XXX',
  //   },
  //   width: 6000,
  //   height: 500
  // };
  //
  // var chart1 = new google.charts.Line(document.getElementById('linechart'));
  //
  // chart.draw(data, google.charts.Line.convertOptions(options1));
  //

}
// google.charts.load("current", {packages:["corechart"]});
// google.charts.setOnLoadCallback();
// function drawChart(arrayData) {
//   alert('::' + arrayData);
//   var data = google.visualization.arrayToDataTable(
//     arrayData
//   );
//
//   var options = {
//     legend: 'none',
//     series: {
//       0: { color: '#e2431e' },
//       1: { color: '#e7711b' },
//       2: { color: '#f1ca3a' },
//     }
//   };
//
//   var chart = new google.visualization.LineChart(document.getElementById('chart_div'));
//   chart.draw(data, options);
// }

function getData() {
  $.ajax({
      method: "GET",
      url: "./api/parse_csv",
      contentType: "application/json",
    })
    .done(function(data) {
      drawChart(data);
    });
}
