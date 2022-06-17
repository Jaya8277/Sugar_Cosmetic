import React from 'react'
import { Navbar } from '../Navbar/Navbar';
import { Carouselitem } from './Carousel/Carouselitem'
import style from './Home.module.css'
import { Product } from './Product/Product';
import { Shopnow } from './shopnow/Shopnow';
import * as Data from "./data/Data"
import Footer from '../Footer/Footer';

export const Home = () => {
 return (<>
   <Navbar/>
   <Carouselitem carousel={Data.carousel1} mt="121px"/>
   <div>
    <h2 className={style.box1}>REFER YOUR FRIENDS</h2>
    <img className={style.box2} src="https://d32baadbbpueqt.cloudfront.net/f53f2d67-ea43-4959-abca-eba6d87fd598.jpg" alt="" />
    <h2 className={style.box1}>AIR KISS POWDER LIPSTICK</h2>
   </div>
    <div >
      <center >
    <iframe 
      width="82%"
      height="450"
      src="//www.youtube.com/embed/VXMBlOqZJbI?rel=0&amp;autoplay=1"
      frameBorder="0"
      title="Embedded youtube"
    />
    </center>
  </div>
  <h3 className={style.box1}>BESTSELLERS</h3>
   <Shopnow shopnow={Data.shopnow1} chose="SHOP NOW"/>
   <h2 className={style.box1}>QUICK BEAUTY TIPS WITH SUGAR</h2>
   <Carouselitem carousel={Data.carousel2} mt="-0px" variant="dark"/>
   <h2 className={style.box1}>HOT DEALS</h2>
   <Product dummyProduct={Data.dummyProduct1}/>
   <h2 className={style.box1}>NEWLY LAUNCHED</h2>
   <Carouselitem carousel={Data.carousel3} variant="dark"/>
   <h2 className={style.box1}>SUPER SAVERS</h2>   
   <Shopnow shopnow={Data.shopnow2} chose="CHOOSE PRODUCTS"/>
   <h2 className={style.box1}>TOP PICKS OF THE WEEK</h2>
   <Product dummyProduct={Data.dummyProduct2}/>
   <h2 className={style.box1}>GIFTING</h2>
   <Shopnow shopnow={Data.shopnow3} chose="CHOOSE PRODUCTS"/>
   <h2 className={style.box1}>THIS OR THAT</h2>
   <div className={style.box3}>
    <img src="https://d32baadbbpueqt.cloudfront.net/87e180d8-98a5-44d4-88f2-4af24327cd7c.jpg" alt="" />
    <img src="https://d32baadbbpueqt.cloudfront.net/38a305ba-a808-4ade-ba72-fc55f5bc6183.jpg" alt="" />
   </div>
   <h2 className={style.box1}>SUGAR BEAUTY BLOG</h2>
   <Product dummyProduct={Data.dummyProduct3}/>
   <h2 className={style.box1}>SKINCARE BASICS</h2>
   <Shopnow shopnow={Data.shopnow4} chose="SELECT SHADE"/>
   <h2 className={style.box1}>EXPLORE</h2>  
   <Product dummyProduct={Data.dummyProduct4} count={4} />
 </>)
}

