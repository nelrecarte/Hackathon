import React, { useState } from 'react';
import { Table, Input, Button, ConfigProvider, Modal } from 'antd';
import { CheckOutlined } from '@ant-design/icons';

const TablaPago = () => {
    const [data, setData] = useState([
        {
            key: '1',
            codigo: '001',
            nombre: 'Juan Perez',
            horasTotales: '',
            horasExtra: '',
            confirmado: false,
        },
        {
            key: '2',
            codigo: '002',
            nombre: 'Maria Lopez',
            horasTotales: '',
            horasExtra: '',
            confirmado: false,
        },
        // Add more data as needed
    ]);

    const handleConfirm = (key) => {
        setData((prevData) =>
            prevData.map((item) =>
                item.key === key ? { ...item, confirmado: true } : item
            )
        );
    };

    const handleInputChange = (key, field, value) => {
        setData((prevData) =>
            prevData.map((item) =>
                item.key === key ? { ...item, [field]: value, confirmado: false } : item
            )
        );
    };

    const handleGuardarCambios = () => {
        const allConfirmed = data.every(item => item.confirmado);
        if (allConfirmed) {
            // Handle the function if all rows have the checkmark
            console.log('All rows confirmed');
        } else {
            // Show modal if not all rows are confirmed
            Modal.warning({
                title: 'Advertencia',
                content: 'No has ingresado todas las horas',
            });
        }
    };

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
            title: 'Horas Totales',
            dataIndex: 'horasTotales',
            key: 'horasTotales',
            render: (text, record) => (
                <Input
                    value={record.horasTotales}
                    onChange={(e) => handleInputChange(record.key, 'horasTotales', e.target.value)}
                    style={{ width: '100px', backgroundColor: "#1E1E1E", color: "#FFFFFF" }} // Reduced width and custom styles
                />
            ),
        },
        {
            title: 'Horas Extra',
            dataIndex: 'horasExtra',
            key: 'horasExtra',
            render: (text, record) => (
                <Input
                    value={record.horasExtra}
                    onChange={(e) => handleInputChange(record.key, 'horasExtra', e.target.value)}
                    style={{ width: '100px', backgroundColor: "#1E1E1E", color: "#FFFFFF" }} // Reduced width and custom styles
                />
            ),
        },
        {
            title: 'Acciones',
            dataIndex: 'acciones',
            key: 'acciones',
            render: (text, record) => (
                record.confirmado ? (
                    <CheckOutlined style={{ color: 'green' }} />
                ) : (
                    <Button type="primary" onClick={() => handleConfirm(record.key)}>
                        Confirmar
                    </Button>
                )
            ),
        },
    ];

    return (
        <div>
        <ConfigProvider
            theme={{
                components: {
                    Table: {
                        colorBgContainer: '#2E2E2E', // Background color of the table
                        colorText: '#FFFFFF', // Text color  
                        headerColor: '#FFFFFF', // Header color
                        headerBg: '#121212', // Header background color
                        rowHoverBg: '#1E1E1E', // Background color of the row on hover
                        headerSplitColor: '#363636', // Header split color
                        colorSplit: '#363636', // Split color
                        borderColor: '#363636', // Border color
                    },
                    Button: {
                        colorPrimary: '#FF5733', // Change this to your desired button background color
                        colorPrimaryHover: '#FF4500', // Change this to your desired button hover background color
                    },
                },
            }}
        >
            <Table columns={columns} dataSource={data} />
        </ConfigProvider>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}> 
        <ConfigProvider
            theme={{
                components: {
                    Button: {
                        colorPrimary: '#1E1E1E', // Change this to your desired button background color
                        colorPrimaryHover: '#FF4500', // Change this to your desired button hover background color
                    },
                },
            }}
        >
            <Button type="primary" style={{ marginTop: '10px'}} onClick={handleGuardarCambios}>
                Guardar Cambios
            </Button>
        </ConfigProvider>    
            </div>

        </div>
        
    );
};

export default TablaPago;