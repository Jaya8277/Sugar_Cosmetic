import React from 'react'
import style from './Shopnow.module.css'

export const Shopnow = ({shopnow}) => {
  return (<>
  <div  className={style.boxes}>
         {shopnow.map(elem=>(
       <div>
            <img src={elem.img} alt=""/>
            <h6>{elem.title}</h6>
            <h6>₹{elem.price}</h6>
            <button>ShopNow</button>
        </div> 
))}
    </div>
   </>)}
