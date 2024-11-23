import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import { UserOutlined, DownOutlined, ApiOutlined } from '@ant-design/icons';
import { ConfigProvider } from 'antd';
import { Link } from 'react-router-dom';
import logo from '../assets/images/puzzle_logo.png'; // Update the path if needed

const { Sider, Content, Header } = Layout;
const { SubMenu } = Menu;

const NavigationBar = () => {
  const [collapsed, setCollapsed] = useState(false); // State to control the sidebar collapse

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      {/* Top Navigation Bar */}
      <Header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1, // To ensure it stays on top of other elements
          backgroundColor: '#363636', // Dark background for the top navbar
          color: '#fff', // White text color for the navbar
          padding: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            padding: '0 20px',
          }}
        >
          <img src={logo} alt="Logo" style={{ width: '40px', marginRight: '10px' }} />
          <h2 style={{ color: '#fff' }}>Dashboard</h2>
        </div>
      </Header>

      {/* Sidebar */}
      <Sider
        width={250}
        collapsible
        collapsed={collapsed} // Sidebar collapses based on this state
        onCollapse={toggleSidebar}
        style={{
          position: 'fixed',
          top: 64, // Make space for the top navbar
          left: 0,
          bottom: 0,
          backgroundColor: '#363636', // Dark gray for the sidebar
          borderRadius: '10px 0 0 10px',
        }}
      >
        <ConfigProvider
          theme={{
            components: {
              Menu: {
                itemBg: '#363636',
                darkItemSelectedBg: '#FFFFFF',
                itemSelectedColor: '#FFFFFF',
                itemColor: '#FFFFFF',
                itemHoverColor: '#FFFFFF',
                itemSelectedBg: '#1E1E1E',
                dangerItemActiveBg: '#1E1E1E',
                dangerItemHoverBg: '#1E1E1E',
                dangerItemSelectedBg: '#1E1E1E',
                itemActiveBg: '#1E1E1E',
                itemSelectedBg: '#1E1E1E',
              },
            },
          }}
        >
          <Menu defaultSelectedKeys={['1']} mode='inline'>
            <SubMenu
              key='sub1'
              icon={<UserOutlined />}
              title='Administracion'
              expandIcon={<DownOutlined />}
            >
              <Menu.Item key='1'>
              <Link to="/ciclos-de-planilla">Ciclos de Planilla</Link>
                </Menu.Item>
              <Menu.Item key='2'>
              <Link to="/deducciones">Deducciones</Link>
                </Menu.Item>
            </SubMenu>
            <SubMenu
              key='sub2'
              icon={<ApiOutlined />}
              title='Gestion de Empleados'
              expandIcon={<DownOutlined />}
            >
              <Menu.Item key='3'>
              <Link to="/agregar-empleado">Agregar Empleado</Link>
                </Menu.Item>
                <Menu.Item key='4'>
                <Link to="/Ver-Empleados">Ver Empleados</Link>
                </Menu.Item>
              <Menu.Item key='5'>
              <Link to="/Pagar">Pagar Empleados</Link>
                </Menu.Item>
            </SubMenu>
          </Menu>
        </ConfigProvider>
      </Sider>

      {/* Main Content Area */}
      <Layout style={{ marginLeft: collapsed ? 80 : 250 }}>
        <Content
          style={{
            padding: '24px',
            minHeight: '100vh',
            backgroundColor: '#252525', // Darker background for content area
            color: '#fff', // White text color to contrast the dark background
            marginTop: '64px', // Adjusted to prevent overlap with the header
          }}
        >
          {/* Your Content Goes Here */}
        </Content>
      </Layout>
    </Layout>
  );
};

export default NavigationBar;
