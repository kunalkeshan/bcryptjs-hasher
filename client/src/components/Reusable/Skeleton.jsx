/**
 * Skeleton component
 */

// Dependencies
import React from 'react'

function Skeleton() {
  return (
    <div className='w-full h-screen flex flex-col items-center justify-center'>

      <nav className='bg-gray-800 bg-opacity-40 w-full h-20 animate-pulse p-2'>
        <div className='w-11/12 h-full flex items-center justify-between md:w-4/5 lg:w-3/5 mx-auto'>
          <div className='bg-gray-800 bg-opacity-80 w-1/2 h-3/4 rounded'></div>
          <div className='flex w-full h-full items-center justify-end gap-2'>
            {
              [1, 2].map((item) => (
                <div key={item} className='w-10 h-10 bg-gray-800 bg-opacity-80 rounded-full'></div>
              ))
            }
          </div>
        </div>
      </nav>

      <main className='w-full h-full flex-1 flex flex-wrap items-center justify-center p-2 gap-2'>
        {
          [1, 2].map((item) => (
            <div key={item} className='w-full md:w-1/2 p-2 max-w-lg mx-auto h-1/3 rounded bg-gray-800 bg-opacity-40 animate-pulse'>

            </div>
          ))
        }
      </main>

      <footer className='bg-gray-800 h-10 bg-opacity-40 w-full flex items-center justify-center p-2 animate-pulse'>
        <div className='w-3/4 h-full bg-gray-800 bg-opacity-80 rounded'></div>
      </footer>
    </div>
  )
}

export default Skeleton