/**
 * Navbar Component
 */

// Dependencies
import React from 'react';
import { Link } from 'react-router-dom';

// MUI
import GitHubIcon from '@mui/icons-material/GitHub';
import ShareIcon from '@mui/icons-material/Share';

function Navbar() {

  const handleGitHubClick = () => {
    window.open('https://github.com/kunalkeshan/bcryptjs-hasher', '_blank').focus()
  }

  const handleShare = async () => {
    try {
      await navigator.share({
        title: 'Bcrypt-Hasher',
        text: 'Hash and compare strings',
        url: window.location.href,
      });
    } catch (error) {
      console.log('Unable to share');
    }
  }

  return (
    <div className='w-full bg-primary p-2'>
      <div className='w-11/12 flex items-center justify-between md:w-4/5 mx-auto'>
        <Link className='text-2xl md:text-3xl font-bold uppercase' to='/'>Bcrypt-Hasher</Link>
        <div className='flex items-center gap-2'>
          <GitHubIcon className='cursor-pointer' onClick={handleGitHubClick} />
          <ShareIcon className='cursor-pointer' onClick={handleShare} />
        </div>
      </div>
    </div>
  )
}

export default Navbar;