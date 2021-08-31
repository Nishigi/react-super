
import { Tabs, Breadcrumb, Input, Row } from 'antd'
import TableCard from "./components/TableCard";
import { useHistory } from 'react-router-dom'
import './style.scss'
const { TabPane } = Tabs;
const { Search } = Input
export default () => {
    const history = useHistory()
    return (
        <div className="getcartd">
            <Breadcrumb>
                <Breadcrumb.Item>权益卡</Breadcrumb.Item>
            </Breadcrumb>
            <Tabs
                defaultActiveKey="2"
                animated={false}
                onChange={
                    k => {
                        if (k === '1') history.push('/Rights')
                        if (k === '3') history.push('/Rights/ReCard')
                    }
                }>
                <TabPane tab="权益卡管理" key="1">

                </TabPane>
                <TabPane tab="领卡记录" key="2">
                    <Row
                        style={{ marginBottom: '20px' }}
                        wrap={false}
                        justify='end'
                    >
                        <Search
                            placeholder="请输入"
                            style={{ width: 200 }}
                        />
                    </Row>
                    <TableCard></TableCard>
                </TabPane>
                <TabPane tab="退卡记录" key="3">

                </TabPane>
            </Tabs>
        </div>
    )
}