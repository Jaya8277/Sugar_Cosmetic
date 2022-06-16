/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Navbar } from "../Navbar/Navbar";
export const DivCard = () => {
  const { _id } = useParams();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get(`https://sugarcosmetic201.herokuapp.com/products/get?_id=${_id}`)
      .then((res) => {
        setProducts(res.data[0]);
       
      })
      .catch((err) => err.message);
  }, [_id]);

  return (
    <>
      <div style={{ height: "115px" }}></div>
      <Navbar />
      <div style={{textAlign:"center"}}>
        {_id}
        <br />
        {products.name}
      </div>
    </>
  );
};
