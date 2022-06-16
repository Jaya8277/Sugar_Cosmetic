import React from 'react';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { Navbar } from "../Navbar/Navbar";
import { CategoryCard } from '../components/CategoryCard';
import {DivCard} from "../components/DivCard"
import { Home } from '../Homepage/Home';
const MainRoutes = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:category" element={<CategoryCard />} />
        <Route path="/product/category/:_id" element={<DivCard/>} />
      </Routes>
    </>
  );
};
export { MainRoutes };