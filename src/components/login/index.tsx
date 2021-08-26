import React from 'react'
import { useAppDispatch } from '@/hooks'
import { useHistory } from "react-router-dom";

import { login } from '@/store/reducers/user'

import {
  Form, Input, Button, Checkbox
} from 'antd'
import './style.scss'

export default () => {
  const dispatch = useAppDispatch()
  const history = useHistory()
  // 表单提交
  const onFinish = (val) => {
    // login先获取token，接着获取用户信息
    dispatch(login(val)).then((action) => {
      console.log(action.payload);
      if (action.payload) history.replace('/')
    })
  }

  return (
    <div className='gs-login'>
      <div className='wrap'>
        <Form
          name="basic"
          labelCol={{
            span: 4,
          }}
          wrapperCol={{
            span: 18,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
        >
          <Form.Item
            label="账号"
            name="username"
            rules={[
              {
                required: true,
                message: '请输入用户名',
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="密码"
            name="password"
            rules={[
              {
                required: true,
                message: '请输入密码',
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="remember"
            valuePropName="checked"
            wrapperCol={{
              offset: 4,
              span: 16,
            }}
          >
            <Checkbox>记住密码</Checkbox>
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 19,
            }}
          >
            <Button type="primary" htmlType="submit">
              登录
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}
