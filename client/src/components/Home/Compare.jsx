/**
 * Compare Component
 */

// Dependencies
import React, { useState } from 'react';
import { compareString } from './helper';

// Material UI
import TextField from '@mui/material/TextField';

function Compare() {
    // Input States
    const [string, setString] = useState('');
    const [hashed, setHashed] = useState('');

    const [matched, setMatched] = useState({ text: 'Matched Output here', matching: true });

    const handleMatched = ({ text, matching }) => {
        setMatched({ text, matching });
    }

    const handleString = (e) => {
        setString(e.target.value);
    }

    const handleHashed = (e) => {
        setHashed(e.target.value);
    }

    const handleCompareString = async (e) => {
        e.preventDefault();
        try {
            const matchedData = await compareString({string, hashed});
            handleMatched({text: `${matchedData.matched}`, matching: matchedData.matched});
            setString(matchedData.string);
            setHashed(matchedData.hashed);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <section className='w-full md:w-1/2 p-2 max-w-lg mx-auto'>
            <h2 className='text-4xl font-bold'>Compare</h2>
            <form
                className='flex flex-col gap-4 mt-4'
                onSubmit={handleCompareString}
                autoComplete='false'
            >
                <TextField
                    value={string}
                    onChange={handleString}
                    label="String"
                    variant="outlined"
                    required={true}
                />
                <TextField
                    value={hashed}
                    onChange={handleHashed}
                    label="Hashed"
                    variant="outlined"
                    required={true}
                />
                <button
                    type='submit'
                    className='w-full max-w-[200px] mx-auto cursor-pointer bg-primary px-2 py-1 rounded fond-semibold hover:text-white'
                >Compare</button>
            </form>
            <div className={`w-full font-semibold py-4 mt-4 bg-gray-300 rounded flex items-center justify-center ${matched.matching ? 'text-green-500' : 'text-red-500'}`}>
                {matched.text}
            </div>
        </section >
    )
}

export default Compare