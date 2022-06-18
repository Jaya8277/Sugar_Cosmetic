/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProductCard } from "./ProductCard";
import styles from "./Default.module.css";
import axios from "axios";
import { Navbar } from "../Navbar/Navbar";
export const SearchCard = () => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    axios
      .get(`https://sugarcosmetic201.herokuapp.com/products/search/${category}`)
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => err.message);
  }, [category]);

  const handleSort = (e) => {
    let data1 = products.sort((a, b) => {
      if (e.target.value === "asc") {
        return a.price - b.price;
      } else {
        return b.price - a.price;
      }
    });
    let newUpdatedData = data1.map((elem) => elem);
    setProducts(newUpdatedData);
  };

  return (
    <>
      <div style={{ height: "115px" }}></div>
      <Navbar />
      <div id={styles.infoContain}>
        <div id={styles.info}>
          <h1 id={styles.h1} style={{ marginRight: "10px" }}>
            {category}{" "}
          </h1>
          <p id={styles.items}>{products.length} items</p>
        </div>

        <div id={styles.sortData}>
          <div id={styles.opt}>
            <div id={styles.top}>
              <img
                className={styles.whislisticon}
                src="https://in.sugarcosmetics.com/desc-images/sortIcon.png"
              />

              <select id={styles.top} onChange={handleSort}>
                <option>sort</option>
                <option value="asc">Low to High</option>
                <option value="desc">High to Low</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div id={styles.contain}>
        {/* Iterate and print product cards that are of this category */}
        {products.map((data) => {
          return <ProductCard key={data._id} {...data} />;
        })}
      </div>
    </>
  );
};
