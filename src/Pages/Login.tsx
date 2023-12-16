
import React, { ChangeEvent, useState } from 'react';
import { Form, Input, Button, Checkbox, Typography } from 'antd';
import { MailOutlined, LockOutlined } from '@ant-design/icons';

const Login: React.FC = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

  const onFinish = (values: any) => {


    
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>

      <Form
        name="login-form"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        style={{ maxWidth: '300px' }}
        >
          <Typography.Title>Login Now</Typography.Title>
        <Form.Item
          name="email"
          rules={[{ required: true, message: 'Please enter your email!' }]}
        >
          <Input  onChange = {(e:ChangeEvent<HTMLInputElement>) => {setEmail(e.target.value)}} value = {email} prefix={<MailOutlined />} placeholder="email" />
        </Form.Item>
        <Form.Item
          name="password"
          



          rules={[{ required: true, message: 'Please enter your password!' }]}
        >
          <Input.Password 
          value = {password}
          onChange={(e:ChangeEvent<HTMLInputElement>) => {setPassword(e.target.value)}}
          
          
          
          prefix={<LockOutlined />} placeholder="Password" />
        </Form.Item>
      
        <Form.Item>
          <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
            Log in
          </Button>
          Or <a href="/signup">register now!</a>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;
