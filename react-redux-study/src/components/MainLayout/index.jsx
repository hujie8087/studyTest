import React from "react";
import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";
import "./index.less";

const { Header, Content, Footer } = Layout;

function MainLayout(props) {
  return (
    <Layout className='layout'>
      <Header>
        <div className='container'>
          <div className='logo'>
            <Link to='/'>LOGIN 功能</Link>
          </div>
          <Menu mode='horizontal' defaultSelectedKeys={["1"]}>
            <Menu.Item key='1'>
              <Link className='nav-link' to='/login'>
                Login
              </Link>
            </Menu.Item>
            <Menu.Item key='2'>
              <Link className='nav-link' to='/register'>
                Register
              </Link>
            </Menu.Item>
          </Menu>
        </div>
      </Header>
      <Content className='site-layout'>
        <div className='container'>{props.children}</div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Ant Design ©2021 Created by Ant UED
      </Footer>
    </Layout>
  );
}

export default MainLayout;
