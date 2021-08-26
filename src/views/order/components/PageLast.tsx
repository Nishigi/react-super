import React from "react";
import { Result, Button, Descriptions, message } from 'antd';
export default ({ onchange, val }) => {

    return (
        <div className="pageLast">
            <div className="success" >
                <Result
                    status="success"
                    title="操作成功"
                    subTitle="预计两小时内到账"
                    extra={[
                        <Button key='1' type="primary" onClick={() => { onchange(0) }}>再转一笔</Button>,
                        <Button key='2' onClick={() => { message.success('等待查询') }}>查看账单</Button>,
                    ]}
                    style={{ padding: '24px 40px' }}

                />
            </div>
            <div className="info" >
                <Descriptions
                    column={1}
                    style={{ background: '#fafafa', padding: '24px 40px', margin: '0 auto', width: '480px' }}
                >
                    <Descriptions.Item label="付款账户">{val.myaccount}</Descriptions.Item>
                    <Descriptions.Item label="收款账户">{val.account}</Descriptions.Item>
                    <Descriptions.Item label="收款人姓名">{val.name}</Descriptions.Item>
                    <Descriptions.Item label="转账金额">{val.money.toFixed(2)}元</Descriptions.Item>
                </Descriptions>
            </div>
        </div>
    )
}