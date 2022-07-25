$(function() {

  (function(H) {
    H.wrap(H.Chart.prototype, 'getContainer', function(proceed) {
      proceed.apply(this);

      var chart = this,
        renderer = chart.renderer,
        defOptions = chart.options.defs || [],
        i = defOptions.length,
        def,
        D;

      while (i--) {
        def = defOptions[i];
        var D = renderer.createElement('marker').attr({
          id: def.id,
          viewBox: "0 0 10 10",
          refX: 1,
          refY: 5,
          markerWidth: 6,
          markerHeight: 6,
          orient: 'auto',
          fill: 'inherit',
        }).add(renderer.defs);
        renderer.createElement('path').attr({
          d: def.path,
          fill: 'white'
        }).add(D);
      }
    });

    H.wrap(H.Series.prototype, 'drawGraph', function(proceed) {
      proceed.apply(this);
      if (this.options.endMarker) {
        this.graph.element.setAttribute('marker-end', this.options.endMarker);
      }
    });
  })(Highcharts);

  $('#container').highcharts({
    defs: [{
      id: 'arrow',
      path: 'M 0 0 L 10 5 L 0 10 z',
      fill: 'inherit'
    }],
    chart: {
      type: 'heatmap',
      marginTop: 40,
      marginBottom: 40,
      backgroundColor: '#e7e6e6',
      plotBackgroundColor: {
        linearGradient: {
          x1: 1,
          y1: 0,
          x2: 0,
          y2: 1
        },
        stops: [
          [0.23, 'rgb(240, 59, 9)'],
          [0.5, 'rgb(255, 224, 80)'],
          [0.67, 'rgb(54, 64, 207)'],
          [0.99, 'rgb(13, 163, 35)'],
          [1, 'rgb(217, 186, 50']
        ]
      }
    },
    title: {
      text: 'Sales per employee per weekday',
      align: 'left',
      style: {
        fontWeight: 'bold'
      }
    },
    xAxis: {
      categories: [' 1', '2', '3', '4', '5'],
      title: {
        text: "Impact",
        style: {
          fontWeight: 'bold'
        }
      }
    },
    yAxis: {
      categories: [' 1', '2', '3', '4', '5'],
      title: {
        text: 'Likelihood',
        style: {
          fontWeight: 'bold'
        }
      },
    },
    colorAxis: {
      min: 0,
      minColor: 'transparent',
      maxColor: 'transparent',
    },
    legend: {
      enabled: false,
      align: 'right',
      layout: 'vertical',
      margin: 0,
      verticalAlign: 'top',
      y: 25,
      symbolHeight: 320
    },

    tooltip: {
      enabled: true,
      formatter: function() {
        return '<b>' + this.series.xAxis.categories[this.point.x] + '</b> sold <br><b>' +
          this.point.value + '</b> items on <br><b>' + this.series.yAxis.categories[this.point.y] + '</b>';
      }
    },
    plotOptions: {
      series: {
        states: {
          hover: {
            color: 'white'
          }
        }
      }
    },
    series: [{
      type: 'heatmap',
      name: 'Financial Residual Risk Distribution',
      data: [
        [0, 0, 0],
        [0, 1, 12],
        [0, 2, 8],
        [0, 3, 24],
        [0, 4, 67],
        [1, 0, 92],
        [1, 1, 58],
        [1, 2, ''],
        [1, 3, ""],
        [1, 4, 48],
        [2, 0, 35],
        [2, 1, 15],
        [2, 2, 123],
        [2, 3, 64],
        [2, 4, 52],
        [3, 0, 72],
        [3, 1, 132],
        [3, 2, 114],
        [3, 3, 19],
        [3, 4, 16],
        [4, 0, 38],
        [4, 1, 5],
        [4, 2, 8],
        [4, 3, 117],
        [4, 4, 115]
      ],
      dataLabels: {
        enabled: true,
        color: 'black',
        style: {
          textShadow: 'none'
        }
      }
    }, {
      type: 'scatter',
      lineWidth: 4,
      lineColor: '#1d94f9',
      data: [[0,3],[1,4]],
      endMarker: 'url(#arrow)',
      dataLabels: {
        enabled: true,
        color: 'black',
        style: {
          textShadow: 'none'
        }
      }
    }, {
      type: 'scatter',
      lineWidth: 4,
      lineColor: '#1d94f9',
      data: [[1, 2], [2, 3]],
      endMarker: 'url(#arrow)',
      dataLabels: {
        enabled: true,
        color: 'black',
        style: {
          textShadow: 'none'
        }
      }
    }, {
      type: 'scatter',
      lineWidth: 4,
      lineColor: '#1d94f9',
      data: [[2, 3],[2, 4]],
      endMarker: 'url(#arrow)',
      dataLabels: {
        enabled: true,
        color: 'black',
        style: {
          textShadow: 'none'
        }
      }
    }]

  });
});
