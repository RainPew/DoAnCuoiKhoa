import React, { Component } from 'react'
import { Menu, Switch } from "antd";
import {
  PieChartOutlined,
  AppstoreOutlined,
  SettingOutlined,
} from "@ant-design/icons";

const { SubMenu } = Menu;

export default class Sider extends Component {
  state = {
    theme: "light",
    current: "1",
  };

  changeTheme = (value) => {
    this.setState({
      theme: value ? "light" : "dark",
    });
  };

  handleClick = (e) => {
    console.log("click ", e);
    this.setState({
      current: e.key,
    });
  };
  render() {
    return (
      <>
        <Menu
          theme={this.state.theme}
          onClick={this.handleClick}
          style={{ width: 256 }}
          // defaultOpenKeys={["sub1"]}
          selectedKeys={[this.state.current]}
          mode="inline"
        >
          <SubMenu key="sub1" icon={<PieChartOutlined />} title="Dự Án">
            <Switch
              checked={this.state.theme === "light"}
              onChange={this.changeTheme}
              checkedChildren="Light"
              unCheckedChildren="Dark"
            />
            <Menu.Item key="1">Dự án Cuối Khóa</Menu.Item>
            <Menu.Item key="2">Dự án cyber</Menu.Item>
            <Menu.Item key="3">Dự án 3</Menu.Item>
            <Menu.Item key="4">Dự án 4</Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub2"
            icon={<AppstoreOutlined />}
            title=""
          >
            <Menu.Item key="5">Option 5</Menu.Item>
            <Menu.Item key="6">Option 6</Menu.Item>
            <SubMenu key="sub3" title="Submenu">
              <Menu.Item key="7">Option 7</Menu.Item>
              <Menu.Item key="8">Option 8</Menu.Item>
            </SubMenu>
          </SubMenu>
          <SubMenu
            key="sub4"
            icon={<SettingOutlined />}
            title=""
          >
            <Menu.Item key="9">Option 9</Menu.Item>
            <Menu.Item key="10">Option 10</Menu.Item>
            <Menu.Item key="11">Option 11</Menu.Item>
            <Menu.Item key="12">Option 12</Menu.Item>
          </SubMenu>
        </Menu>
      </>
    );
  }
}
