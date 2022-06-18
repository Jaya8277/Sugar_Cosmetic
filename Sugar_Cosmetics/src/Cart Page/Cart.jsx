import React, { useContext, useEffect } from "react";
import style from "./Cart.module.css";
import { GrCart } from "react-icons/gr";
import { BsFillCalculatorFill } from "react-icons/bs";
import { MdShoppingBag } from "react-icons/md";
import { GrDeliver } from "react-icons/gr";
import { BsTagFill } from "react-icons/bs";
import { TbFileDollar } from "react-icons/tb";
import { CartContext } from "../ContextApi/CartStorage";
import MiniCart from "./MiniCart";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export const Cart = () => {
  const { Cart, amount } = useContext(CartContext);
  const navigate = useNavigate();
  return (
    <>
      <div className={style.container}>
        <div className={style.main1}>
          <div className={style.Box2}>
            <div className={style.Box3}>
              <p style={{ marginRight: "5px" }}>
                <GrCart size="20px" />
              </p>
              <p>Order Summary</p>
            </div>
            <p>
              <u>Cart Total : Rs. {amount}</u>
            </p>
          </div>
          <div className={style.cart}>
            {Cart.map((data) => {
              return <MiniCart key={data._id} {...data} />;
            })}
          </div>
        </div>

        {/* second part */}

        <div className={style.main2}>
          <div className={style.Box3}>
            <p style={{ marginRight: "8px" }}>
              <BsFillCalculatorFill size="20px" />
            </p>
            <p>
              <u>Price Details</u>
            </p>
          </div>
          <div className={style.Box8}>
            <div className={style.Box3}>
              <div className={style.Box3} style={{ marginRight: "71px" }}>
                <p style={{ marginRight: "5px" }}>
                  <MdShoppingBag />
                </p>
                <p>Cart Sub Total:</p>
              </div>
              <p>₹ {amount}.00</p>
            </div>
            <div className={style.Box3}>
              <div className={style.Box3} style={{ marginRight: "73px" }}>
                <p style={{ marginRight: "5px" }}>
                  <GrDeliver />
                </p>
                <p>Shipping Cost:</p>
              </div>
              <p>₹ 69.00</p>
            </div>
            <div className={style.Box3}>
              <div className={style.Box3} style={{ marginRight: "50px" }}>
                <p style={{ marginRight: "5px" }}>
                  <BsTagFill />
                </p>
                <p>Discount Applied:</p>
              </div>
              <p>₹ 00.00</p>
            </div>
            <div className={style.Box3}>
              <div className={style.Box3} style={{ marginRight: "50px" }}>
                <p style={{ marginRight: "5px" }}>
                  <TbFileDollar />
                </p>
                <p>Amount Payable:</p>
              </div>
              <p>
                <b>₹ {amount + 69}.00</b>
              </p>
            </div>
          </div>
          <div className={style.button}>
            <button
              onClick={() => {
                navigate("/");
              }}
            >
              Continue Shopping
            </button>
            <button
              onClick={() => {
                navigate("/products/Add_Address");
              }}
            >
              Delivery Information
            </button>
          </div>
        </div>
      </div>
      {/* <Footer/> */}
    </>
  );
};
