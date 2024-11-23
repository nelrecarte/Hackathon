import React from 'react';
import NavigationBar from '../components/navigationBar';
import TipoDePago from '../components/TipoDePago';

const HolaMundo = () => {
    return (
        <div>
            <NavigationBar/>
            
            <div style={{marginLeft: '50px'}}>
                <TipoDePago/>
            </div>
            
        </div>
    );
};

export default HolaMundo;