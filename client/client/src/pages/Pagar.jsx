import React from 'react';
import NavigationBar from '../components/navigationBar';

const Pagar = () => {
    return (
        <div style={styles.container}>
            <NavigationBar />
            <div style={styles.content}>
                <h1>Pagar</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
    },
    content: {
        marginLeft: '20px', // Adjust this value based on the width of your Sider
        padding: '20px',
        marginTop: '44px', // Adjust this value based on the height of your Header
        width: '100%',
    },
};

export default Pagar;