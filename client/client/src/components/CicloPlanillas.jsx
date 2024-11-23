import React, { useState, useEffect } from 'react';
import { Select, Button, Form, DatePicker, Input } from 'antd';
import { CalendarOutlined, SyncOutlined } from '@ant-design/icons';

const { Option } = Select;

const CicloPlanillas = () => {
    const [tipoCicloBisemanal, setTipoCicloBisemanal] = useState('');
    const [tipoCicloMensual, setTipoCicloMensual] = useState('');
    const [fechaCorteBisemanal, setFechaCorteBisemanal] = useState(null);
    const [fechaCorteMensual, setFechaCorteMensual] = useState(null);
    const [fechaActual, setFechaActual] = useState('');

    useEffect(() => {
        // Obtener la fecha actual
        const today = new Date();
        const formattedDate = today.toISOString().split('T')[0]; // Formato: YYYY-MM-DD
        setFechaActual(formattedDate);
    }, []);

    const handleCicloBisemanalChange = (value) => {
        setTipoCicloBisemanal(value);
    };

    const handleCicloMensualChange = (value) => {
        setTipoCicloMensual(value);
    };

    const handleFechaCorteBisemanalChange = (date, dateString) => {
        setFechaCorteBisemanal(dateString);
    };

    const handleFechaCorteMensualChange = (date, dateString) => {
        setFechaCorteMensual(dateString);
    };

    const handleSubmit = () => {
        console.log('Ciclo Bisemanal:', tipoCicloBisemanal, 'Fecha Corte:', fechaCorteBisemanal);
        console.log('Ciclo Mensual:', tipoCicloMensual, 'Fecha Corte:', fechaCorteMensual);
    };

    return (
        <div style={formContainerStyle}>
            <h2 style={titleStyle}>Configurar Ciclo de Planillas</h2>
            <Form layout="vertical" onFinish={handleSubmit}>
                {/* Configuración Bisemanal */}
                <h3 style={subtitleStyle}>Ciclo Bisemanal</h3>
                <Form.Item label="Fecha Actual de Corte" style={labelStyle}>
                    <Input
                        prefix={<SyncOutlined style={iconStyle} />}
                        value={fechaActual}
                        style={readonlyInputStyle}
                        readOnly
                    />
                </Form.Item>
                <Form.Item label="Seleccionar Tipo de Ciclo Bisemanal" style={labelStyle}>
                    <Select
                        placeholder="Seleccionar Tipo de Ciclo Bisemanal"
                        style={selectStyle}
                        onChange={handleCicloBisemanalChange}
                        value={tipoCicloBisemanal}
                    >
                        <Option value="bisemanal-1">Bisemanal - Primera Quincena</Option>
                        <Option value="bisemanal-2">Bisemanal - Segunda Quincena</Option>
                    </Select>
                </Form.Item>
                <Form.Item label="Seleccionar Fecha de Corte Bisemanal" style={labelStyle}>
                    <DatePicker
                        placeholder="Seleccionar Fecha de Corte Bisemanal"
                        style={datePickerStyle}
                        onChange={handleFechaCorteBisemanalChange}
                        format="YYYY-MM-DD"
                        suffixIcon={<CalendarOutlined style={iconStyle} />}
                    />
                </Form.Item>

                {/* Configuración Mensual */}
                <h3 style={subtitleStyle}>Ciclo Mensual</h3>
                <Form.Item label="Fecha Actual de Corte" style={labelStyle}>
                    <Input
                        prefix={<SyncOutlined style={iconStyle} />}
                        value={fechaActual}
                        style={readonlyInputStyle}
                        readOnly
                    />
                </Form.Item>
                <Form.Item label="Seleccionar Tipo de Ciclo Mensual" style={labelStyle}>
                    <Select
                        placeholder="Seleccionar Tipo de Ciclo Mensual"
                        style={selectStyle}
                        onChange={handleCicloMensualChange}
                        value={tipoCicloMensual}
                    >
                        <Option value="mensual">Mensual</Option>
                    </Select>
                </Form.Item>
                <Form.Item label="Seleccionar Fecha de Corte Mensual" style={labelStyle}>
                    <DatePicker
                        placeholder="Seleccionar Fecha de Corte Mensual"
                        style={datePickerStyle}
                        onChange={handleFechaCorteMensualChange}
                        format="YYYY-MM-DD"
                        suffixIcon={<CalendarOutlined style={iconStyle} />}
                    />
                </Form.Item>

                <Form.Item>
                    <Button
                        type="primary"
                        htmlType="submit"
                        style={buttonStyle}
                    >
                        Guardar Configuración
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

// **Estilos**
const formContainerStyle = {
    backgroundColor: '#2c2c2c',
    padding: '30px',
    borderRadius: '12px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)',
    width: '100%',
    maxWidth: '700px',
    margin: 'auto',
};

const titleStyle = {
    textAlign: 'center',
    marginBottom: '20px',
    color: '#fff',
    fontWeight: 'bold',
    fontSize: '24px',
};

const subtitleStyle = {
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: '10px',
};

const labelStyle = {
    color: '#fff',
    fontWeight: 'bold',
};

const selectStyle = {
    width: '100%',
    backgroundColor: '#fff',
    color: '#000',
    border: '1px solid #555',
    borderRadius: '8px',
};

const datePickerStyle = {
    width: '100%',
    backgroundColor: '#fff',
    color: '#000',
    border: '1px solid #555',
    borderRadius: '8px',
    padding: '5px 10px',
};

const readonlyInputStyle = {
    width: '100%',
    backgroundColor: '#f5f5f5',
    color: '#000',
    border: '1px solid #555',
    borderRadius: '8px',
    padding: '10px',
    cursor: 'not-allowed',
};

const iconStyle = {
    color: '#444',
};

const buttonStyle = {
    width: '100%',
    padding: '10px 0',
    backgroundColor: '#444',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    fontWeight: 'bold',
};

export default CicloPlanillas;
