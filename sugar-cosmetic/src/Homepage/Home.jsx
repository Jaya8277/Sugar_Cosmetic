import React from 'react'
import { Navbar } from '../Navbar/Navbar';
import { Carouselitem } from './Carousel/Carouselitem'
import style from './Home.module.css'
import { Shopnow } from './shopnow/Shopnow';
import Footer from '../Footer/Footer';
export const Home = () => {
  const carousel = ["https://d32baadbbpueqt.cloudfront.net/Homepage/70252059-0efb-40b0-b659-6d27afafa0ee.jpg","https://d32baadbbpueqt.cloudfront.net/Homepage/7d151892-4d17-466e-8a06-743392796264.jpg","https://d32baadbbpueqt.cloudfront.net/Homepage/ae9f9040-e1f1-4c94-bd8d-c05be3ce5fe2.gif","https://d32baadbbpueqt.cloudfront.net/549c6869-246f-4dba-8cde-7a6798f866ec.jpg","https://d32baadbbpueqt.cloudfront.net/Homepage/9f159288-063a-4ca4-926a-7fd43c13d370.jpg","https://d32baadbbpueqt.cloudfront.net/fc27be93-0882-45d7-aef9-0ad461636eae.jpg","https://d32baadbbpueqt.cloudfront.net/Homepage/85bc9b9b-d8b3-4fa1-a1b0-a77ca9428664"]
  const carousel2= ["https://d32baadbbpueqt.cloudfront.net/Homepage/11b811a4-2faa-4985-98f0-01af9f2df943.jpg","https://d32baadbbpueqt.cloudfront.net/Homepage/fb9d5eba-b79a-4e38-b01d-fb6cab221874.jpg","https://d32baadbbpueqt.cloudfront.net/Homepage/2cf0052d-e531-4f6e-9b00-e31f3642f0b3.jpg"]
  const shopnow=[
    {
      "img":"https://cdn.shopify.com/s/files/1/0906/2558/products/01_59809bd6-49ef-4c6b-b262-47002bedc963.jpg?v=1639755559",
      "price":1999,
      "title":"Blend The Rules Eyeshadow Palette"
    },
    {
      "img":"https://cdn.shopify.com/s/files/1/0906/2558/products/1_e9355d54-6ddb-4aa4-bdfc-176a676db886.jpg?v=1639983555",
      "price":799,
      "title":"Base Of Glory Pore Minimizing Primer"
    },
    {
      "img":"https://cdn.shopify.com/s/files/1/0906/2558/products/1_51afaa84-af89-42b5-bdb8-a51b01257bc0.jpg?v=1639582607",
      "price":999,
      "title":"Contour De Force Face Glory Palette"
    },
    {
      "img":"https://cdn.shopify.com/s/files/1/0906/2558/products/1_529c20ee-c872-4029-9702-8580d7b9a66f.jpg?v=1640178644",
      "price":899,
      "title":"Ace Of Face Glory Foundation Stick"
    }
  ]
  return (<>
   <Navbar/>
   <Carouselitem carousel={carousel}/>
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
   <Shopnow shopnow={shopnow}/>
   <h2 className={style.box1}>QUICK BEAUTY TIPS WITH SUGAR</h2>
   <Carouselitem carousel={carousel}/>

   <Footer/>
 </>)
}

