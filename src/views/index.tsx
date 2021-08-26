import React from 'react'
import loadable from '@loadable/component'

import {
  UserOutlined,
  FormOutlined,
  FileSearchOutlined,
} from '@ant-design/icons'

// 静态路由
const Home = loadable(() => import('@/views/home/index'))

// 文章的增删改查
const ArticleList = loadable(() => import('@/views/article/ArticleList'))
const ArticleAddOrEdit = loadable(() => import('@/views/article/ArticleAddOrEdit'))

// 用户管理
const UserManager = loadable(() => import('@/views/user/UserManager'))
const PageOrder = loadable(() => import('@/views/order/PageOrder'))
const EmployMana = loadable(() => import('@/views/shop/EmployMana'))
const RoleMana = loadable(() => import('@/views/shop/RoleMana'))
const ShopMana = loadable(() => import('@/views/shop/ShopMana'))

export const constRoutes = [
  {
    id: 1,
    text: '管理概况',
    icon: <FormOutlined />,
    children: [
      {
        id: 101,
        text: '任务面板',
        path: '/',
        component: Home
      }
    ]
  }
]

export default [
  {
    id: 10,
    text: '文章管理',
    icon: <FileSearchOutlined />,
    permission: ['editor'],
    children: [
      {
        id: 1001,
        text: '文章列表',
        path: '/article/list',
        component: ArticleList,
        permission: ['editor']
      },
      {
        id: 1002,
        text: '文章修改',
        path: '/article/modify',
        component: ArticleAddOrEdit,
        permission: ['editor']
      }
    ]
  },
  {
    id: 11,
    text: '用户管理',
    icon: <UserOutlined />,
    permission: ['admin'],
    children: [
      {
        id: 1101,
        text: '用户列表',
        path: '/user/list',
        component: UserManager,
        permission: ['admin']
      }
    ]
  },
  {
    id: 12,
    text: '订单管理',
    icon: <UserOutlined />,
    permission: ['admin', 'editor'],
    children: [
      {
        id: 1201,
        text: '分页订单',
        path: '/order/pagination',
        component: PageOrder,
        permission: ['admin', 'editor']
      }
    ]
  },
  {
    id: 13,
    text: '店铺设置',
    icon: <UserOutlined />,
    permission: ['admin', 'editor'],
    children: [
      {
        id: 1301,
        text: '门店管理',
        path: '/manage/shop',
        component: ShopMana,
        permission: ['admin', 'editor']
      },
      {
        id: 1302,
        text: '角色管理',
        path: '/manage/role',
        component: RoleMana,
        permission: ['admin', 'editor']
      },
      {
        id: 1303,
        text: '员工管理',
        path: '/manage/employ',
        component: EmployMana,
        permission: ['admin', 'editor']
      }
    ]
  }
]
