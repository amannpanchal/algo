// src/pages/SignupPage.tsx

import React, { ChangeEventHandler, useState } from 'react';
import { Form, Input, Button, Typography } from 'antd';
import { UserOutlined, LockOutlined, MailOutlined } from '@ant-design/icons';

const Signup: React.FC = () => {
  const onFinish = (values: any) => {
    console.log('Received values:', values);
  };
const [email,setEmail] = useState<string>("");
const [password, setPassword] = useState<string>("");

  return (

    
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Form
        name="signup-form"
        onFinish={onFinish}
        style={{ maxWidth: '300px' }}
      >
       <Typography.Title>Register Now</Typography.Title>
        <Form.Item
          name="email"
          rules={[{ required: true, type: 'email', message: 'Please enter a valid email address!' }]}



        >
          <Input
          value = {email}
 
          onChange={ (e:React.ChangeEvent<HTMLInputElement>) => {setEmail(e.target.value)}}
          
          prefix={<MailOutlined />} placeholder="Email" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: 'Please enter your password!' }]}
        >
          <Input.Password prefix={<LockOutlined />} placeholder="Password" />
        </Form.Item>
        <Form.Item
          name="confirmPassword"
          dependencies={['password']}

          
          rules={[
            { required: true, message: 'Please confirm your password!' },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error('The two passwords do not match!'));
              },
            }),
          ]}
        >
          <Input.Password
                   onChange={(e:React.ChangeEvent<HTMLInputElement>) => {setPassword(e.target.value)}}
value = {password}
          
          
          
          prefix={<LockOutlined />} placeholder="Confirm Password" />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
            Sign Up
          </Button>
          Or <a href="/login">log in now!</a>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Signup;
