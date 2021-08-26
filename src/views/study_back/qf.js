import React, { useState, useEffect, useReducer } from 'react'
import store from '@/store'

// 自定义connect高阶组件
// 1、使用react-redux中的useSelector()访问最新的store
// 2、store.subscribe()订阅监听store变化
// 3、问题：能否使用上下文来实现呢？

// gsconnect(mapStateToProps, mapDispatchToProps)(WrappedComponent)
// mapStateToProps 类型function，作用是把store数据放在props上
// mapDispatchToProps 类型function，作用是那些派发信号的方法放在props

function gsconnect(mapStateToProps, mapDispatchToProps) {

  const actions = mapDispatchToProps(store.dispatch)

  return WrappedComponent => {

    return props => {
      const [state, setState] = useState(mapStateToProps(store.getState()))

      useEffect(() => {
        // 订阅监听store的数据变化
        const unsubscribe = store.subscribe(() => {
          console.log('store changed', store.getState())
          setState(mapStateToProps(store.getState()))
        })
        return () => unsubscribe()
      }, [])
      return (
        <WrappedComponent {...props} {...state} {...actions} />
      )
    }
  }
}

function useGsDispatch() {
  return store.dispatch
}

function useGsSelector(fn) {
  // 参考react-redux中的useSelector的源码
  const [, dispatch] = useReducer(s => s + 1, 0)
  store.subscribe(() => dispatch())
  return fn(store.getState())
}

export {
  gsconnect,
  useGsDispatch,
  useGsSelector
}
