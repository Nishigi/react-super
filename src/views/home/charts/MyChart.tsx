import React, { useEffect } from "react";
import * as echarts from 'echarts';
export default () => {

    useEffect(() => {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('aa'));
        // 绘制图表
        var option = {
            title: {
                text: 'ECharts 入门示例'
            },
            tooltip: {},
            xAxis: {
                data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
            },
            yAxis: {},
            series: [{
                name: '销量',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20]
            }]
        }
        myChart.setOption(option);
    }, [])

    return (
        <div id="aa" style={{ width: '450px', height: '250px', background: 'white' }}>

        </div>
    )
}