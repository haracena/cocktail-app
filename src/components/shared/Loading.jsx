import React from 'react';
import { Spin } from 'antd';
import './loading.styles.scss';

const Loading = () => {
  return (
    <div className='loading-container'>
      <Spin size='large' />
    </div>
  )
}

export default Loading;
