import React from 'react'
import { Button } from "antd";
export default () => {
  return (
    <div className='gs-header'>
      用户名
      <Button
        style={{ marginLeft: '10px' }}
        type="primary"
        onClick={() => {
          localStorage.removeItem('token')
          window.location.reload()
        }}
      >退出</Button>
    </div>
  )
}
