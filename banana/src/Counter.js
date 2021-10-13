import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';

const centerVert = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: '3em',
}

let splitString;

const Counter = ({ sentence }) => {
    const [count, setCount] = useState(0);
    const [song, setSong] = useState("");

    useEffect(() => {
        splitString = sentence.split(" ");
    }, [])

    const addToSong = () => {
        if (count >= splitString.length) {
            setSong("");
            setCount(0);
        } 
        else {
            setSong(song + splitString[count] + ' ');
            setCount(count + 1);
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