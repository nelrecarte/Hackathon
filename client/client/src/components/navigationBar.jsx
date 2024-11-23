import React from 'react';
import { Layout, Menu } from 'antd';
import { UserOutlined, DownOutlined, ApiOutlined } from '@ant-design/icons';
import { ConfigProvider } from 'antd';

const { Sider } = Layout;
const { SubMenu } = Menu;

const NavigationBar = () => {
  return (
    
      
        <Sider style={{ marginLeft: '50px', marginTop: '100px', borderRadius: '10px 0 0 10px' }}>
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
                  itemActiveBg	: '#1E1E1E',
                  itemSelectedBg: '#1E1E1E',
                },
              },
            }}
          >

          
            <Menu defaultSelectedKeys={['1']} mode="inline">
              <SubMenu key="sub1" icon={<UserOutlined />} title="Administracion" expandIcon={<DownOutlined />}>
                <Menu.Item key="1">Ciclos de Planilla</Menu.Item>
                <Menu.Item key="2">Deducciones</Menu.Item>
              </SubMenu>
              <SubMenu key="sub2" icon={<ApiOutlined />} title="Gestion de Empleados" expandIcon={<DownOutlined />}>
                <Menu.Item key="3">Agregar Empleado</Menu.Item>
                <Menu.Item key="4">Ingreso de Horas</Menu.Item>
              </SubMenu>
            </Menu>
          </ConfigProvider>
        </Sider>
      
  
  );
};

export default NavigationBar;
