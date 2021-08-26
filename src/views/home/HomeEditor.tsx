import React from 'react'
import { Row, Col } from 'antd';

import LineCharts from "./bizcharts/LineCharts";
import Interval from "./bizcharts/Interval";
import Theta from "./bizcharts/Theta";
import Point from "./bizcharts/Point";

import Mychart from "./charts/MyChart";
import AnimationChart from "./charts/AnimationChart";
import Round from "./charts/Round";
import Exponential from "./charts/Exponential";

export default () => {
  return (
    <div>
      <h1>editor的首页</h1>
      <Row >
        <Col span={11}>
          <Mychart />
        </Col>
        <Col offset={2} span={11}>
          <AnimationChart />
        </Col>
      </Row>
      <Row style={{ marginTop: '10px' }}>
        <Col span={11}>
          <Round />
        </Col>
        <Col offset={2} span={11}>
          <Exponential />
        </Col>
      </Row>
      <Row style={{ marginTop: '10px' }}>
        <Col span={11} style={{ background: 'white' }} >
          <LineCharts />
        </Col>
        <Col offset={2} span={11} style={{ background: 'white' }} >
          <Interval />
        </Col>
      </Row>
      <Row style={{ marginTop: '10px' }}>
        <Col span={11} style={{ background: 'white' }} >
          <Theta />
        </Col>
        <Col offset={2} span={11} style={{ background: 'white' }} >
          <Point />
        </Col>
      </Row>
    </div>
  )
}
