import React, { useState, useContext } from "react";
import { BsFillPersonFill } from "react-icons/bs";
import { MdFavorite } from "react-icons/md";
import { IoBagHandle } from "react-icons/io5";
import style from "./Navbar.module.css";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "../ContextApi/CartStorage";
import { ToastContainer, toast } from "react-toastify";


export const Navbar = () => {
  const nav = useNavigate();
  const [value, setValue] = useState("");
    const [show, setShow] = useState(false);
  const { Cart } = useContext(CartContext);
  return (
    <>
      <div className={style.mainContainer}>
        <div className={style.box1}>
          <Link
            style={{
              color: "black",
              textDecoration: "none",
            }}
            to="/"
          >
            <div className={style.box2}>
              <img
                src="https://in.sugarcosmetics.com/desc-images/pride-logo-option.gif"
                alt="logo"
              />
            </div>
          </Link>
          <div className={style.box3}>
            <input
              type="text"
              value={value}
              placeholder='Try "Liquid Lipstick"'
              onChange={(e) => setValue(e.target.value)}
            />
            <button onClick={() => nav(`/products/search/${value}`)}>
              Search
            </button>
          </div>
          <div className={style.box4} onClick={() => setShow(true)}>
            <BsFillPersonFill fontSize="20px" />
            <u>Login/Register</u>
          </div>
          <div className={style.box5}>
            <span>
              <MdFavorite fontSize="20px" />
            </span>
            <span style={{ marginRight: "8px" }}>
              <Link
                style={{ color: "black", textDecoration: "none" }}
                to="/Cart"
              >
                <IoBagHandle fontSize="20px" />
              </Link>
              {Cart.length > 0 && (
                <span
                  style={{
                    border: "1px solid gray",
                    borderRadius: "50px",
                    fontSize: "14px",
                  }}
                >
                  {Cart.length}
                </span>
              )}
            </span>
            <span>
              <img
                src="	https://in.sugarcosmetics.com/desc-images/discountIcon.svg"
                alt=""
              />
            </span>
          </div>
        </div>
        <div className={style.container}>
          <div className={style.dropdown}>
            <h3 className={style.dropbtn}>
              <Link
                style={{
                  color: "black",
                  textDecoration: "none",
                }}
                to="/products/makeup"
              >
                MAKEUP
              </Link>
            </h3>
            <div className={style.contents}>
              <p>
                <Link
                  style={{
                    color: "black",
                    textDecoration: "none",
                  }}
                  to="/products/Lips"
                >
                  LIPS
                </Link>
              </p>
              <p>
                <Link
                  style={{
                    color: "black",
                    textDecoration: "none",
                  }}
                  to="/products/Face"
                >
                  FACE
                </Link>
              </p>
              <p>
                <Link
                  style={{
                    color: "black",
                    textDecoration: "none",
                  }}
                  to="/products/Face"
                >
                  EYES
                </Link>
              </p>
            </div>
          </div>
          <div className={style.dropdown}>
            <h3 className={style.dropbtn}>
              <Link
                style={{
                  color: "black",
                  textDecoration: "none",
                }}
                to="/products/brushes"
              >
                BRUSHES
              </Link>
            </h3>
            <div className={style.contents}>
              <p>
                <Link
                  style={{
                    color: "black",
                    textDecoration: "none",
                  }}
                  to="/products/brushes"
                >
                  FACE BRUSHES
                </Link>
              </p>
              <p>
                <Link
                  style={{
                    color: "black",
                    textDecoration: "none",
                  }}
                  to="/products/brushes"
                >
                  EYES BRUSHES
                </Link>
              </p>
            </div>
          </div>
          <div className={style.dropdown}>
            <h3 className={style.dropbtn}>
              <Link
                style={{
                  color: "black",
                  textDecoration: "none",
                }}
                to="/products/skincare"
              >
                SKINCARE
              </Link>
            </h3>
            <div className={style.contents}>
              <p>
                <Link
                  style={{
                    color: "black",
                    textDecoration: "none",
                  }}
                  to="/products/skincare"
                >
                  MOISTURIZER
                </Link>
              </p>
              <p>
                <Link
                  style={{
                    color: "black",
                    textDecoration: "none",
                  }}
                  to="/products/skincare"
                >
                  SUNSCREEN
                </Link>
              </p>
              <p>
                <Link
                  style={{
                    color: "black",
                    textDecoration: "none",
                  }}
                  to="/products/skincare"
                >
                  SETTING MISTS
                </Link>
              </p>
              <p>
                <Link
                  style={{
                    color: "black",
                    textDecoration: "none",
                  }}
                  to="/products/skincare"
                >
                  COFFEE CULTURE RANGE
                </Link>
              </p>
              <p>
                <Link
                  style={{
                    color: "black",
                    textDecoration: "none",
                  }}
                  to="/products/skincare"
                >
                  SHEET MASK COMBO
                </Link>
              </p>
              <p>
                <Link
                  style={{
                    color: "black",
                    textDecoration: "none",
                  }}
                  to="/products/skincare"
                >
                  CITRUS GOT REAL RANGE
                </Link>
              </p>
              <p>
                <Link
                  style={{
                    color: "black",
                    textDecoration: "none",
                  }}
                  to="/products/skincare"
                >
                  AQUAHOLIC RANGE
                </Link>
              </p>
              <p>
                <Link
                  style={{
                    color: "black",
                    textDecoration: "none",
                  }}
                  to="/products/skincare"
                >
                  MASKS
                </Link>
              </p>
            </div>
          </div>
          <div className={style.dropdown}>
            <h3 className={style.dropbtn}>
              <Link
                style={{
                  color: "black",
                  textDecoration: "none",
                }}
                to="/products/treanding"
              >
                TRENDING
              </Link>
            </h3>
            <div className={style.contents}>
              <p>
                <Link
                  style={{
                    color: "black",
                    textDecoration: "none",
                  }}
                  to="/products/merchStation"
                >
                  SUGAR MERCH STATION
                </Link>
              </p>
              <p>
                <Link
                  style={{
                    color: "black",
                    textDecoration: "none",
                  }}
                  to="/products/makeup"
                >
                  MAKEUP KITS
                </Link>
              </p>
              <p>
                <Link
                  style={{
                    color: "black",
                    textDecoration: "none",
                  }}
                  to="/products/treanding"
                >
                  BESTSELLERS
                </Link>
              </p>
              <p>
                <Link
                  style={{
                    color: "black",
                    textDecoration: "none",
                  }}
                  to="/products/offers"
                >
                  SUGAR SETS
                </Link>
              </p>
              <p>
                <Link
                  style={{
                    color: "black",
                    textDecoration: "none",
                  }}
                  to="/products/skincare"
                >
                  VALUE SETS
                </Link>
              </p>
            </div>
          </div>
          <div className={style.dropdown}>
            <h3 className={style.dropbtn}>
              <Link
                style={{
                  color: "black",
                  textDecoration: "none",
                }}
                to="/products/merchStation"
              >
                BLOG
              </Link>
            </h3>
            <div className={style.contents}>
              <p>
                <Link
                  style={{
                    color: "black",
                    textDecoration: "none",
                  }}
                  to="/products/brushes"
                >
                  FEATURED
                </Link>
              </p>
              <p>
                <Link
                  style={{
                    color: "black",
                    textDecoration: "none",
                  }}
                  to="/products/makeup"
                >
                  MAKEUP
                </Link>
              </p>
              <p>
                <Link
                  style={{
                    color: "black",
                    textDecoration: "none",
                  }}
                  to="/products/skincare"
                >
                  SKINCARE
                </Link>
              </p>
            </div>
          </div>
          <div className={style.dropdown}>
            <h3 className={style.dropbtn}>
              <Link
                style={{
                  color: "black",
                  textDecoration: "none",
                }}
                to="/products/offers"
              >
                OFFERS
              </Link>
            </h3>
          </div>
          <div className={style.dropdown}>
            <h3
              className={style.dropbtn}
              style={{
                color: "black",
                textDecoration: "none",
              }}
            >
              STORES
            </h3>
          </div>
        </div>
      </div>

      {show && (
        <>
          <div
            className={style.bgmodal}
            style={{ marginTop: "0px", zIndex: "99" }}
          >
            <div className={style.modalcontents}>
              <div id={style.slide}>
                <img
                  id={style.bg}
                  src="https://in.sugarcosmetics.com/Login_bg.svg"
                  alt=""
                />
              </div>

              <div id={style.form}>
                <p id={style.head}>
                  <span
                    style={{
                      marginRight: "50px",
                      cursor: "pointer",
                      color: "GrayText",
                    }}
                    onClick={() => setShow(false)}
                  >
                    <i class="fa-solid fa-xmark"></i>
                  </span>
                  Login/Sign Up Using Phone
                </p>
                <div id={style.numHold}>
                  <p id={style.code}>+91</p>
                  <input type="text" id={style.number} maxlength="1" />
                  <input type="text" id={style.number} maxlength="1" />
                  <input type="text" id={style.number} maxlength="1" />
                  <input type="text" id={style.number} maxlength="1" />
                  <input type="text" id={style.number} maxlength="1" />
                  <input type="text" id={style.number} maxlength="1" />
                  <input type="text" id={style.number} maxlength="1" />
                  <input type="text" id={style.number} maxlength="1" />
                  <input type="text" id={style.number} maxlength="1" />
                  <input type="text" id={style.number} maxlength="1" />
                  <button id={style.request}>Request OTP</button>
                </div>

                <p id={style.enter}>
                  Enter your phone number to request an OTP
                </p>
                <hr id={style.hr} />
                <p id={style.digit}>
                  Enter the 4 digit OTP received on your phone.
                </p>

                <div id={style.otpHold}>
                  <input type="text" id={style.otp} maxlength="1" />
                  <input type="text" id={style.otp} maxlength="1" />
                  <input type="text" id={style.otp} maxlength="1" />
                  <input type="text" id={style.otp} maxlength="1" />
                </div>
                <button id={style.verify}>Verify OTP</button>

                <div id={style.condition}>
                  <input type="checkbox" id={style.check} />
                  <p id={style.whatsapp}>Get Important Updates on Whatsapp. </p>
                  <a id={style.terms} href="">
                    Terms and Conditions
                  </a>
                </div>

                <div id={style.extra}>
                  <p id={style.p1}>
                    Registering for this site allows you to access your order
                    status and history. Just fill in the fields below, and we'll
                    get a new account set up for you in no time. We will only
                    ask you for information necessary to make the purchase
                    process faster and easier.
                  </p>

                  <div id={style.extraInfo}>
                    <p id={style.p2}>
                      By Signing up or logging in, you agree to our{" "}
                    </p>
                    <a href="" id={style.terms2}>
                      Terms and Conditions
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
};
