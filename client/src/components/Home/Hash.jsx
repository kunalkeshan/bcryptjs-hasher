/**
 * Hash Component
 */

// Dependencies
import React, { useState } from 'react';
import { hashString } from './helper';

// Material UI
import TextField from '@mui/material/TextField';

function Hash() {
    // Input States
    const [string, setString] = useState('');
    const [salt, setSalt] = useState('');
    const [rounds, setRounds] = useState(10);

    const [hashed, setHashed] = useState('Hashed String here')

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
            const hashedData = await hashString({string, salt, rounds});
            setHashed(hashedData.hashed);
            setRounds(hashedData.rounds);
            setSalt(hashedData.salt);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <section className='w-full md:w-1/2 p-2 max-w-lg mx-auto'>
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
                    required={true}
                />
                <div className='flex gap-2 w-full py-1'>
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
                    className='w-full max-w-[200px] mx-auto cursor-pointer bg-primary px-2 py-1 rounded fond-semibold hover:text-white'
                >Hash</button>
            </form>
            <div className='w-full py-4 mt-4 font-semibold bg-gray-300 rounded flex items-center justify-center text-xs select-all'>
                {hashed}
            </div>
        </section>
    )
}

export default Hash