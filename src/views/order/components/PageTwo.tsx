import React from "react";
import { Alert, Descriptions, Input, Form, Button } from 'antd';

export default ({ steps, onchange, val }) => {
    const onFinish = () => {
        onchange(steps + 1)
    }
    return (
        <div
            style={{ margin: '24px auto', width: '520px' }}
        >
            <Alert
                message="确认转账后，资金将直接打入对方账户，无法退回。"
                type="info"
                showIcon
                closable
                style={{ margin: '0 0 24px 0' }}
            />

            <Descriptions
                bordered
                column={1}
            >
                <Descriptions.Item label="付款账户">{val.myaccount}</Descriptions.Item>
                <Descriptions.Item label="收款账户">{val.account}</Descriptions.Item>
                <Descriptions.Item label="收款人姓名">{val.name}</Descriptions.Item>
                <Descriptions.Item label="转账金额">{Number(val.money).toFixed(2)}元</Descriptions.Item>
            </Descriptions>
            <div
                className="ant-divider ant-divider-horizontal"
                style={{ margin: "20px 0px 24px" }}>
            </div>
            <Form onFinish={onFinish}>
                <Form.Item
                    name="password"
                    label="支付密码"
                    rules={[{ required: true, message: '需要支付密码才能进行支付' }]}
                    wrapperCol={{ span: 9 }}
                >
                    <Input.Password />
                </Form.Item>
                <Button style={{ margin: '0 8px' }} onClick={() => onchange(steps - 1)}>上一步</Button>
                <Button type="primary" htmlType="submit" >下一步</Button>
            </Form>
        </div>
    )
}