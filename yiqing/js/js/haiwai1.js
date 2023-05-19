	// 基于准备好的dom，初始化echarts实例
	var myChart = echarts.init(document.getElementById('haiwai'));

	// 指定图表的配置项和数据
	var option = {
		title: {
		    text: '人数'
		  },
		  tooltip: {
		    trigger: 'axis'
		  },
		  legend: {
		    data: ['美国', '印度', '法国', '德国', '韩国','日本']
		  },
		  grid: {
		    left: '3%',
		    right: '4%',
		    bottom: '3%',
		    containLabel: true
		  },
		  toolbox: {
		    feature: {
		      saveAsImage: {}
		    }
		  },
		  xAxis: {
		    type: 'category',
		    boundaryGap: false,
		    data: ['2020.12.13','2021.2.22','2021.7.04','2022.3.25','2022.8.04','2022.12.14','2023.5.16']
		  },
		  yAxis: {
		    type: 'value'
		  },
		  series: [
		    {
		      name: '美国',
		      type: 'line',
		      stack: 'Total',
		      data: [85840, 7894480, 94726259, 93866641, 101865927, 101865927, 101865927]
		    },
		    {
		      name: '印度',
		      type: 'line',
		      stack: 'Total',
		      data: [180091, 7706946, 20282833, 33293197, 43006080, 43138393, 38971117]
		    },
		    {
		      name: '法国',
		      type: 'line',
		      stack: 'Total',
		      data: [1515, 18059, 164443, 17257171, 8811614, 27197349, 27581407]
		    },
		    {
		      name: '德国',
		      type: 'line',
		      stack: 'Total',
		      data:[91159, 470392, 3338564, 6926604, 18424575, 36758326, 37088426]
		    },
		    {
		      name: '韩国',
		      type: 'line',
		      stack: 'Total',
		      data: [9786, 23812, 125519, 251421, 762983, 25194177, 28390646]
		    },
			{
			  name: '日本',
			  type: 'line',
			  stack: 'Total',
			  data: [1515, 18059, 164443, 17257171, 8811614, 27197349, 27581407]
			}
		  ]
	};

	// 使用刚指定的配置项和数据显示图表。
	myChart.setOption(option);