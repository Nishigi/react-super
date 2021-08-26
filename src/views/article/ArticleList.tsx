import React, { useState, useEffect } from 'react';
import { Row, Col, Input, Table, Select, Button } from 'antd';
import { getArticleList } from "@/store/reducers/article";
import { useAppDispatch, useAppSelector } from "@/hooks";
import moment from 'moment';

import "./style.scss";
const { Option } = Select
export default () => {
  const dispatch = useAppDispatch()
  const articleList = useAppSelector(({ article }) => article.articleList)
  const total = useAppSelector(({ article }) => article.total)

  const [page, setPage] = useState(1)
  const [size, setSize] = useState(5)
  const [cate, setCate] = useState()
  const [title, setTitle] = useState('')

  let Mju = {
    amen: '仙侠传奇',
    city: '都市传说',
    world: '次元世界',
  }

  let ele = {
    page,
    cate,
    size,
    title
  }

  // useEffect(() => {
  //   console.log('page');
  // }, [page])
  useEffect(() => {
    // dispatch(articleModify())
    dispatch(getArticleList(ele))
  }, [page, size, cate, title])

  const columns: any = [
    {
      title: '序号',
      align: 'center',
      render: (text, row, idx) => <span>{idx + 1}</span>,
    },
    {
      title: '标题',
      align: 'center',
      dataIndex: 'title',
    },
    {
      title: '作者',
      align: 'center',
      dataIndex: 'author',
    },
    {
      title: '类别',
      align: 'center',
      dataIndex: 'cate',
      render: (cate) => <div>{Mju[cate]}</div>
    },
    {
      title: '发布时间',
      align: 'center',
      dataIndex: 'create_time',
      render: (t) => <span>{moment(t).format('Y年M月D日')}</span>
    },
    {
      title: '操作',
      align: 'center',
      dataIndex: 'option',
      render: () => <><Button type='primary' style={{ marginRight: '5px' }}> 编辑</Button><Button danger type='primary'>删除</Button></>
    },
  ];

  return (
    <>
      <div className="article">
        <div className="title">
          <Row align='middle'>
            {/* ---------select------- */}
            <Col span={2}>
              <span className='select'> 查询:</span>
            </Col>
            <Col span={6}>
              <Input placeholder="请输入" onChange={e => setTitle(e.target.value)} />
            </Col>
            {/* ---------info------- */}
            <Col span={2}>
              <span className='select'> 类别:</span>
            </Col>
            <Col span={6}>
              <Select
                allowClear
                style={{ width: 120 }}
                onChange={val => {
                  setCate(val)
                  setPage(1)
                }}
              >
                <Option value="amen">仙侠传奇</Option>
                <Option value="city">都市传说</Option>
                <Option value="world">次元世界</Option>
              </Select>
            </Col>
          </Row>
        </div>
        {/* ------article-------- */}
        <div className="table">
          <div>
            查询文章
            <Table
              rowKey='_id'
              rowSelection={{
                type: 'checkbox',
                onChange: (selectedRowKeys, selectedRows) => {
                  console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
                }
              }}
              columns={columns}
              dataSource={articleList}
              pagination={{
                current: page,
                total,
                showSizeChanger: true,
                defaultPageSize: size,
                pageSizeOptions: ['3', '5', '10'],
                showQuickJumper: true,
                showTotal: (total, range) => <div>第{range[0]}-{range[1]}条数据,共{total}条数据</div>,
                // size: 'small',
                onChange: page => setPage(page),
                onShowSizeChange: (cur, size) => {
                  setSize(Number(size));
                  setPage(1);
                }
              }}
            />
          </div>
        </div>
      </div>
    </>
  )
}
