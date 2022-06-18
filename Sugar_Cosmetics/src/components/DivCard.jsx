/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Navbar } from "../Navbar/Navbar";
import "./Product.css";
import { AiOutlineHeart } from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BiMessageRoundedDetail } from "react-icons/bi";
import { AiFillTwitterCircle } from "react-icons/ai";
import { ImLinkedin2 } from "react-icons/im";
import { CartContext } from "../ContextApi/CartStorage";
import styles from "./Products.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export const DivCard = () => {
  const notify = () => toast("product Add sucussfully");
  const { _id } = useParams();
  const [products, setProducts] = useState([]);
  const { Cart, setCart } = useContext(CartContext);
  useEffect(() => {
    axios
      .get(`https://sugarcosmetic201.herokuapp.com/products/get?_id=${_id}`)
      .then((res) => {
        setProducts(res.data[0]);
      })
      .catch((err) => err.message);
  }, [_id]);

  const [review, setReview] = useState(0);
  //  const { image, rating, price, name, id, catg } = item;
  useEffect(() => {
    let rand = Math.floor(Math.random() * 1000);
    setReview(rand);
  }, []);

  const AddToCart = () => {
    const cart = {
      ...products,
      quantity: 1,
    };
    setCart([cart, ...Cart]);
    notify();
  };

  return (
    <>
      <div style={{ height: "115px" }}></div>
      <Navbar />
      <div>
        <div id="hometitle">
          <img
            src="https://in.sugarcosmetics.com/desc-images/breadcrumb_home.svg"
            alt="koko"
          />
          <p style={{ marginTop: "15px" }}>
            / Blend trend makeup brush/Eyes brushes/{products.name}
          </p>
        </div>

        {/* ---------------------------------------------- */}
        <div className="bigdiv">
          <div className="promain">
            <div id="proimgdiv" style={{ marginLeft: "30px" }}>
              <img src={products.image} alt="j" className="slideItem" />
            </div>

            <div id="prodetdiv">
              <h1 id="prname">{products.name}</h1>
              <div
                id={styles.ratingHold}
                style={{
                  justifyContent: "start",
                  marginTop: "15px",
                }}
              >
                <img
                  style={{ marginTop: "5px" }}
                  id={styles.star}
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuW-ijbF7ZlfvwARw20McEOaUkKA_HdCK7vA&usqp=CAU"
                  alt=""
                />
                <p id={styles.rating} style={{ marginLeft: "-5px" }}>
                  {products.rating} ({review}){" "}
                </p>
              </div>
              <p style={{ marginTop: "-10px", marginLeft: "30px" }}>
                RS .{products.price}
              </p>
              <button
                id="addbtn"
                onClick={() => {
                  AddToCart();
                }}
              >
                Add to Cart{" "}
              </button>
              <br />{" "}
              <a href="wishlist.html">
                <AiOutlineHeart />
                Save to wishlist
              </a>
              <div className="flex">
                <p className="share">Share with friends : </p>
                <BsWhatsapp className="b a" />
                <BsFacebook className="b c" />
                <AiFillTwitterCircle className="b d" />
                <BiMessageRoundedDetail className="b e" />
                <ImLinkedin2 className="b f" />
              </div>
            </div>
          </div>
          <img
            src="https://in.sugarcosmetics.com/productbanner.svg"
            alt="koko"
          />
          <br />
          <div className="check">
            <label>Check Estimated Delivery Date For your Location :</label>
            <input type="text" placeholder="Enter Pincode" id="pin" />
            <button id="pinbtn">Check Now</button>
          </div>
          <br />
          <div className="offer">
            <h4>Available Offers!!</h4>
            <p>
              – Get a Matte Attack <br />
              Transferproof Lipstick
              <br /> FREE on a spend of Rs. 799
              <br />
              <span>Know More</span>
              – Get a Aquaholic Instant Pore Cleansing Mask, <br /> Contour De
              Force Mini Blush <br />
              and a Pouch on a spend of Rs. 998 <br />
              <span>Know More</span> <br />– Grab a complimentary product worth
              Rs.499 on a spend of Rs.699
            </p>
          </div>

          <div id="desbtn">
            <button>Description</button>
            <button>How to use</button>
            <button>Similar Products</button>
            <button>Reviews</button>
          </div>
          <div className="bottom">
            <p>Achieve flawless skin – No filter necessary!</p> <br />
            <p>
              Perfect for eyeshadow application and blending, SUGAR Blend Trend
              Eyeshadow Brush Round XL 043 softens harsh lines and applies the
              eye shadow transition colour with ease. This dome shaped, fluffy
              eye shadow brush with 100% cruelty-free bristles picks up powder
              or cream shadow with ease and rounded brush shape expertly blends
              and diffuses shadow into the crease. This brush can also be used
              contouring, shading and highlighting and is perfect for creating a
              smokey eye look.
            </p>
            <p>About the Range:</p>
            <p>
              SUGARs professional range of Blend Trend Makeup Brushes is
              designed for precision results and crafted with the best quality,
              velvety-soft synthetic bristles. From applying foundation to
              eyeshadow and cream blushes to powder makeup products, these
              exquisite makeup brushes do it all with finesse and help define
              your features beautifully, build coverage, accentuate beauty looks
              with ease whilst taking your makeup artistry to the next level.
            </p>
            <h4>Features:</h4>
            <ul>
              <li>
                This rounded, dense eyeshadow brush is ideal for blending and
                diffusing out shadow at the crease
              </li>
              <li>
                This brushs shape is perfect for a targeted eyeshadow
                application ensuring there are no harsh edges
              </li>
              <li>
                It effortlessly diffuses shadow for a beautifully blended crease
                and picks up powder or cream eyeshadow with ease
              </li>
              <li>
                SUGAR Blend Trend Brushes feature high quality synthetic, 100%
                cruelty-free bristles that ensure precise application and
                diffusion of product
              </li>
              <li>
                Easy to clean and durable, these makeup brushes are made with
                high-quality aluminum ferrules and premium wooden handles
              </li>
            </ul>
          </div>

          <div className="netWa">
            Net Weight: <span>7gms</span> <br />
            Country of Origin: <span>Made in PRC | Formulated In Korea</span>
            <br />
            Company Name: <span> SUGAR Cosmetics LLC</span>
            <br />
            Company Address:{" "}
            <span> 8 The Green, Suite A, Dover, DE 19901.</span>
            <br />
          </div>
        </div>

        <div
          style={{
            marginBottom: "50px",
          }}
        >
          <h2 style={{ textAlign: "center", marginTop: "10px" }}>
            Watch Video
          </h2>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "-35px",
            }}
          >
            <iframe
              width="620"
              height="365"
              src="https://www.youtube.com/embed/_TTJmiTiiOQ"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};
