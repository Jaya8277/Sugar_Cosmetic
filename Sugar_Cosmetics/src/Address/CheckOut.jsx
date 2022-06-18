import React, { useEffect, useState,useContext } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./CheckOut.module.css";
import { CartContext } from "../ContextApi/CartStorage";

function CheckOut() {
  const navigate = useNavigate();
   const { Cart, amount, formData } = useContext(CartContext);
  return (
    <>
      <div style={{ height: "105px" }}></div>
      <div id={styles.parent}>
        <div id={styles.main}>
          <h2 id={styles.h2}>Order Details</h2>
          <div id={styles.info}>
            <div id={styles.child}>
              <h5>Name:</h5>
              <h5 id={styles.h5}> {formData.name}</h5>
            </div>
            <div id={styles.child}>
              <h5>Address:</h5>
              <h5 id={styles.h5}>
                {formData.flatNumber},{formData.address},{formData.city},
                {formData.country} ,{formData.pincode}{" "}
              </h5>
            </div>
            <div id={styles.child}>
              <h5>Total Price :</h5>
              <h5 id={styles.h5}>{amount + 69} </h5>
            </div>
          </div>

          <div id={styles.div}>
            <h2>Thank You For Shopping!!</h2>
          </div>
          <div id={styles.path} onClick={() => navigate("/")}>
            <button>Continue Shopping</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default CheckOut;
