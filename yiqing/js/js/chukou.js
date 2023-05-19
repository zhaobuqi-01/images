	// 基于准备好的dom，初始化echarts实例
	var myChart = echarts.init(document.getElementById('chukou'));

	// 指定图表的配置项和数据
	var option = {
		 title: {
		    text: '',
		    subtext: '',
		    left: 'center'
		  },
		  tooltip: {
		    trigger: 'item'
		  },
		  legend: {
		    orient: 'vertical',
		    left: 'left'
		  },
		  series: [
		    {
		      name: 'Access From',
		      type: 'pie',
		      radius: '50%',
		      data: [
		        { value: 1048, name: '进口' },
		        { value: 735, name: '出口' },
		      ],
		      emphasis: {
		        itemStyle: {
		          shadowBlur: 10,
		          shadowOffsetX: 0,
		          shadowColor: 'rgba(0, 0, 0, 0.5)'
		        }
		      }
		    }
		  ]
	};

	// 使用刚指定的配置项和数据显示图表。
	myChart.setOption(option);