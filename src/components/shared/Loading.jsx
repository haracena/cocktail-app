import React from 'react';
import { Spin } from 'antd';
import './loading.styles.scss';

const Loading = ({height = 50, color='white'}) => {
  return (
    <div className='loading-container' style={{height: `${height}vh`, backgroundColor: color}}>
      <Spin size='large' />
    </div>
  )
}

export default Loading;
