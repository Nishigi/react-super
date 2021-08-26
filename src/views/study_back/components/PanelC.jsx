import React from 'react'

// import { useSelector, useDispatch } from 'react-redux'
import { useGsDispatch, useGsSelector } from '../gs'

import { updateMsg } from '@/store/actions'

export default () => {

  const msg = useGsSelector(({ test }) => test.msg)
  const dispatch = useGsDispatch()

  return (
    <div>
      <h1>在函数式组件中使用redux数据</h1>
      <h1>{msg}</h1>
      <button onClick={() => dispatch(updateMsg(Math.random()))}>修改MSG</button>
    </div>
  )
}
