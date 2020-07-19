import React from 'react';
import { HomeOutlined, HeartOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { useHistory } from 'react-router-dom';

const NavBar = () => {
  const history = useHistory();

  const handleClickNav = () => {
    history.push('/');
  }

  return(
    <Menu theme='dark' mode='horizontal' selectedKeys={[]}>
      <Menu.Item key='/' icon={<HomeOutlined />} onClick={handleClickNav}>
        Home
      </Menu.Item>
      <Menu.Item key='/favourite' icon={<HeartOutlined />}>
        Favourites
      </Menu.Item>
      {/* <Menu.Item>
        Hugo
      </Menu.Item> */}
      {/* <Menu.Item key='/login'>
        Sign In
      </Menu.Item> */}
      <Menu.Item key='/logintes'>
        Logout
      </Menu.Item>
    </Menu>
  );
};

export default NavBar;
