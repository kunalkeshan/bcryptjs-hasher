/**
 * Application Routes
 */

// Dependencies
import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

// Components
import Skeleton from '../components/Reusable/Skeleton';

// Pages
const Home = lazy(() => import('../pages/Home'));
const NotFound = lazy(() => import('../pages/NotFound'));


function AppRoutes() {
  return (
    <>
      <Routes>
        <Route path='/' exact element={<Suspense fallback={<Skeleton />}><Home /></Suspense>} />
        <Route path='*' element={<Suspense fallback={<Skeleton />}><NotFound /></Suspense>} />
      </Routes>
    </>
  )
}

export default AppRoutes;