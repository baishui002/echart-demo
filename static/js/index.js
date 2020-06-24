
// 柱形图-就业行业
(function () {
  var myChart = echarts.init(document.querySelector('#industry'))
  var option = {
    color: ['#2f89cf'],
    tooltip: {
      trigger: 'axis',
      axisPointer: {            // 坐标轴指示器，坐标轴触发有效
        type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
      }
    },
    grid: {
      top: '10px',
      left: '0%',
      right: '0%',
      bottom: '4%',
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        data: ["旅游行业", "教育培训", "游戏行业", "医疗行业", "电商行业", "社交行业", "金融行业"],
        // boundaryGap: false,
        axisTick: {
          alignWithLabel: true
        },
        axisLabel: {
          color: 'rgba(255, 255, 255, .6)',
          fontSize: '12px'
        },
        axisLine: {
          show: false
        }
      }
    ],
    yAxis: [
      {
        type: 'value',
        splitLine: {
          lineStyle: {
            color: 'rgba(255,255,255,.1)'
          }
        },
        axisLabel: {
          color: 'rgba(255,255,255,.6)',
          fontSize: '12px'
        },
        axisLine: {
          lineStyle: {
            color: 'rgba(255,255,255,.1)'
            // width: 1,
            // type: 'solid'
          }
        }
      }
    ],
    series: [
      {
        name: '直接访问',
        type: 'bar',
        barWidth: '35%',
        data: [200, 300, 300, 900, 1500, 1200, 600],
        itemStyle: {
          borderType: 'dashed',
          barBorderRadius: 5
        },
        markLine: {
          data: [
            { type: 'average', name: '平均值' }
          ]
        }
      }
    ]
  }

  myChart.setOption(option)
  window.addEventListener("resize", function () {
    myChart.resize();
  });
})();


// 折线图-人员变化
(function () {
  var myChart = echarts.init(document.querySelector('#people'))
  // 数据变化
  var yearData = [
    {
      year: "2020", // 年份
      data: [
        // 两个数组是因为有两条线
        [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
        [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79]
      ]
    },
    {
      year: "2021", // 年份
      data: [
        // 两个数组是因为有两条线
        [123, 175, 112, 197, 121, 67, 98, 21, 43, 64, 76, 38],
        [143, 131, 165, 123, 178, 21, 82, 64, 43, 60, 19, 34]
      ]
    }
  ];
  var option = {
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      right: '10%',
      textStyle: {
        color: '#4c9bfd'
      }
    },
    grid: {
      top: '20%',
      left: '3%',
      right: '4%',
      bottom: '3%',
      show: true,// 显示边框
      borderColor: '#012f4a',// 边框颜色
      containLabel: true
    },
    xAxis: {
      type: 'category',
      boundaryGap: false, // 去除轴内间距
      data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
      axisLabel: {
        color: '#4c9bfd'
      },
      axisTick: {
        show: false
      },
      axisLine: {
        show: false // 去除轴线
      },
    },
    yAxis: {
      type: 'value',
      axisTick: {
        show: false
      },
      splitLine: {
        lineStyle: {
          color: '#012f4a'
        }
      },
      axisLabel: {
        color: '#4c9bfd'
      }
    },
    color: ['#00f2f1', '#ed3f35'],
    series: [
      {
        name: '新增粉丝',
        type: 'line',
        // stack: '总量',
        smooth: true,
        data: yearData[0].data[0]
      },
      {
        name: '新增游客',
        type: 'line',
        // stack: '总量',
        smooth: true,
        data: yearData[0].data[1]
      }
    ]
  }

  myChart.setOption(option)

  $('.people h2').on('click', 'a', function () {
    console.log($(this).index())
    option.series[0].data = yearData[$(this).index()].data[0]
    option.series[1].data = yearData[$(this).index()].data[1]
    myChart.setOption(option)
  })

  window.addEventListener("resize", function () {
    myChart.resize();
  });
})();


// 饼形图-年龄分布
// (function () {
//   // var myChart = echarts.init(document.querySelector('#id'))

//   // myChart.setOption(option)
// window.addEventListener("resize", function() {
//   myChart.resize();
// });
// })();

// 饼形图-年龄分布
(function () {
  var myChart = echarts.init(document.querySelector('#age'))
  option = {
    tooltip: {
      // trigger: 'item',
      // formatter: '{a} <br/>{b}: {c} ({d}%)'
      show: true,
      backgroundColor: 'transparent',
      trigger: 'item',
      formatter: function (prams) {
        return tipFormatter(prams);
      },
      position: 'top',
      padding: [1, 10],
      textStyle: {
        fontSize: 12
      }

    },
    legend: {
      orient: 'horizontal',
      // top: '90%',
      bottom: 0,
      itemWidth: 10,
      itemHeight: 10,
      textStyle: {
        color: 'rgba(255,255,255,.5)',
        fontSize: 12
      },
      data: ["0岁以下", "20-29岁", "30-39岁", "40-49岁", "50岁以上"]
    },
    series: [
      {
        name: '年龄分布',
        type: 'pie',
        center: ['50%', '40%'],
        radius: ['40%', '60%'],
        color: [
          "#065aab",
          "#066eab",
          "#0682ab",
          "#0696ab",
          "#06a0ab",
          "#06b4ab",
          "#06c8ab",
          "#06dcab",
          "#06f0ab"
        ],
        avoidLabelOverlap: false,
        label: {
          show: false,
          position: 'center'
        },
        // emphasis: {
        //   label: {
        //     show: true,
        //     fontSize: '30',
        //     fontWeight: 'bold'
        //   }
        // },
        labelLine: {
          show: false
        },
        itemStyle: {
          borderWidth: 1, //设置border的宽度有多大
          borderColor: '#fff',
        },
        data: [
          { value: 1, name: "0岁以下" },
          { value: 4, name: "20-29岁" },
          { value: 2, name: "30-39岁" },
          { value: 2, name: "40-49岁" },
          { value: 1, name: "50岁以上" }
        ]
      }
    ]
  };
  // 带3角tooltip
  function tipFormatter(prams) {
    var name = prams.data.name;
    var divWarp = $('<div class="div-tip-warp"/>');
    var divContent = $('<div class = "tip-background">');
    var span = $('<span>').text(name);
    var divTriangle = $('<div class ="triangle-down hotel-triangle-position">');
    var divFirst = divContent.append(span);
    var div = divWarp.append(divFirst).append(divTriangle);
    return div.html();
  }


  myChart.setOption(option)
  window.addEventListener("resize", function () {
    myChart.resize();
  });
})();

// 饼形图-地区分布
(function () {
  var myChart = echarts.init(document.querySelector('#area'))
  option = {
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
    legend: {
      left: 'center',
      bottom: 0,
      itemWidth: 10,
      itemHeight: 10,
      textStyle: {
        color: '#fff'
      }
    },
    color: ['#006cff', '#60cda0', '#ed8884', '#ff9f7f', '#0096ff', '#9fe6b8', '#32c5e9', '#1d9dff'],
    series: [
      {
        name: '地区分布',
        type: 'pie',
        radius: ['10%', '60%'],
        center: ['50%', '40%'],
        roseType: 'radius',
        labelLine: {
          length: 6,
          length2: 8,
        },
        label: {
          fontSize: 10
        },
        data: [
          { value: 20, name: '云南' },
          { value: 26, name: '北京' },
          { value: 24, name: '山东' },
          { value: 25, name: '河北' },
          { value: 20, name: '江苏' },
          { value: 15, name: '浙江' },
          { value: 30, name: '四川' }
        ]
      }
    ]
  };

  myChart.setOption(option)
  window.addEventListener("resize", function () {
    myChart.resize();
  });
})();

// 折线图-播放量
(function () {
  var myChart = echarts.init(document.querySelector('#play'))
  var option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        label: {
          backgroundColor: '#6a7985'
        }
      }
    },
    legend: {
      data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎']
    },

    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        boundaryGap: false,
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
      }
    ],
    yAxis: [
      {
        type: 'value'
      }
    ],
    series: [
      {
        name: '邮件营销',
        type: 'line',
        stack: '总量',
        areaStyle: {},
        data: [120, 132, 101, 134, 90, 230, 210]
      },
      {
        name: '联盟广告',
        type: 'line',
        stack: '总量',
        areaStyle: {},
        data: [220, 182, 191, 234, 290, 330, 310]
      }
    ]
  };

  myChart.setOption(option)
  window.addEventListener("resize", function () {
    myChart.resize();
  });
})();


