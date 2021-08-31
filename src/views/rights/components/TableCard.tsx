import { Table } from 'antd';

const columns: any = [
    {
        title: '权益名称',
        width: 100,
        dataIndex: 'name',
        key: 'name',
        fixed: 'left',
    },
    { title: '领取条件', dataIndex: 'getd', key: '1' },
    { title: '有效期', dataIndex: 'using', key: '2' },
    { title: '权益', dataIndex: 'rights', key: '3' },
    { title: '领卡用户', dataIndex: 'getu', key: '4' },
    {
        title: '操作',
        key: 'operation',
        fixed: 'right',
        width: 100,
        render: () => <span >修改</span>,
    },
];

const data = [
    {
        key: '1',
        name: '九折卡',
        getd: '首充100',
        using: '两年',
        rights: '每月九折优惠',
        getu: '小胖',
    }
];
export default () => {

    return (
        <div>
            <Table
                rowKey='key'
                columns={columns}
                dataSource={data}
                scroll={{ x: 1250 }}

                pagination={{
                    total: 2,
                    showQuickJumper: true,
                    showLessItems: true,
                    showTotal: () => <div>共0条 , 每页共20条</div>,
                    pageSize: 1
                }}
            />
        </div>
    )
}