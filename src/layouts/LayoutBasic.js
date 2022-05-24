import React, { useState } from "react";
import { Layout } from "antd";
import MenuTop from "../components/AdminComponents/MenuTop";
import MenuSider from "../components/AdminComponents/MenuSider";
import "./LayoutAdmin.scss";

export default function LayoutAdmin() {
  const [menuCollapsed, setMenuCollapsed] = useState(false);
  const { Header, Content, Footer } = Layout;
  return (
    <Layout>
      <MenuSider menucollapsed={menuCollapsed} />
      <Layout className="layout-admin">
        <Header className="layout-admin__header">
          <MenuTop
            menuCollapsed={menuCollapsed}
            setMenucollapsed={setMenuCollapsed}
          />
        </Header>
        <Content className="layout-admin__content">
          <h1>Rutas</h1>
        </Content>
        <Footer className="layout-admin__footer">MERN React</Footer>
      </Layout>
    </Layout>
  );
}
