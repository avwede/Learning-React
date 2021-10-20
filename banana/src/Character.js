import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';

const center = {
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    backgroundColor: 'lightblue'
}

const Character = () => {
    const [characterCount, setCharacterCount] = useState(0);
    const [character, setCharacter] = useState('');

    useEffect(() => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
          
          fetch("https://reqres.in/api/users/?per_page=20", requestOptions)
            .then(response => response.json())
            .then(json => setCharacter(json))
            .catch(error => console.log('error', error));
    }, [characterCount])

    return (
        <div style={center}>
            <Button variant='outlined' onClick={() => setCharacterCount(characterCount + 1)}>CHOOSE YOUR CHARACTER</Button>
            <h1>{JSON.stringify(character)}</h1>
            {/* <img key={character.avatar} src={character.avatar} /> */}
        </div>
    );
};

export default Character;