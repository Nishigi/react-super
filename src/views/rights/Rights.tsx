import { Tabs, Button, Breadcrumb, Row, Col, Input } from 'antd'
import { useHistory, withRouter } from 'react-router-dom'

import TableCard from "./components/TableCard";
import './rights.scss'
import './style.scss'

const { TabPane } = Tabs;
const { Search } = Input;
export default () => {
    const history = useHistory();

    const onSearch = value => console.log(value);
    return (
        <div className="rights">

            <Breadcrumb>
                <Breadcrumb.Item>权益卡</Breadcrumb.Item>
            </Breadcrumb>

            <Tabs
                animated={false}
                defaultActiveKey="1"
                onChange={
                    k => {
                        if (k === '2') history.push('/Rights/GetCard')
                        if (k === '3') history.push('/Rights/ReCard')
                    }
                }>
                <TabPane tab="权益卡管理" key="1">
                </TabPane>
                <TabPane tab="领卡记录" key="2">
                </TabPane>
                <TabPane tab="退卡记录" key="3">
                </TabPane>
            </Tabs>

            <Row
                style={{ marginBottom: '20px' }}
                wrap={false}
            >
                <Col span={19}>
                    <Button
                        type='primary'
                        onClick={() => history.push('/Rights/AddCard')}
                    >
                        新建权益卡
                    </Button>
                </Col>

                <Col >
                    <Search
                        placeholder="请输入"
                        onSearch={onSearch}
                        style={{ width: 200 }}
                    />
                </Col>
            </Row>
            <Tabs type="card">
                <TabPane tab="使用中" key="1">
                    <TableCard />
                </TabPane>
                <TabPane tab="已禁用" key="2">
                    <TableCard />
                </TabPane>
                <TabPane tab="已过期" key="3">
                    <TableCard />
                </TabPane>
            </Tabs>
        </div>
    )
}