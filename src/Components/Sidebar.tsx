import React, { useState } from 'react';
import { useNavigate,useLocation } from 'react-router-dom';

import {
    FacebookFilled,
    FacebookOutlined,
    FileImageOutlined,
    HomeOutlined,
  LikeOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PicCenterOutlined,
  ProfileOutlined,
  SaveOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu, Button, theme } from 'antd';
import { Link } from 'react-router-dom';


const { Header, Sider, Content } = Layout;

interface ans {
    children : React.ReactNode
}
const Sidebar: React.FC<ans> = ({children}) => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const currentRoute = location.pathname;

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  
  return (
    <Layout style = {{height : "100vh"}}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={[`${currentRoute}`]}
       onClick={ (key:any) => {
        // console.log(key.key);
        
        navigate(key.key)
    }}



          items={[
            {
              key: '/',
              icon: <HomeOutlined />,
              label: 'Home',
            //   onClick : () => {navigate('/')}
             

        
            },
            {
              key: '/mybookmark',
              icon: <SaveOutlined />,
              label: 'Bookmarks',
            //   onClick : () => {navigate('/mybookmark')}
            },
            {
              key: '/myposts',
              icon: <FileImageOutlined/>,
              label: 'Posts',
            //   onClick : () => {navigate('/myposts')}
            },
            {
              key: '/mylikes',
              icon: <LikeOutlined />,
              label: 'Likes',
            //   onClick : () =>{navigate('/mylikes')}
            },
            {
              key: '/myprofile',
              icon: < UserOutlined/>,
              label: 'Profile ',
            //   onClick : () => {navigate('/myprofile')}
            },
          ]}
        />
      </Sider>
  
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >

            {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default Sidebar;













