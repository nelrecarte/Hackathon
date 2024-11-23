import { Select, Button, ConfigProvider } from 'antd';

const { Option } = Select;

const TipoDePago = () => {
    return (
        <div style={styles.container}>
            <h2 style={styles.heading}>Seleccione el Tipo de Pago</h2>

            <ConfigProvider
  theme={{
    components: {
      Select: {
        selectorBg: '#363636',
        colorText: '#FFFFFF',
        optionSelectedColor: '#FFFFFF',
        activeOutlineColor: '#363636',
        hoverBorderColor: '#363636',
        multipleItemBg: '#363636',
        multipleItemColorDisabled: '#FFFFFF',
        optionActiveBg: '#1E1E1E',
        optionSelectedBg	: '#1E1E1E',
        multipleItemBg	: '#363636',
        colorBgElevated	: '#363636',
      },
    },
  }}
>
<Select defaultValue="mensual">
                <Option value="mensual">Mensual</Option>
                <Option value="bimensual">Bimensual</Option>
            </Select>
</ConfigProvider>
<br/>
            
            <Button type="primary" style={styles.button}>Let's Go</Button>
        </div>
    );
};

const styles = {
    container: {
        backgroundColor: '#2E2E2E',
        padding: '10px', // Reduced padding
        borderRadius: '8px',
        textAlign: 'center',
        color: 'white',
        width: '700px', // Set a fixed width
        height: '200px', // Set a fixed height
        margin: '0 auto', // Center the container horizontally
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start', // Center contents vertically
        alignItems: 'center', // Center contents horizontally
    },
    heading: {
        marginBottom: '20px', // Reduced margin
        fontSize: '30px', // Reduced font size
        
    },
    button: {
        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
        padding: '5px 10px', // Reduced padding
        backgroundColor: '#363636',
        width: '100px',
        fontSize: '14px', // Reduced font size
    },
};


export default TipoDePago;