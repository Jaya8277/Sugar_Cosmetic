import React from 'react';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { Navbar } from "../Navbar/Navbar";
import { CategoryCard } from '../components/CategoryCard';
import { Home } from '../Homepage/Home';
const MainRoutes = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products/:category' element={<CategoryCard />} />
      </Routes>
    </>
  );
};
export { MainRoutes };
