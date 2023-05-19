	// 基于准备好的dom，初始化echarts实例
	var myChart = echarts.init(document.getElementById('hangye'));

	// 指定图表的配置项和数据
	var option = {
		legend: {},
		  tooltip: {},
		  dataset: {
		    dimensions: ['product', '餐饮业', '医护业', '出租车行业','快递业'],
		    source: [
		      { product: '2020', '餐饮业': 70, '医护业': 60, '出租车行业': 70, '快递业': 90 },
		      { product: '2021', '餐饮业': 20, '医护业': 90, '出租车行业':10, '快递业': 10 },
		      { product: '2022', '餐饮业': 40, '医护业': 100, '出租车行业': 30, '快递业': 5 },
		      { product: '2023', '餐饮业': 80, '医护业': 90, '出租车行业': 70 , '快递业': 80}
		    ]
		  },
		  xAxis: { type: 'category' },
		  yAxis: {},
		  // Declare several bar series, each will be mapped
		  // to a column of dataset.source by default.
		  series: [{ type: 'bar' }, { type: 'bar' }, { type: 'bar' },{ type: 'bar' }]
	};
	
	// 使用刚指定的配置项和数据显示图表。
	myChart.setOption(option);