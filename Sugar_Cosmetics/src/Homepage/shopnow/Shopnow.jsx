import React from 'react'
import style from './Shopnow.module.css'

export const Shopnow = ({shopnow,chose}) => {
  return (<>
  <div  className={style.boxes}>
         {shopnow.map(elem=>(
       <div>
            <img src={elem.img} alt=""/>
            <h6 style={{padding:"0px 12px 0px 12px"}}>{elem.title}</h6>
            <div style={{display:"flex",justifyContent:"space-evenly"}}>
            {elem.strikeprice && <s style={{color:"red"}}>₹{elem.strikeprice}</s>}
            <h6>₹{elem.price}</h6>
            </div>
            <button>{chose}</button>
        </div> 
))}
    </div>
   </>)}
