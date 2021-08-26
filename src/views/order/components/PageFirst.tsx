import React from "react";
import { Form, Input, Select, InputNumber, Button, Row } from 'antd';
const { Option } = Select;

export default ({ steps, onchange, val, setVal }) => {
    const onFinish = (data) => {
        console.log(data);
        onchange(steps + 1)
        setVal({ ...val, ...data })
    }
    return (
        <Form
            initialValues={{
                ...val
            }}
            name="control-hooks"
            labelCol={{ span: 24 }}
            labelAlign='left'
            colon={false}
            style={{ margin: '24px auto', width: '520px' }}
            onFinish={onFinish}
        >
            <Form.Item
                name="myaccount"
                label="付款账户"
                rules={[{ required: true, message: '请选择付款账户' }]}
                wrapperCol={{ span: 9 }}
            >
                <Select
                    placeholder="nishigi@163.com"
                    allowClear
                >
                    <Option value="nishigi@163.com">nishigi@163.com</Option>
                </Select>
            </Form.Item>
            <div style={{ color: 'rgba(0,0,0,.85)', marginBottom: '16px', fontWeight: 700, fontSize: '14px' }}>收款账户</div>
            <Row>
                <Form.Item
                    name="payaway"
                    wrapperCol={{ span: 24 }}
                    rules={[{ required: true, message: '请选择付款方式' }]}
                >
                    <Select
                        placeholder="请选择"
                        allowClear
                    >
                        <Option value="alipay">支付宝</Option>
                        <Option value="bank">银行卡</Option>
                    </Select>
                </Form.Item>
                <Form.Item
                    name="account"
                    rules={[{ required: true, message: '请输入收款人账户' }]}
                    wrapperCol={{ span: 17 }}
                    style={{ marginLeft: '8px' }}
                >
                    <Input
                        allowClear
                    />
                </Form.Item>
            </Row>
            <Form.Item
                name="name"
                label="收款人姓名"
                rules={[{ required: true }]}
                wrapperCol={{ span: 9 }}
            >
                <Input
                    allowClear
                />
            </Form.Item>

            <Form.Item
                name="money"
                label="转账金额"
                rules={[{ required: true }]}
                wrapperCol={{ span: 9 }}
            >
                <InputNumber
                    style={{ width: '195px' }}
                    min={0.01}
                    max={10000}
                />
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit">下一步</Button>
            </Form.Item>
        </Form>
    )
}