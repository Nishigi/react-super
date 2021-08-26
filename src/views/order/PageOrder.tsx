import React from "react";

import PageFirst from "./components/PageFirst";
import PageTwo from "./components/PageTwo";
import PageLast from "./components/PageLast";
import { Steps } from 'antd';
const { Step } = Steps;

export default () => {
    const [current, setCurrent] = React.useState(0);
    const [transfer, setTransfer] = React.useState({
        myaccount: null,
        payaway: null,
        account: '',
        name: '',
        money: null
    });
    const steps = [
        {
            title: '填写转账信息',
            content: <PageFirst steps={current} onchange={setCurrent} val={transfer} setVal={setTransfer} />,
        },
        {
            title: '确认转账信息',
            content: <PageTwo steps={current} onchange={setCurrent} val={transfer} />,
        },
        {
            title: '完成',
            content: <PageLast onchange={setCurrent} val={transfer} />,
        },
    ];

    return (
        <div className="pageOrder" style={{ background: 'white', padding: '30px' }}>
            <Steps current={current}>
                {steps.map(item => (
                    <Step key={item.title} title={item.title} />
                ))}
            </Steps>
            <div className="steps-content">{steps[current].content}</div>

            <div
                className="ant-divider ant-divider-horizontal"
                style={{ margin: "40px 0px 24px" }}>
            </div>
            <div>
                <h3>说明</h3>
                <h4>转账到支付宝账户</h4>
                <p>如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。</p>
                <h4>转账到银行卡</h4>
                <p>如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。</p>
            </div>
        </div>
    )
}