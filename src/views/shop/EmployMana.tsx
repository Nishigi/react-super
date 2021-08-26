import React from "react";
import {
    Form, Input, Button, Select, Tree, Breadcrumb
} from 'antd';

import './style.scss'

const { Option } = Select
export default () => {
    const treeData = [
        {
            title: '0-0',
            key: '0-0',
            children: [
                {
                    title: '0-0-0',
                    key: '0-0-0',
                    children: [
                        { title: '0-0-0-0', key: '0-0-0-0' },
                        { title: '0-0-0-1', key: '0-0-0-1' },
                        { title: '0-0-0-2', key: '0-0-0-2' },
                    ],
                },
                {
                    title: '0-0-1',
                    key: '0-0-1',
                    children: [
                        { title: '0-0-1-0', key: '0-0-1-0' },
                        { title: '0-0-1-1', key: '0-0-1-1' },
                        { title: '0-0-1-2', key: '0-0-1-2' },
                    ],
                },
                {
                    title: '0-0-2',
                    key: '0-0-2',
                },
            ],
        },
        {
            title: '0-1',
            key: '0-1',
            children: [
                { title: '0-1-0-0', key: '0-1-0-0' },
                { title: '0-1-0-1', key: '0-1-0-1' },
                { title: '0-1-0-2', key: '0-1-0-2' },
            ],
        },
        {
            title: '0-2',
            key: '0-2',
        },
    ];
    return (
        <div className='employ-mana'>
            <Form
                labelAlign='right'
                labelCol={{ span: 5 }}
            >
                <Form.Item>
                    <Breadcrumb>
                        <Breadcrumb.Item>
                            <a href="#/manage/role">员工设置</a>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item>员工管理</Breadcrumb.Item>
                    </Breadcrumb>
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
                        <Select
                            placeholder='请选择'
                            allowClear
                        >
                            <Option value="lucy">中国 +86</Option>
                        </Select>
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
                    label='员工姓名'
                    name="employname"
                    rules={[{ required: true, message: '请输入账号' }]}
                >
                    <Input style={{
                        width: '285px'
                    }} />
                </Form.Item>
                <Form.Item
                    label='员工编号'
                >
                    <Input style={{
                        width: '285px'
                    }} />
                </Form.Item>
                <Form.Item
                    label='员工联系方式'
                    name="phone"
                    rules={[{ required: true, message: '请输入联系方式' }]}

                >
                    <Input style={{
                        width: '285px'
                    }} />
                </Form.Item>

                <Form.Item
                    label='所属店铺角色'
                    name="role"
                    rules={[{ required: true, message: '请选择角色' }]}
                >

                    <Select
                        placeholder='请选择'
                        style={{ width: 120 }}
                        allowClear
                    >
                        <Option value="lucy">财务</Option>
                    </Select>
                </Form.Item>

                <Form.Item
                    label='权限'
                    name='power'
                >
                    <Tree
                        treeData={treeData}
                    />
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