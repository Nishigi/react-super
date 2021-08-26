// Redux的3个3
// 三个核心API：createStore、combineReducers、applyMiddleware
// 三个概念：store、reducer、action
// 三个特点： store是单一数据源、store是只读的、只能使用reducer纯函数来修改store

import { configureStore } from '@reduxjs/toolkit'
import user from './reducers/user'
import article from './reducers/article'

const store = configureStore({
  reducer: {
    user,
    article
  }
})

// 声明两个类型
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
