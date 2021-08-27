import React from "react";
import {
    Form, Input, Button, Tree, Select, Breadcrumb
} from 'antd';
import './style.scss'

const { TextArea } = Input;
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

    const onFinish = (val) => {
        console.log(val);

    }
    return (
        <div className='role-mana'>
            <Form
                labelAlign='right'
                labelCol={{ span: 5 }}
                onFinish={onFinish}
            >
                <Form.Item>
                    <Breadcrumb>
                        <Breadcrumb.Item>
                            <a href="#/manage/shop">角色设置</a>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item>角色管理</Breadcrumb.Item>
                    </Breadcrumb>
                </Form.Item>

                <Form.Item
                    label='角色名称'

                >
                    <Input
                        style={{
                            width: '355px'
                        }} />
                </Form.Item>

                <Form.Item
                    label="角色描述"
                >
                    <TextArea rows={2}
                        style={{
                            width: '355px'
                        }}
                    />
                </Form.Item>

                <Form.Item
                    label='参考角色'
                >

                    <Select defaultValue="lucy" style={{ width: 120 }} allowClear>
                        <Option value="lucy">Lucy</Option>
                    </Select>
                </Form.Item>

                <Form.Item
                    label='权限'
                >

                    <Tree
                        checkable
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