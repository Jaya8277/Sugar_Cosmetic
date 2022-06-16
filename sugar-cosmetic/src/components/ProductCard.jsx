/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable jsx-a11y/alt-text */
import { Flex } from './Styled';
import React, { useEffect, useState } from "react";
import styles from "./Products.module.css";
export const ProductCard = ({  name,rating, id, image, price }) => {
  const [review, setReview] = useState(0);
 
    useEffect(() => {
      let rand = Math.floor(Math.random() * 1000);
      setReview(rand);
    }, []);
  return (
    <>
      <Flex data-testid="single-product-item" key={id}>
        <div id={styles.unit}>
          <img id={styles.img} src={image} />
          <p id={styles.name}>{name}</p>
          <p id={styles.price}>RS .{price}</p>

          <div id={styles.ratingHold}>
            <img
              id={styles.star}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuW-ijbF7ZlfvwARw20McEOaUkKA_HdCK7vA&usqp=CAU"
              alt=""
            />
            <p id={styles.rating}>
              {rating} ({review}){" "}
            </p>
          </div>

          <div id={styles.btnHold}>
          
            <button>
           
              <img
                className={styles.whislisticon}
                src="https://cdn3.iconfinder.com/data/icons/marketing-e-commerce/128/icons_-_marketing-41-512.png"
              />
            </button>
            <button id={styles.btn}>Add to Cart</button>
          </div>
        </div>
      </Flex>
    </>
  );
};


