import React, { useEffect, useState } from 'react';
import { Form, Input, Button, Divider, message } from 'antd';
import './login.styles.scss';
import { Link } from 'react-router-dom';
import { shrinkFormValues } from '../../../helpers/formUtils';
import {
  startRegisterWithEmailPassword,
  errorAuth,
} from '../../../_actions/authActions';
import { useDispatch, useSelector } from 'react-redux';

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};

const whiteSpaceRule = {
  whitespace: true,
  message: 'Empty field',
};

const RegisterPage = ({history}) => {
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

  const handleRegister = (values) => {
    const { name, password, email } = shrinkFormValues(values);
    dispatch(startRegisterWithEmailPassword(email, password, name));
  };

  return (
    <div className='container'>
      <div className='form-register'>
        <div className='form__header' />
        <Divider style={{ margin: 0, padding: '10px 16px 0px 16px' }}>
          Register
        </Divider>
        <div className='form__inputs'>
          <Form
            {...formItemLayout}
            name='register'
            onFinish={handleRegister}
            scrollToFirstError
            labelAlign='left'
          >
            <Form.Item
              name='name'
              label='Name'
              rules={[
                {
                  required: true,
                  message: 'Please input your name!',
                },
                whiteSpaceRule,
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              name='email'
              label='Email'
              rules={[
                {
                  type: 'email',
                  message: 'The input is not valid E-mail!',
                },
                {
                  required: true,
                  message: 'Please input your email!',
                },
                whiteSpaceRule,
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              name='password'
              label='Password'
              rules={[
                {
                  required: true,
                  message: 'Please input your password!',
                },
                {
                  min: 6,
                  message: 'Minimum length of 6 characters',
                },
                whiteSpaceRule,
              ]}
              hasFeedback
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
              name='confirm'
              label='Confirm Password'
              dependencies={['password']}
              hasFeedback
              rules={[
                {
                  required: true,
                  message: 'Please confirm your password!',
                },
                {
                  min: 6,
                  message: 'Minimum length of 6 characters',
                },
                ({ getFieldValue }) => ({
                  validator(rule, value) {
                    if (!value || getFieldValue('password') === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(
                      'The two passwords that you entered do not match!'
                    );
                  },
                }),
                whiteSpaceRule,
              ]}
            >
              <Input.Password />
            </Form.Item>
            <Form.Item wrapperCol={{ span: 24 }}>
              <Button
                type='primary'
                htmlType='submit'
                className='login-form-button'
                block
                disabled={fetchingAuth ? true : false}
              >
                Register
              </Button>
            </Form.Item>
            <p>
              Do you already have an account?{' '}
              <Link to='/login'>Login in here!</Link>
            </p>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
