
import React from 'react';
import { Layout, Menu } from 'antd';
import {
  UserOutlined,
  DownOutlined,
} from '@ant-design/icons';



const { Sider } = Layout;
const { SubMenu } = Menu;

const NavigationBar = () => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible>
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
          <SubMenu key="sub1" icon={<UserOutlined />} title="Administracion" expandIcon={<DownOutlined />}>
            <Menu.Item key="1">Ciclos de Planilla</Menu.Item>
            <Menu.Item key="2">Deducciones</Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
    </Layout>
  );
};

export default NavigationBar;