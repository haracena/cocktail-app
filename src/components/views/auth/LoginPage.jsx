import React, { useEffect } from 'react';
import { Form, Input, Button, Divider, message } from 'antd';
import { GoogleOutlined, LockOutlined, MailOutlined } from '@ant-design/icons';
import './login.styles.scss';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { startGoogleLogin, errorAuth, startLoginWithEmailPassword } from '../../../_actions/authActions';
import { shrinkFormValues } from '../../../helpers/formUtils';

const LoginPage = ({ history }) => {
  const { fetchingAuth, authError, uid } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    if (authError) {
      authError.length > 0 && message.error(authError);
    }
    return () => dispatch(errorAuth(''));
  }, [authError, dispatch]);

  useEffect(() => {
    uid && history.push('/');
  }, [uid])

  const handleLogin = (values) => {
    const { password, email } = shrinkFormValues(values);
    dispatch(startLoginWithEmailPassword(email, password));
  };

  const handleGoogleLogin = () => {
    dispatch(startGoogleLogin());
  }

  return (
    <div className='container'>
      <div className='form-login'>
        <div className='form__header' />
        <Divider style={{margin: 0, padding: '10px 16px 0px 16px'}}>Login</Divider>
        <div className='form__inputs'>
          <Form
            name='normal_login'
            className='login-form'
            initialValues={{ remember: true }}
            onFinish={handleLogin}
          >
            <Form.Item
              name='email'
              rules={[
                { type: 'email', message: 'The input is not valid E-mail' },
                { required: true, message: 'Please input your Email!' },
              ]}
            >
              <Input
                prefix={<MailOutlined className='site-form-item-icon' />}
                placeholder='Email'
              />
            </Form.Item>
            <Form.Item
              name='password'
              rules={[
                { required: true, message: 'Please input your Password!' },
              ]}
            >
              <Input
                prefix={<LockOutlined className='site-form-item-icon' />}
                type='password'
                placeholder='Password'
              />
            </Form.Item>

            <Form.Item>
              <Button
                type='primary'
                htmlType='submit'
                className='login-form-button'
                block
                disabled={fetchingAuth ? true : false}
              >
                Log in
              </Button>
            </Form.Item>

            <Form.Item>
              <Button
                className='login-form-button'
                block
                icon={<GoogleOutlined />}
                onClick={handleGoogleLogin}
              >
                Sign in with Google
              </Button>
            </Form.Item>
            <p>
              Don't you have an account?{' '}
              <Link to='/register'>Create one here!</Link>
            </p>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
