import React from 'react';
import Counter from './Counter';
import pbjTime from './DancingBanana.gif';

const Banana = () => {
    const center = {
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        width: '100%',
        height: '100%',
        flexDirection: 'column'
    }

    return(
        <div style={center}> 
            <img src={pbjTime} alt="It's Peanut Butter Jelly Time"/>
            <h2><Counter /></h2>
        </div>
    );
}

export default Banana;