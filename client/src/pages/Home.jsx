/**
 * Home Page
 */

// Dependencies
import React from 'react';
import { Footer } from '../components/Footer';
import Compare from '../components/Home/Compare';
import Hash from '../components/Home/Hash';
import { Navbar } from '../components/Navbar';

function Home() {
  return (
    <div className='w-full min-h-full flex flex-col'>
      <Navbar />
      <main className='w-full h-full flex-1 flex flex-wrap items-center justify-center p-4'>
        <Hash />
        <Compare />
      </main>
      <Footer />
    </div>
  )
}

export default Home;