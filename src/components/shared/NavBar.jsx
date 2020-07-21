import React from 'react';
import {
  HomeOutlined,
  HeartOutlined,
  UserOutlined,
  LogoutOutlined,
  LoginOutlined,
} from '@ant-design/icons';
import { Menu } from 'antd';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { startLogout } from '../../_actions/authActions';

const NavBar = () => {
  const history = useHistory();
  const { uid, name } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleClickNav = (path) => {
    history.push(path);
  };

  const handleLogout = () => {
    dispatch(startLogout());
    history.push('/');
  };

  return (
    <Menu theme='dark' mode='horizontal' selectedKeys={[]}>
      <Menu.Item key='/' icon={<HomeOutlined />} onClick={() => handleClickNav('/')}>
        Home
      </Menu.Item>
      {uid && (
        <Menu.Item key='/favourite' icon={<HeartOutlined />} onClick={() => handleClickNav('/favourites')}>
          Favourites
        </Menu.Item>
      )}
      {uid && <Menu.Item icon={<UserOutlined />}>{name}</Menu.Item>}
      {uid && (
        <Menu.Item
          key='/logout'
          icon={<LogoutOutlined />}
          onClick={handleLogout}
        >
          Logout
        </Menu.Item>
      )}
      {!uid && (
        <Menu.Item key='/login' icon={<LoginOutlined />} onClick={() => handleClickNav('/login')}>
          Sign In
        </Menu.Item>
      )}
    </Menu>
  );
};

export default NavBar;
