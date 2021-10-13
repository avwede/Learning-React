import React, { useState } from 'react';
import Button from '@mui/material/Button';

const centerVert = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: '250px',
}

const Counter = () => {
    const [count, setCount] = useState(0);
    const [song, setSong] = useState(" ");

    const addToSong = () => {
        setCount(count + 1);

        if (count > 5){
            setSong("");
            setCount(0);
        }

        if (count === 1) {
            setSong("It's");
        }
        else if (count === 2) {
            setSong(song + " Peanut")
        }
        else if (count === 3) {
            setSong(song + " Butter")
        }
        else if (count === 4) {
            setSong(song + " Jelly")
        }
        else if (count === 5) {
            setSong(song + " Time")
        }
    }
    
    return(
        <div style={centerVert}> 
            <Button variant='outlined' onClick={addToSong}>GO</Button>
            <p>{song}</p>
        </div>
    );
};

export default Counter;