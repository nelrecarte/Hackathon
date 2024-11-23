import React, { useState } from 'react';
import { UserOutlined, MailOutlined, HomeOutlined, DollarOutlined } from '@ant-design/icons';

const FormularioEmpleado = () => {
    const [formData, setFormData] = useState({
        codigo: '',
        edad: '',
        nombre: '',
        apellido: '',
        direccion: '',
        correoPersonal: '',
        correoEmpresarial: '',
        tipoSalario: '',
        medioPago: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Datos del Empleado:', formData);
    };

    return (
        <div style={formContainerStyle}>
            <h2 style={titleStyle}>Datos del Empleado</h2>
            <form onSubmit={handleSubmit} style={formStyle}>
                <div style={formRowStyle}>
                    <div style={inputContainerStyle}>
                        <UserOutlined style={iconStyle} />
                        <input
                            type="text"
                            name="codigo"
                            value={formData.codigo}
                            onChange={handleChange}
                            placeholder="Código de Empleado"
                            style={inputStyle}
                        />
                    </div>
                    <div style={inputContainerStyle}>
                        <UserOutlined style={iconStyle} />
                        <input
                            type="number"
                            name="edad"
                            value={formData.edad}
                            onChange={handleChange}
                            placeholder="Edad"
                            style={inputStyle}
                        />
                    </div>
                </div>
                <div style={formRowStyle}>
                    <div style={inputContainerStyle}>
                        <UserOutlined style={iconStyle} />
                        <input
                            type="text"
                            name="nombre"
                            value={formData.nombre}
                            onChange={handleChange}
                            placeholder="Nombre"
                            style={inputStyle}
                        />
                    </div>
                    <div style={inputContainerStyle}>
                        <UserOutlined style={iconStyle} />
                        <input
                            type="text"
                            name="apellido"
                            value={formData.apellido}
                            onChange={handleChange}
                            placeholder="Apellido"
                            style={inputStyle}
                        />
                    </div>
                </div>
                <div style={formRowStyle}>
                    <div style={inputContainerFullStyle}>
                        <HomeOutlined style={iconStyle} />
                        <input
                            type="text"
                            name="direccion"
                            value={formData.direccion}
                            onChange={handleChange}
                            placeholder="Dirección"
                            style={inputStyle}
                        />
                    </div>
                </div>
                <div style={formRowStyle}>
                    <div style={inputContainerStyle}>
                        <MailOutlined style={iconStyle} />
                        <input
                            type="email"
                            name="correoPersonal"
                            value={formData.correoPersonal}
                            onChange={handleChange}
                            placeholder="Correo Electrónico Personal"
                            style={inputStyle}
                        />
                    </div>
                    <div style={inputContainerStyle}>
                        <MailOutlined style={iconStyle} />
                        <input
                            type="email"
                            name="correoEmpresarial"
                            value={formData.correoEmpresarial}
                            onChange={handleChange}
                            placeholder="Correo Electrónico Empresarial"
                            style={inputStyle}
                        />
                    </div>
                </div>
                <div style={formRowStyle}>
                    <div style={inputContainerStyle}>
                        <DollarOutlined style={iconStyle} />
                        <input
                            type="text"
                            name="tipoSalario"
                            value={formData.tipoSalario}
                            onChange={handleChange}
                            placeholder="Tipo de Salario"
                            style={inputStyle}
                        />
                    </div>
                    <div style={inputContainerStyle}>
                        <UserOutlined style={iconStyle} />
                        <input
                            type="text"
                            name="medioPago"
                            value={formData.medioPago}
                            onChange={handleChange}
                            placeholder="Medio de Pago"
                            style={inputStyle}
                        />
                    </div>
                </div>
                <button
                    type="submit"
                    style={{
                        padding: '10px 20px',
                        backgroundColor: '#444',
                        color: '#fff',
                        border: 'none',
                        borderRadius: '8px',
                        display: 'block',
                        margin: '20px auto',
                        cursor: 'pointer',
                        fontWeight: 'bold',
                    }}
                >
                    Crear Empleado
                </button>
            </form>
        </div>
    );
};

// Estilos

const formContainerStyle = {
    backgroundColor: '#2c2c2c',
    padding: '30px',
    borderRadius: '12px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)',
    width: '100%',
    maxWidth: '700px',
    boxSizing: 'border-box',
};

const titleStyle = {
    textAlign: 'center',
    marginBottom: '20px',
    color: '#fff',
    fontWeight: 'bold',
    fontSize: '24px',
};

const formStyle = {
    width: '100%',
};

const formRowStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    gap: '15px',
    marginBottom: '15px',
    flexWrap: 'wrap',
};

const inputContainerStyle = {
    position: 'relative',
    flex: '1 1 48%',
    maxWidth: '48%',
    boxSizing: 'border-box',
};

const inputContainerFullStyle = {
    position: 'relative',
    flex: '1 1 100%',
    maxWidth: '100%',
    boxSizing: 'border-box',
};

const iconStyle = {
    position: 'absolute',
    top: '50%',
    left: '10px',
    transform: 'translateY(-50%)',
    color: '#fff',
    fontSize: '18px',
};

const inputStyle = {
    width: '100%',
    padding: '12px 12px 12px 40px',
    backgroundColor: '#1e1e1e',
    color: '#fff',
    border: '1px solid #555',
    borderRadius: '6px',
    boxSizing: 'border-box',
};

export default FormularioEmpleado;
