/**
 * Footer Component
 */

// Dependencies
import React from 'react';

function Footer() {
    const CURRENT_YEAR = new Date().getFullYear();
    return (
        <footer className='w-full text-center text-md'>
            &#169; 2022 - {CURRENT_YEAR},
            &nbsp;<a href="https://kunalkeshan.dev" className='underline hover:text-primary transition-all duration-200'>Kunal Keshan</a>
        </footer>
    )
}

export default Footer;