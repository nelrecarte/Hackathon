import React from 'react';
import { Table, ConfigProvider } from 'antd';

const TablaEmpleados = () => {
    const columns = [
        {
            title: 'Código',
            dataIndex: 'codigo',
            key: 'codigo',
        },
        {
            title: 'Nombre',
            dataIndex: 'nombre',
            key: 'nombre',
        },
        {
            title: 'Correo Electrónico',
            dataIndex: 'correoElectronico',
            key: 'correoElectronico',
        },
        {
            title: 'Tipo de Salario',
            dataIndex: 'tipoDeSalario',
            key: 'tipoDeSalario',
        },
        {
            title: 'Salario',
            dataIndex: 'salario',
            key: 'salario',
        },
    ];

    const data = [
        {
            key: '1',
            codigo: '001',
            nombre: 'Juan Perez',
            correoElectronico: 'juan.perez@example.com',
            tipoDeSalario: 'Mensual',
            salario: '$3000',
        },
        {
            key: '2',
            codigo: '002',
            nombre: 'Maria Lopez',
            correoElectronico: 'maria.lopez@example.com',
            tipoDeSalario: 'Quincenal',
            salario: '$1500',
        },
        // Add more data as needed
    ];

    return (
        <ConfigProvider
            theme={{
                components: {
                    Table: {
                        colorBgContainer: '#2E2E2E', // Background color of the table
                        colorText: '#FFFFFF', // Text color  
                        headerColor: '#FFFFFF', // Header color
                        headerBg: '#121212', // Header background color
                        rowHoverBg: '#1E1E1E', // Background color of the row on hover
                        headerSplitColor	: '#363636', // Header split color
                        colorSplit: '#363636', // Split color
                        borderColor	: '#363636', // Border color
                        
                    },
                },
            }}
        >
            <Table columns={columns} dataSource={data} />
        </ConfigProvider>
    );
};

export default TablaEmpleados;