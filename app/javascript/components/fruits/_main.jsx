import React from "react";
import Body from "./_body";
import "antd/dist/antd.css";
import { Layout } from "antd";
import { Header } from "antd/lib/layout/layout";

const Main = () => {
  const { Content } = Layout;
  return (
    <Layout className="layout">
      <Header>Hello React From Rails...</Header>
      <Content style={{ padding: "0 50px" }}>
        <div className="site-layout-content" style={{ margin: "100px auto" }}>
          <h1>Hello React From Rails...</h1>
          <Body />
        </div>
      </Content>
    </Layout>
  );
};

export default Main;
