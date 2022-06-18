import React, { useState } from "react";
import { BsFillPersonFill } from "react-icons/bs";
import { MdFavorite } from "react-icons/md";
import { IoBagHandle } from "react-icons/io5";
import style from "./Navbar.module.css";
import { Link, useNavigate } from "react-router-dom";


export const Navbar = () => {
  const nav = useNavigate();
  const [value, setValue] = useState("");
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
            <button onClick={() => nav(`/products/search/${value}`)}>Search</button>
          </div>
          <div className={style.box4}>
            <BsFillPersonFill fontSize="20px" />
            <u>Login/Register</u>
          </div>
          <div className={style.box5}>
            <span><MdFavorite fontSize="20px" /></span>
            <span><Link style={{color: "black",textDecoration: "none"}} to="/Cart"><IoBagHandle fontSize="20px"/></Link><span style={{border:'1px solid gray',borderRadius:"50px",fontSize:"14px"}}>10</span></span>
            <span><img
              src="	https://in.sugarcosmetics.com/desc-images/discountIcon.svg"
              alt=""
            /></span>
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
    </>
  );
}
