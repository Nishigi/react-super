import React from 'react'
import { HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from '@/store'

import { ConfigProvider } from 'antd';
import zhCN from 'antd/lib/locale/zh_CN';
import Dashboard from './dashboard/index'

function App() {
  return (
    <HashRouter>

      <ConfigProvider locale={zhCN}>
        <Provider store={store}>
          <div className="app">
            <Dashboard />
          </div>
        </Provider>

      </ConfigProvider>
    </HashRouter>
  )
}

export default App
