import React from "react";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Navbar } from "../Navbar/Navbar";
import { CategoryCard } from "../components/CategoryCard";
import { DivCard } from "../components/DivCard";
import { Home } from "../Homepage/Home";
import { Cart } from "../Cart Page/Cart";
import { SearchCard } from "../components/SearchCard";
import Footer from "../Footer/Footer";
import Delivery from "../Address/Delivery";
import PaymentDelivery from "../Address/PaymentDelivery";
import CheckOut from "../Address/CheckOut";
import Payment from "../Pay/Payment";
const MainRoutes = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/products/:category" element={<CategoryCard />} />
        <Route path="/product/category/:_id" element={<DivCard />} />
        <Route path="/products/search/:category" element={<SearchCard />} />
        <Route path="/products/Add_Address" element={<Delivery />} />
        <Route path="/products/addresss" element={<PaymentDelivery />} />
        <Route path="/products/payment" element={<Payment />} />
        <Route path="/products/CheckoutPage" element={<CheckOut/>} />
      </Routes>
      <Footer />
    </>
  );
};
export { MainRoutes };
