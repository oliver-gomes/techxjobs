import React from "react";
import { Layout, Menu, Breadcrumb } from "antd";

const { Header, Content, Footer } = Layout;

export default function MainHeader() {
  return (
    <div>
      <Layout className="layout">
        <Header>
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={["1"]}
            style={{ lineHeight: "64px" }}
          >
            <Menu.Item key="1">All</Menu.Item>
            <Menu.Item key="2">React</Menu.Item>
            <Menu.Item key="3">Vue</Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: "0 50px" }}>
          <div style={{ background: "#F0F2F5", padding: 24, minHeight: 280 }}>
            Content
          </div>
        </Content>
      </Layout>
    </div>
  );
}
