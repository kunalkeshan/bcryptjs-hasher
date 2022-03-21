/**
 * Not Found Page
 */

import React from 'react';
import NotFoundImage from '../assets/not-found.svg';
import { Navbar } from '../components/Navbar';

function NotFound() {
  return (
    <div className='w-full h-full'>
      <Navbar />
      <img src={NotFoundImage} alt='Not Found' />
    </div>
  )
}

export default NotFound;