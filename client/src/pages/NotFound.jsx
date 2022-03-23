/**
 * Not Found Page
 */

// Dependencies
import React from 'react';
import { Link } from 'react-router-dom';
import NotFoundImage from '../assets/not-found.svg';
import { Footer } from '../components/Footer';
import { Navbar } from '../components/Navbar';

function NotFound() {
  return (
    <div className='w-full min-h-full flex flex-col'>
      <Navbar />
      <section className='flex flex-wrap flex-1 p-4 w-fit mx-auto sm:items-center sm:justify-center gap-4 md:gap-10'>
        <img src={NotFoundImage} alt='Not Found' className='w-72 mx-auto sm:w-80 md:w-96' />
        <div className='flex flex-col gap-2 mx-auto'>
          <h2 className='text-4xl'>Oops! Not Found!</h2>
          <p className='text-xl'>The page you are looking for does not exist.</p>
          <Link to='/' className='block bg-primary py-1 px-2 rounded w-fit bg-opacity-80 hover:text-white hover:bg-opacity-100 transition-all duration-200'>Home</Link>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default NotFound;