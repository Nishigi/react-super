
import { Tabs, Breadcrumb, Input, Row } from 'antd'
import TableCard from "./components/TableCard";
import { useHistory } from 'react-router-dom'
import './style.scss'
const { TabPane } = Tabs;
const { Search } = Input
export default () => {
    const history = useHistory()
    return (
        <div className="recartd">
            <Breadcrumb>
                <Breadcrumb.Item>权益卡</Breadcrumb.Item>
            </Breadcrumb>
            <Tabs
                animated={false}
                defaultActiveKey="3"
                onChange={
                    k => {
                        if (k === '1') history.push('/Rights')
                        if (k === '2') history.push('/Rights/GetCard')
                    }
                }
            >
                <TabPane tab="权益卡管理" key="1">
                </TabPane>
                <TabPane tab="领卡记录" key="2">
                </TabPane>
                <TabPane tab="退卡记录" key="3">
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
            </Tabs>
        </div>
    )
}