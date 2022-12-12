
const showChart = () => {
  google.charts.load('current', { 'packages': ['corechart'] });
  google.charts.setOnLoadCallback(drawChart);

  function drawChart() {
    var data = google.visualization.arrayToDataTable([
      ['', '', ''],
      ['2012', 0, 120],
      ['2013', 110, 200],
      ['2014', 140, 100],
      ['2015', 220, 220],
      ['2016', 50, 170],
      ['2017', 160, 135],
      ['2018', 140, 200],
      ['2019', 10, 160],
      ['2020', 5, 5],
      ['2021', 150, 200],

    ]);

    var options = {
      // title: 'Company Performance',
      // curveType: 'function',
      legend: { position: 'bottom' },
      height: 307,
      // backgroundColor: '#d3d3d3'
    };

    var chart = new google.visualization.LineChart(document.getElementById('chart'));

    chart.draw(data, options);
  }


}

export { showChart }
