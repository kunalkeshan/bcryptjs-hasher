/**
 * Compare Component
 */

// Dependencies
import React, { useState } from 'react';

// Material UI
import TextField from '@mui/material/TextField';

function Compare() {
    // Input States
    const [string, setString] = useState('');
    const [hashed, setHashed] = useState('');

    const [matched, setMatched] = useState({ text: 'Matched Output here', matching: true });

    // Error States
    const [strError, setStrError] = useState(false);
    const [hashError, setHashError] = useState(false);
    const [disabled, setDisabled] = useState(true);

    const handleMatched = ({ text, matching }) => {
        setMatched({ text, matching });
    }

    const handleString = (e) => {
        setString(e.target.value);
    }

    const handleHashed = (e) => {
        setHashed(e.target.value);
    }

    return (
        <section className='w-full'>
            <h2 className='text-4xl font-bold'>Compare</h2>
            <form
                className='flex flex-col gap-4 mt-4'
            >
                <TextField
                    error={strError}
                    value={string}
                    onChange={handleString}
                    label="String"
                    variant="outlined"
                    helperText={`${strError ? 'String is required' : ''}`}
                />
                <TextField
                    error={hashError}
                    value={hashed}
                    onChange={handleHashed}
                    label="Hashed"
                    variant="outlined"
                    helperText={`${hashError ? 'Hashed is required' : ''}`}
                />
                <button
                    type='submit'
                    disabled={disabled}
                    className='bg-primary px-2 py-1 rounded fond-semibold hover:text-white'
                >Compare</button>
            </form>
            <div className='w-full py-4 mt-4 bg-gray-400 rounded flex items-center justify-center'>
                {matched.text}
            </div>
        </section >
    )
}

export default Compare