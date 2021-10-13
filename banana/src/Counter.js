import React, { useState } from 'react';
import Button from '@mui/material/Button';

const Counter = () => {
    const [count, setCount] = useState(0);
    const [song, setSong] = useState();

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
            setSong("It's Peanut")
        }
        else if (count === 3) {
            setSong("It's Peanut Butter")
        }
        else if (count === 4) {
            setSong("It's Peanut Butter Jelly")
        }
        else if (count === 5) {
            setSong("It's Peanut Butter Jelly Time")
        }
    }
    
    return(
        <div> 
            <h1>
                {/* <p>Clicked {count} times</p> */}
                <Button variant='outlined' onClick={addToSong}>GO</Button>
                <p>{song}</p>
            </h1>
        </div>
    );
};

export default Counter;