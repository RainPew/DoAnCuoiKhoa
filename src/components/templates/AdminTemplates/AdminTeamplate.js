import React, {useState} from 'react'
import { Fragment } from 'react/cjs/react.production.min'
import { Route } from "react-router-dom";
import HeaderComponent from "../../HeaderComponent";
//antd
import { Layout, Menu } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from "@ant-design/icons";

const { Header, Sider, Content } = Layout;


export default function AdminTeamplate(props) { 
    
  const [state, setState] = useState( {
    collapsed: false,
  })

 const toggle = () => {
    setState({
      collapsed: !state.collapsed,
    });
  };
    
    return <Fragment>
        <Route exact path = {props.path} render={(propsRoute) => {
            return (
              <Fragment>
                <Layout>
                  <Sider
                    trigger={null}
                    collapsible
                    collapsed={state.collapsed}
                  >
                    <div className="logo" />
                    <Menu
                      theme="dark"
                      mode="inline"
                      defaultSelectedKeys={["1"]}
                    >
                      <Menu.Item key="1" icon={<UserOutlined />}>
                        nav 1
                      </Menu.Item>
                      <Menu.Item key="2" icon={<VideoCameraOutlined />}>
                        nav 2
                      </Menu.Item>
                      <Menu.Item key="3" icon={<UploadOutlined />}>
                        nav 3
                      </Menu.Item>
                    </Menu>
                  </Sider>
                  <Layout className="site-layout">
                    <Header
                      className="site-layout-background"
                      style={{ padding: 0 }}
                    >
                      {React.createElement(
                        state.collapsed
                          ? MenuUnfoldOutlined
                          : MenuFoldOutlined,
                        {
                          className: "trigger",
                          onClick: toggle,
                        }
                      )}
                    </Header>
                    <Content
                      className="site-layout-background"
                      style={{
                        margin: "24px 16px",
                        padding: 24,
                        minHeight: 280,
                      }}
                    >
                     <props.component {...propsRoute} />
                    </Content>
                  </Layout>
                </Layout>
              </Fragment>
            );
        }} />
    </Fragment>
}