import React, { useEffect } from 'react'
// import { Row, Col } from 'antd';

export default () => {
  useEffect(() => {
    var map = new BMap.Map("container");
    var point = new BMap.Point(116.404, 39.915);
    map.centerAndZoom(point, 15);
  }, [])

  return (
    <div className='map-bd'>
      {/* <h1>admin的首页</h1> */}
      <div id="container" style={{ height: '400px', width: '600px' }}></div>
    </div >
  )
}
