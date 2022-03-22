/**
 * Hash Component
 */

// Dependencies
import React, { useState } from 'react';
import backend from '../../utils/backend';

// Material UI
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

function Hash() {
    // Input States
    const [string, setString] = useState('');
    const [salt, setSalt] = useState('');
    const [rounds, setRounds] = useState(0);

    const [hashed, setHashed] = useState('Hashed String here')

    // Error States
    const [strError, setStrError] = useState(false);
    const [disabled, setDisabled] = useState(true);

    const handleString = (e) => {
        setString(e.target.value);
    }

    const handleSalt = (e) => {
        setSalt(e.target.value);
    }

    const handleRounds = (e) => {
        setRounds(e.target.value);
    }

    const handleHashString = async (e) => {
        e.preventDefault();
        try {
            
        } catch (error) {
            
        }
    }

    return (
        <section className='w-full'>
            <h2 className='text-4xl font-bold'>Hash</h2>
            <form
                autoComplete='false'
                className='flex flex-col gap-4 mt-4'
                onSubmit={handleHashString}
            >
                <TextField
                    value={string}
                    onChange={handleString}
                    label="String"
                    variant="outlined"
                />
                <div className='flex gap-2 w-full'>
                    <TextField
                        type='number'
                        value={rounds}
                        onChange={handleRounds}
                        label="Rounds"
                        variant='standard'
                        InputProps={{ inputProps: { min: 0, max: 12 } }}
                        fullWidth={true}
                    />
                    <TextField
                        type='text'
                        value={salt}
                        onChange={handleSalt}
                        label="Salt"
                        variant='standard'
                        InputProps={{ inputProps: { maxLength: 25 } }}
                        fullWidth={true}
                    />
                </div>
                <button
                    type='submit'
                    disabled={disabled}
                    className='bg-primary px-2 py-1 rounded fond-semibold hover:text-white'
                >Hash</button>
            </form>
            <div className='w-full py-4 mt-4 bg-gray-400 rounded flex items-center justify-center'>
                {hashed}
            </div>
        </section>
    )
}

export default Hash