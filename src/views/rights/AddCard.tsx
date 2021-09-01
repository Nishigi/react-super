import { useState } from "react";
import {
    Form,
    Input,
    Button,
    Breadcrumb,
    Radio,
    Space,
    DatePicker,
    Tooltip,
    InputNumber,
    Checkbox,
    Row,
    Switch,
    Select,
} from 'antd'

import { QuestionCircleOutlined } from '@ant-design/icons';
import './style.scss'

const { Option } = Select;
export default () => {
    const [cardtime, setCardTime] = useState(1)
    const [back, setBack] = useState(1)
    const [getval, setGetval] = useState(1)
    const [gettotal, setGettotal] = useState(1)

    const onChange = e => {
        console.log('radio checked', e.target.value);
        setCardTime(e.target.value)
    }
    const onback = e => {
        console.log('radio checked', e.target.value);
        setBack(e.target.value)
    }
    const ongetval = e => {
        console.log('radio checked', e.target.value);
        setGetval(e.target.value)
    }
    const ontotal = e => {
        console.log('radio checked', e.target.value);
        setGettotal(e.target.value)
    }
    return (
        <div className="add-cartd">
            <Breadcrumb>
                <Breadcrumb.Item><a href="#/Rights">权益卡管理</a></Breadcrumb.Item>
                <Breadcrumb.Item>新建权益卡</Breadcrumb.Item>
            </Breadcrumb>
            <Form name="nest-messages" labelCol={{ span: 2 }} wrapperCol={{ offset: 1, span: 10 }} >
                <legend className="zent-form__legend">基本信息</legend>
                <Form.Item name="name" label="名称" rules={[{ required: true }]}>
                    <Input placeholder="最多输入9个字符" style={{ width: 200 }} />
                </Form.Item>
                {/* 背景色 */}
                <Form.Item label="背景设置" rules={[{ type: 'email' }]}>
                    <Radio.Group onChange={onback} value={back}>
                        <Space direction="vertical">
                            <Radio value={1}>背景色
                                 <Input style={{ width: 100, marginLeft: 10 }} />
                            </Radio>

                            <Radio value={2}>背景图
                                <Input style={{ width: 100, marginLeft: 10 }} />
                            </Radio>
                        </Space>
                    </Radio.Group>
                </Form.Item>
                {/* 有效期限 */}
                <Form.Item label="卡有效期" rules={[{ type: 'number', min: 0, max: 99 }]}>

                    <Radio.Group onChange={onChange} value={cardtime}>
                        <Space direction="vertical">
                            <Radio value={1}>永久有效
                            </Radio>

                            <Radio value={2}>领卡时起
                                <Input disabled={cardtime !== 2} style={{ width: 100, marginLeft: 10 }} />
                                &nbsp;天内有效
                            </Radio>

                            <Radio value={3}>
                                <Form.Item
                                    style={{ display: 'inline-block', width: 'calc(50% - 12px)' }}
                                >
                                    <DatePicker disabled={cardtime !== 3} />
                                </Form.Item>
                                <span
                                    style={{ display: 'inline-block', width: '24px', lineHeight: '32px', textAlign: 'center' }}
                                >
                                    至
                                </span>
                                <Form.Item style={{ display: 'inline-block', width: 'calc(50% - 12px)' }}>
                                    <DatePicker disabled={cardtime !== 3} />
                                </Form.Item>
                            </Radio>
                        </Space>
                    </Radio.Group>
                </Form.Item>
                {/* 领取设置 */}
                <Form.Item label="领取设置">
                    <Radio.Group onChange={ongetval} value={getval}>
                        <Space direction="vertical">
                            <Radio value={1}>直接领取
                            </Radio>
                            <Radio value={2}>需要费购买
                            </Radio>
                            {
                                getval === 2 ? <Input style={{ width: 100, marginLeft: 10 }} /> : null
                            }
                            <Radio value={3}>满足下列任一条件即到账
                            </Radio>
                            {
                                getval === 3 ? <Input style={{ width: 100, marginLeft: 10 }} /> : null
                            }
                        </Space>
                    </Radio.Group>
                </Form.Item>
                {/* 限领次数 */}
                <Form.Item label="每人限领次数">
                    <Radio.Group onChange={ontotal} value={gettotal}>
                        <Space direction="vertical">
                            <Radio value={1}>不限次数&nbsp;
                                <Tooltip
                                    placement="bottomLeft"
                                    title="用户可在删除权益卡后重新领卡，不限制领卡次数"
                                >
                                    <QuestionCircleOutlined />
                                </Tooltip>
                            </Radio>
                            <Radio value={2}>有效期内限领次数&nbsp;
                                <InputNumber
                                    disabled={gettotal !== 2}
                                    min={0}
                                    placeholder="填写次数"
                                />
                                &nbsp;
                                <Tooltip
                                    placement="bottomLeft"
                                    title="领取次数仅统计用户领卡的次数，不统计商家发卡"
                                >
                                    <QuestionCircleOutlined />
                                </Tooltip>
                            </Radio>
                        </Space>
                    </Radio.Group>
                </Form.Item >
                <Form.Item label="使用须知">
                    < Input.TextArea placeholder="请输入权益卡相关的补充信息，最多可输入800个字符" />
                </Form.Item >
                <Form.Item label="客服电话">
                    <Input placeholder="请输入手机号或固定电话" style={{ width: 200 }} />
                </Form.Item >

                <legend className="zent-form__legend">权益礼包</legend>
                <Form.Item label="权益">
                    <Row>
                        <Checkbox>包邮</Checkbox>
                    </Row>
                    <Row>
                        <Checkbox>消费折扣</Checkbox>
                    </Row>
                    <Row>
                        <Checkbox>会员价</Checkbox>
                    </Row>
                    <Row>
                        <Checkbox>积分回馈倍率</Checkbox>
                    </Row>
                    <Row>
                        <Checkbox>获得好友体验卡</Checkbox>
                    </Row>
                </Form.Item >
                <Form.Item label="领卡礼包">
                    <Row>
                        <Checkbox>送积分</Checkbox>
                    </Row>
                    <Row>
                        <Checkbox>送优惠</Checkbox>
                    </Row>
                    <Row>
                        <Checkbox>送赠品
                            <Tooltip
                                placement="bottomLeft"
                                title="请随时关注赠品库存并进行补充，避免出现客户领取时赠品库存不足"
                            >
                                <QuestionCircleOutlined />
                            </Tooltip>
                        </Checkbox>
                    </Row>
                    <Row>
                        <div> 权益不够用？<a>去配置权益</a></div>
                    </Row>
                </Form.Item >

                <legend className="zent-form__legend">高级设置</legend>
                <Form.Item label="激活设置">
                    <Switch
                        size="small"
                        defaultChecked
                    />
                    <a>
                        &nbsp;  预览
                    </a>
                    <div style={{ background: '#f7f8fa', width: 450, height: 85, padding: '5px 30px', display: 'flex', flexWrap: 'wrap', alignItems: 'center' }}>
                        <div>验证阶段:<Checkbox disabled checked>验证手机号：买家领取卡片需填写手机号</Checkbox></div>
                        <div>完善学习: <Checkbox>买家领取卡片需填写个人基本信息</Checkbox></div>
                    </div>
                </Form.Item >
                <Form.Item label="同步微信卡包">
                    未绑定认证的服务号或订阅号，<a>去绑定</a>
                    <br />
                    未认证的订阅号或服务号建议<a>申请代制卡券</a>
                </Form.Item >
                <Form.Item label="分享设置">
                    <Checkbox>允许分享</Checkbox>
                </Form.Item >
                <Form.Item label="过期设置">
                    卡过期后,消费者变更至&nbsp;<Select
                        showArrow style={{ width: 200 }}
                        defaultValue='1'
                    >
                        <Option value="1">无法享受该卡权益</Option>
                    </Select>
                </Form.Item >
                <Form.Item label="协议确认">
                    <Checkbox><a>《权益卡使用协议》</a>是你提供给消费者的承诺，勾选后即表示同意协议中的所有条款。</Checkbox>
                </Form.Item >

                <Form.Item>
                    <Button type="primary" htmlType="submit">保存</Button>
                    <Button>取消</Button>
                </Form.Item>
            </Form >
        </div >
    )
}