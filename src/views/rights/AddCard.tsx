import { Form, Input, InputNumber, Button, Breadcrumb } from 'antd'
import { useHistory } from 'react-router-dom'
import './style.scss'
export default () => {
    return (
        <div className="add-cartd">
            <Breadcrumb>
                <Breadcrumb.Item><a href="#/Rights">权益卡管理</a></Breadcrumb.Item>
                <Breadcrumb.Item>新建权益卡</Breadcrumb.Item>
            </Breadcrumb>

            <Form name="nest-messages"   >

                <legend className="zent-form__legend">基本信息</legend>

                <Form.Item label="Name" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>

                <Form.Item label="Email" rules={[{ type: 'email' }]}>
                    <Input />
                </Form.Item>

                <Form.Item label="Age" rules={[{ type: 'number', min: 0, max: 99 }]}>
                    <InputNumber />
                </Form.Item>

                <Form.Item label="Website">
                    <Input />
                </Form.Item>

                <Form.Item label="Introduction">
                    < Input.TextArea />
                </Form.Item >

                <Form.Item>
                    <Button type="primary" htmlType="submit">保存</Button>
                    <Button>取消</Button>
                </Form.Item>
            </Form >
        </div >
    )
}