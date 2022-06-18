import React, { useEffect, useContext, useState } from "react";
import style from "./Cart.module.css";
import { MdDelete } from "react-icons/md";
import { AiFillPlusCircle } from "react-icons/ai";
import { AiFillMinusCircle } from "react-icons/ai";
import { CartContext } from "../ContextApi/CartStorage";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MiniCart = ({ name, rating, id, image, price, _id }) => {
  const notify = () => toast("Product Deleted");
  const { Cart, setCart, amount, setAmount } = useContext(CartContext);
  const [count, setCount] = useState(1);
  useEffect(() => {
    if (count >= 1) {
      let objIndex = Cart.findIndex((obj) => obj._id === _id);
      Cart[objIndex].quantity = count;
      let ans = 0;
      Cart.map((item) => (ans += item.quantity * item.price));
      setAmount(ans);
    } else if (count <= 0) {
      const filtered = Cart.filter((item) => item._id !== _id);
      setCart(filtered);
      let ans = 0;
      Cart.map((item) => (ans += item.quantity * item.price));
      setAmount(ans);
    } else {
      remove();
    }
  }, [count]);

  const remove = () => {
    const filtered = Cart.filter((item) => item._id !== _id);
    setCart(filtered);
    let ans = 0;
    Cart.map((item) => (ans += item.quantity * item.price));
    setAmount(ans);
  };
  return (
    <div className={style.Box4}>
      <div className={style.Box5}>
        <img src={image} alt="" />
        <h6>{name}</h6>
      </div>
      <div className={style.Box6}>
        <p
          className={style.delete}
          onClick={() => {
            remove();
            notify()
          }}
        >
          <MdDelete size="20px" />
        </p>
        <p
          style={{ marginRight: "-5px", cursor: "pointer" }}
          onClick={() => {
            setCount(count - 1);
          }}
        >
          <AiFillMinusCircle size="23px" />
        </p>
        <p>{count}</p>
        <p
          style={{ marginLeft: "-5px", cursor: "pointer" }}
          onClick={() => {
            setCount(count + 1);
          }}
        >
          <AiFillPlusCircle size="23px" />
        </p>
        <p style={{ marginLeft: "10px" }}>
          1 x {price}.00 = {count * price}
        </p>
      </div>
    </div>
  );
};

export default MiniCart;
