import React from 'react';
import Header from './Header/Header';
import HomePage from './Home/HomePage/Home';
import Footer from './Footer/Footer';
import { Outlet } from 'react-router';

function LandingPages() {
  return (
    <div >
      <Header />
      <HomePage />
      <Outlet />
      <Footer />
    </div>
  );
}

export default LandingPages;
