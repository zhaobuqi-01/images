 // 基于准备好的dom，初始化echarts实例
 var myChart = echarts.init(document.getElementById('zhexian'));

 // 指定图表的配置项和数据
 var option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {
        data: ['本土', '境外'],

		top:'2%',
        textStyle: {
            color: "rgba(255,255,255,.5)",
		    fontSize: '12',

        },
        itemWidth: 12,
        itemHeight: 12,
        //itemGap: 35
    },
    grid: {
        left: '0%',
		top:'40px',
        right: '0%',
        bottom: '0%',
       containLabel: true
    },
    xAxis: [{
        type: 'category',
      		data: ['5.2', '5.3', '5.4', '5.6', '5.7', '5.8', '5.9', '5.11', '5.12'],
        axisLine: {
            show: true,
         lineStyle: {
                color: "rgba(255,255,255,.1)",
                width: 1,
               
            },
        },
		
        axisTick: {
            show: false,
        },
		axisLabel:  {
                interval: 0,
               // rotate:50,
                show: true,
                splitNumber: 15,
                textStyle: {
 					color: "rgba(255,255,255,.6)",
                    fontSize: '12',
					
                },
            },
    }],
    yAxis: [{
        type: 'value',
        axisLabel: {
           //formatter: '{value} %'
			show:true,
			 textStyle: {
 					color: "rgba(255,255,255,.6)",
                    fontSize: '12',
                },
        },
        axisTick: {
            show: false,
        },
        axisLine: {
            show: false,
        },
        splitLine: {
            lineStyle: {
               color: "rgba(255,255,255,.1)",
				 type: "dotted"
            }
        }
    }],
    series: [{
        name: '本土',
        type: 'bar',
        data: [0.2, 3, 1.5, 2, 6, 1, 2, 2.1, 1.5],
        barWidth:'15%', //柱子宽度
       // barGap: 1, //柱子之间间距
        itemStyle: {
            normal: {
                color:'#2f89cf',
                opacity: 1,
				barBorderRadius: 5,
            }
        }
    }, {
        name: '境外',
        type: 'bar',
		data: [1, 4, 5, 3, 12, 3, 5, 3, 5],
		barWidth:'15%',
       // barGap: 1,
        itemStyle: {
            normal: {
                color:'#62c98d',
                opacity: 1,
				barBorderRadius: 5,
            }
        }
    },
		
	]
};

 // 使用刚指定的配置项和数据显示图表。
 myChart.setOption(option);