let primaryColor = getComputedStyle(document.documentElement).getPropertyValue('--color-primary').trim();
let secondaryColor = getComputedStyle(document.documentElement).getPropertyValue('--color-secondary').trim();
let fontFamily = getComputedStyle(document.documentElement).getPropertyValue('--font-family').trim();

var iteration = 11;
var lastMin = [0,0,0]
var dataEff = []
var xaxisPre = [];
var TICKINTERVAL = 300000
let XAXISRANGE = 2700000
var currentTime = new Date().getTime()+(8 * 60 * 60 * 1000);
var currentHour = new Date().setMinutes(0, 0, 0)+(8 * 60 * 60 * 1000)

function getHourWiseTimeSeries(baseval, count, yrange, data, graphNum) {
  var i = 0;
  while (i < count) {
    var x = baseval;
    var y = Math.floor(Math.random() * ((yrange.max - yrange.min) + 1)) + yrange.min;

    data.push({
      x, y
    });
    lastMin[graphNum] = baseval
    baseval += 3600000;
    i++;
  }
}

getHourWiseTimeSeries(currentHour - (1000*60*60*9), 10, {
  min: 80,
  max: 90
}, dataEff, 2)

window.Apex = {
  chart: {
    foreColor: primaryColor,
    toolbar: {
      show: false
    },
  },
  colors: ['#FCCF31', '#17ead9', '#f02fc2'],
  stroke: {
    width: 3
  },
  dataLabels: {
    enabled: false
  },
  grid: {
    borderColor: "#40475D",
  },
  xaxis: {
    axisTicks: {
      color: '#333'
    },
    axisBorder: {
      color: "#333"
    }
  },
//   fill: {
//     type: 'gradient',
//     gradient: {
//       gradientToColors: ['#F55555', '#6078ea', '#6094ea']
//     },
//   },
  tooltip: {
    theme: 'dark',
    x: {
      formatter: function (val) {
        return moment(new Date(val)).format("HH:mm:ss")
      }
    }
  },
  yaxis: {
    decimalsInFloat: 2,
    opposite: true,
    labels: {
      offsetX: -10
    }
  }
};


var optionsEfficiency = {
    chart: {
      height: 250,
      type: 'line',
      stacked: true,
      animations: {
        enabled: true,
        easing: 'linear',
        dynamicAnimation: {
          speed: 1000
        }
      },
      dropShadow: {
        enabled: false,
        opacity: 0.3,
        blur: 5,
        left: -7,
        top: 22
      },
      toolbar: {
        show: false
      },
      zoom: {
        enabled: false
      },
      
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'straight',
      width: 5,
    },
    grid: {
      padding: {
        left: 0,
        right: 0
      }
    },
    markers: {
      size: 0,
      hover: {
        size: 0
      }
    },
    series: [{
        name: 'Efficiency',
        data: dataEff.slice()
        }],
    yaxis:{
      min: 70,
      max: 100
    },
    xaxis: {
      type: 'datetime',
      range: 32400000
    },
    title: {
      text: 'Efficiency',
      align: 'left',
      style: {
        fontSize: '12px'
      }
    },
    subtitle: {
      text: '%',
      floating: true,
      align: 'right',
      offsetY: 0,
      style: {
        fontSize: '22px'
      }
    },
    legend: {
      show: true,
      floating: true,
      horizontalAlign: 'left',
      onItemClick: {
        toggleDataSeries: false
      },
      position: 'top',
      offsetY: -28,
      offsetX: 60
    },
  }
  
  var chartEfficiency = new ApexCharts(
    document.querySelector("#chart-efficiency"),
    optionsEfficiency
  );
  chartEfficiency.render()