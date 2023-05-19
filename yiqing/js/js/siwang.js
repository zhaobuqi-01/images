	// 基于准备好的dom，初始化echarts实例
	var myChart = echarts.init(document.getElementById('siwang'));
	const gaugeData = [{
		value: 1.03,
		title: {
			offsetCenter: ['-40%', '80%']
		},
		detail: {
			offsetCenter: ['-40%', '95%']
		}
	}];
	// 指定图表的配置项和数据
	var option = {
		series: [{
			type: 'gauge',
			anchor: {
				show: true,
				showAbove: true,
				size: 18,
				itemStyle: {
					color: '#ffffff'
				}
			},
			pointer: {
				icon: 'path://M2.9,0.7L2.9,0.7c1.4,0,2.6,1.2,2.6,2.6v115c0,1.4-1.2,2.6-2.6,2.6l0,0c-1.4,0-2.6-1.2-2.6-2.6V3.3C0.3,1.9,1.4,0.7,2.9,0.7z',
				width: 8,
				length: '80%',
				offsetCenter: [0, '8%']
			},
			progress: {
				show: true,
				overlap: true,
				roundCap: true
			},
			axisLine: {
				roundCap: true
			},
			data: gaugeData,
			title: {
				fontSize: 14
			},
			detail: {
				width: 40,
				height: 14,
				fontSize: 14,
				color: '#fff',
				backgroundColor: 'inherit',
				borderRadius: 3,
				formatter: '{value}%'
			}
		}]
	};

	// 使用刚指定的配置项和数据显示图表。
	myChart.setOption(option);