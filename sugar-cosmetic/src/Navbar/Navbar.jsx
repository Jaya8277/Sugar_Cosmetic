import React from 'react'
import { BsFillPersonFill } from "react-icons/bs"
import { MdFavorite } from "react-icons/md"
import { IoBagHandle } from "react-icons/io5"
import style from "./Navbar.module.css"

export const Navbar = () => {
  return (<>
    <div className={style.mainContainer}>
      <div className={style.box1}>
        <div className={style.box2}>
          <img src="https://in.sugarcosmetics.com/desc-images/pride-logo-option.gif" alt="logo" />
        </div>
        <div className={style.box3}>
          <input type="text" placeholder='Try "Liquid Lipstick"' />
          <button>Search</button>
        </div>
        <div className={style.box4}>
          <BsFillPersonFill fontSize='20px' />
          <u>Login/Register</u>
        </div>
        <div className={style.box5}>
          <MdFavorite fontSize='20px' />
          <IoBagHandle fontSize='20px' />
          <img src="	https://in.sugarcosmetics.com/desc-images/discountIcon.svg" alt="" />
        </div>
      </div>
      <div className={style.container}>
        <div className={style.dropdown}>
          <h3 className={style.dropbtn}>MAKEUP</h3>
          <div className={style.content}>
            <p>LIPS</p>
            <p>FACE</p>
            <p>EYES</p>
          </div>
        </div>
        <div className={style.dropdown}>
          <h3 className={style.dropbtn}>BRUSHES</h3>
          <div className={style.content}>
            <p>FACE BRUSHES</p>
            <p>EYES BRUSHES</p>
          </div>
        </div>
        <div className={style.dropdown}>
          <h3 className={style.dropbtn}>SKINCARE</h3>
          <div className={style.content}>
            <p>MOISTURIZER</p>
            <p>SUNSCREEN</p>
            <p>SETTING MISTS</p>
            <p>COFFEE CULTURE RANGE</p>
            <p>SHEET MASK COMBO</p>
            <p>CITRUS GOT REAL RANGE</p>
            <p>AQUAHOLIC RANGE</p>
            <p>MASKS</p>
          </div>
        </div>
        <div className={style.dropdown}>
          <h3 className={style.dropbtn}>TRENDING</h3>
          <div className={style.content}>
            <p>SUGAR MERCH STATION</p>
            <p>MAKEUP KITS</p>
            <p>BESTSELLERS</p>
            <p>SUGAR SETS</p>
            <p>VALUE SETS</p>
          </div>
        </div>
        <div className={style.dropdown}>
          <h3 className={style.dropbtn}>BLOG</h3>
          <div className={style.content}>
            <p>FEATURED</p>
            <p> MAKEUP</p>
            <p> SKINCARE</p>
          </div>
        </div>
        <div className={style.dropdown}>
          <h3 className={style.dropbtn}>OFFERS</h3>
        </div>
        <div className={style.dropdown}>
          <h3 className={style.dropbtn}>STORES</h3>
        </div>
      </div>
    </div>
  </>)
}

