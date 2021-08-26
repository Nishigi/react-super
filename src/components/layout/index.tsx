import React, { useState } from 'react'

import { Layout } from 'antd'

import GsContent from './GsContent'
import GsSider from './GsSider'
import GsHeader from './GsHeader'
import './style.scss'

const { Header, Sider, Content } = Layout

export default props => {
  const [collapsed, setCollapsed] = useState(false)

  return (
    <div className='gs-layout'>

      <Layout>

        <Sider
          trigger={null}
          collapsible
          collapsed={collapsed}
        >
          <GsSider value={collapsed} onChange={bol => setCollapsed(bol)} />
        </Sider>

        <Layout>

          <Header>
            <GsHeader />
          </Header>

          <Content>
            <GsContent />
          </Content>

        </Layout>
      </Layout>
    </div>
  )
}
