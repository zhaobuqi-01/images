	// 基于准备好的dom，初始化echarts实例
	var myChart = echarts.init(document.getElementById('siwang'));

	// 指定图表的配置项和数据
	var option = {
		legend: {},
		tooltip: {},
		dataset: {
			source: [
				['product', '中国', '外国'],
				['2020年', 20, 10],
				['2021年', 100, 90],
				['2022年', 100, 80],
				['2023年', 40, 30]
			]
		},
		xAxis: {
			type: 'category'
		},
		yAxis: {},
		// Declare several bar series, each will be mapped
		// to a column of dataset.source by default.
		series: [{
			type: 'bar'
		}, {
			type: 'bar'
		}]
	};

	// 使用刚指定的配置项和数据显示图表。
	myChart.setOption(option);