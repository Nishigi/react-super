import React, { useState, useEffect, useMemo } from 'react'
import moment from 'moment';
import { useAppSelector, useAppDispatch } from "@/hooks";
import { getUserList, addUser, changeUserStatus } from '@/store/reducers/user'

import { Row, Col, Input, Table, Modal, Button, Select } from 'antd';
const { Option } = Select;

export default () => {
  const dispatch = useAppDispatch()

  const list = useAppSelector(({ user }) => user.list)
  const total = useAppSelector(({ user }) => user.total)


  const [name, setName] = useState('')
  const [page, setPage] = useState(1)
  const [size, setSize] = useState(3)
  const [count, setCount] = useState(1)

  const [userBol, setUserBol] = useState(false)
  const [user, setUser] = useState({ username: '', password: '', role: '' })
  // 获取用户列表
  useEffect(() => {
    console.log('userList');
    dispatch(getUserList({ name, page, size }))
  }, [count, page, size])

  //确认添加
  const handleOk = () => {
    dispatch(addUser(user)).then(() => {
      console.log('添加成功');
      handleCancel()
      setCount(count + 1)
    })
  };
  //取消添加
  const handleCancel = () => {
    setUser({ username: '', password: '', role: '' })
    setUserBol(false);
  };
  //取消禁用
  const toggleUser = ({ _id }, status) => {
    dispatch(changeUserStatus({ id: _id, status })).then(() => {
      console.log('toggled')
      setCount(count + 1)
    })
  }
  const columns: any = useMemo(() => (
    [
      {
        align: 'center',
        title: '序号',
        width: 100,
        dataIndex: 'id',
        render: (text, record, idx) => <span>{idx + 1}</span>,
      },
      {
        align: 'center',
        title: '用户名',
        width: 120,
        dataIndex: 'username',
        render: (text: string) => <span>{text}</span>,
      },
      {
        align: 'center',
        title: '权限',
        width: 120,
        dataIndex: 'role',
        render: (text: string) => <span>{text === 'super' ? '超级管理员' : text === 'admin' ? '管理员' : '普通用户'}</span>,
      },
      {
        sorter: (a, b) => a.create_time - b.create_time,
        align: 'center',
        title: '入职时间',
        width: 200,
        dataIndex: 'create_time',
        render: (text) => <span>{moment(text).format('Y年M月D日')}</span>
      },
      {
        align: 'center',
        title: '状态',
        width: 150,
        dataIndex: 'status',
        render: status => status ? '在职' : '离职'
      },
      {
        align: 'center',
        title: '操作',
        width: 200,
        dataIndex: 'status',
        render: (s, row) => (
          <div>
            <Button
              type='primary'
              size='small'
              disabled={s === 1 || row.role === 'super'}
              onClick={() => toggleUser(row, 1)}
            >启用</Button >
            <Button
              style={{ marginLeft: '10px' }}
              size='small'
              danger
              disabled={s === 0 || row.role === 'super'}
              onClick={() => toggleUser(row, 0)}
            >
              禁用
            </Button>
          </div>
        )
      }
    ]
  ), [list])
  return (
    <div className="user-manager">
      <div className="title" style={{ marginTop: '10px' }}>
        <Row align='middle'>
          {/* ---------select------- */}
          <Col >
            <span className='select'> 查询:</span>
          </Col>
          <Col span={6}>
            <Input
              placeholder="请输入用户名"
              allowClear
              value={name}
              onChange={e => setName(e.target.value)}
              onPressEnter={() => { setCount(count + 1); setPage(1) }}
            />
          </Col>
          <Col offset={14}>
            <Button type="primary" onClick={() => setUserBol(true)}>添加用户</Button>
            <Modal title="新增用户"
              visible={userBol}
              onOk={handleOk}
              onCancel={handleCancel}
              maskClosable={false}
            >
              用户名
              <Input
                placeholder="请输入用户名"
                allowClear
                maxLength={100}
                value={user.username}
                onChange={(e) => setUser({ ...user, username: e.target.value })}
              />
              密码
              <Input
                placeholder="请输入密码"
                allowClear
                maxLength={100}
                value={user.password}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
              />
              选择权限
              <Select
                allowClear
                style={{ width: 120, marginTop: '15px' }}
                onChange={val => setUser({ ...user, role: val })}
                value={user.role}
              >
                <Option value="admin">管理员</Option>
                <Option value="editor">普通用户</Option>
              </Select>
            </Modal>
          </Col>
        </Row>
      </div>
      <div style={{ marginTop: '25px' }} className="table">
        <Table
          rowKey='_id'
          rowSelection={{
            type: 'checkbox',
            onChange: (selectedRowKeys, selectedRows) => {
              console.log('rowsCheckbox:', selectedRowKeys, selectedRows);
            }
          }}
          columns={columns}
          dataSource={list}

          pagination={{
            current: page,
            total,
            showSizeChanger: true,
            defaultPageSize: size,
            pageSizeOptions: ['3', '5', '10'],
            showQuickJumper: true,
            showTotal: (total, range) => <div>第{range[0]}-{range[1]}条数据,共{total}条数据</div>,
            size: 'small',
            onChange: (page) => setPage(page),
            onShowSizeChange: (cur, size) => {
              setSize(Number(size));
              setPage(1);
              // console.log(cur);
            }
          }}
        />
      </div>
    </div>
  )
}
