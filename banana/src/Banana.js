import React from 'react';
import Counter from './Counter';
import pbjTime from './DancingBanana.gif';

const Banana = () => {
    const center = {
        justifyContent: 'center',
        alignItems: 'center',
    }

    return(
        <div style={center}> 
            <img src={pbjTime} alt="It's Peanut Butter Jelly Time"/>
            <h2><Counter /></h2>
        </div>
    );
}

export default Banana;