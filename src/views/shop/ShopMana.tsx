import React, { useEffect } from "react";
import {
    Form, Input, Cascader, Button, Breadcrumb
} from 'antd';

import './style.scss'

export default () => {

    const options = [
        {
            value: '浙江',
            label: '浙江',
            children: [
                {
                    value: '杭州',
                    label: '杭州',
                    children: [
                        {
                            value: '西湖',
                            label: '西湖',
                        },
                    ],
                },
            ],
        },
        {
            value: '江苏',
            label: '江苏',
            children: [
                {
                    value: '南京',
                    label: '南京',
                    children: [
                        {
                            value: '中华门',
                            label: '中华门',
                        },
                    ],
                },
            ],
        },
    ];
    useEffect(() => {
        initMap()
    }, [])
    function initMap() {
        //     //定义地图中心点坐标
        var center = new TMap.LatLng(22.626218, 113.838030)
        //定义map变量，调用 TMap.Map() 构造函数创建地图
        var map = new TMap.Map(document.getElementById('map'), {
            center: center,//设置地图中心点坐标
            zoom: 16,   //设置地图缩放级别
            // pitch: 43.5,  //设置俯仰角
            // rotation: 45    //设置地图旋转角度
        });
        //Map实例创建后，通过on方法绑定点击事件
        map.on("click", clickHandler)
    }
    //定义事件处理方法
    var clickHandler = function (evt) {
        var lat = evt.latLng.getLat().toFixed(6);
        var lng = evt.latLng.getLng().toFixed(6);
        console.log("您点击的的坐标是：" + lat + "," + lng);
    }
    return (
        <div className='shop-mana'>
            <Form
                labelAlign='right'
                labelCol={{ span: 5 }}
            >
                <Form.Item>
                    <Breadcrumb>
                        <Breadcrumb.Item>
                            <a href="#/manage/employ">门店设置</a>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item>门店管理</Breadcrumb.Item>
                    </Breadcrumb>
                </Form.Item>

                <Form.Item
                    label='门店名称'
                    name='shopname'
                    rules={[{ required: true, message: '请输入店名' }]}

                >
                    <Input
                        style={{
                            width: '285px'
                        }}
                    />
                </Form.Item>

                <Form.Item
                    label="员工有赞账号"
                    name="account"
                    rules={[{ required: true, message: '请输入账号' }]}
                    style={{ marginBottom: 0 }}
                >
                    <Form.Item
                        style={{
                            display: 'inline-block',
                            width: '80px'
                        }}
                    >
                        <Input
                        />
                    </Form.Item>
                    <span
                        style={{
                            display: 'inline-block',
                            width: '24px',
                            lineHeight: '28px',
                            textAlign: 'center'
                        }}
                    >
                        -
                    </span>
                    <Form.Item
                        style={{
                            display: 'inline-block',
                            width: '180px'
                        }}>
                        <Input />
                    </Form.Item>
                </Form.Item>

                <Form.Item
                    label='所属区域'
                    name='area'
                    rules={[{ required: true, message: '请选择所在地' }]}

                >
                    <Cascader
                        style={{ width: '285px' }}
                        options={options}
                    />
                </Form.Item>

                <Form.Item
                    label='地图点位'
                    name='map'
                    rules={[{ required: true, message: '请选择定位' }]}
                >
                    <span></span>
                    <div id="map">

                    </div>
                </Form.Item>

                <Form.Item >
                    <Button style={{ marginLeft: '100px' }}>取消</Button>
                    <Button
                        type="primary"
                        htmlType="submit"
                        style={{ marginLeft: '10px' }}
                    >保存</Button>
                </Form.Item>
            </Form>
        </div>
    )
}