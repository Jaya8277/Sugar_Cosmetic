import React from 'react'
import style from './Cart.module.css'
import { MdDelete } from 'react-icons/md'
import { GrCart } from 'react-icons/gr'
import { AiFillPlusCircle } from 'react-icons/ai'
import { AiFillMinusCircle } from 'react-icons/ai'
import { BsFillCalculatorFill } from 'react-icons/bs'
import { MdShoppingBag } from 'react-icons/md'
import { GrDeliver } from 'react-icons/gr'
import { BsTagFill } from 'react-icons/bs'
import { TbFileDollar } from 'react-icons/tb'
import Footer from '../Footer/Footer'



export const Cart = () => {
  return (<>
    <div className={style.container}>
      <div className={style.main1}>
        <div className={style.Box2}>
          <div className={style.Box3}>
            <p style={{ marginRight: '5px' }}><GrCart size="20px" /></p>
            <p>Order Summary</p>
          </div>
          <p><u>Cart Total : Rs. 1598.00</u></p>
        </div>
        <div className={style.cart}>
          <div className={style.Box4}>
            <div className={style.Box5}>
              <img src="https://cdn.shopify.com/s/files/1/0906/2558/products/382512089-mettle-priming-balm-01.jpg?v=1648654861" alt="" />
              <h6>Mettle Priming Balm</h6>
            </div>
            <div className={style.Box6}>
              <p className={style.delete}><MdDelete size="20px" /></p>
              <p style={{ marginRight: "-5px", cursor: 'pointer' }}><AiFillMinusCircle size="23px" /></p>
              <p>0</p>
              <p style={{ marginLeft: "-5px", cursor: 'pointer' }}><AiFillPlusCircle size="23px" /></p>
              <p style={{ marginLeft: "10px" }}>1 x {"2011"}.00 = {"2011"}</p>
            </div>
          </div>
          <div className={style.Box4}>
            <div className={style.Box5}>
              <img src="https://cdn.shopify.com/s/files/1/0906/2558/products/382512089-mettle-priming-balm-01.jpg?v=1648654861" alt="" />
              <h6>Mettle Priming Balm</h6>
            </div>
            <div className={style.Box6}>
              <p className={style.delete}><MdDelete size="20px" /></p>
              <p style={{ marginRight: "-5px", cursor: 'pointer' }}><AiFillMinusCircle size="23px" /></p>
              <p>0</p>
              <p style={{ marginLeft: "-5px", cursor: 'pointer' }}><AiFillPlusCircle size="23px" /></p>
              <p style={{ marginLeft: "10px" }}>1 x {"2011"}.00 = {"2011"}</p>
            </div>
          </div>
          <div className={style.Box4}>
            <div className={style.Box5}>
              <img src="https://cdn.shopify.com/s/files/1/0906/2558/products/382512089-mettle-priming-balm-01.jpg?v=1648654861" alt="" />
              <h6>Mettle Priming Balm</h6>
            </div>
            <div className={style.Box6}>
              <p className={style.delete}><MdDelete size="20px" /></p>
              <p style={{ marginRight: "-5px", cursor: 'pointer' }}><AiFillMinusCircle size="23px" /></p>
              <p>0</p>
              <p style={{ marginLeft: "-5px", cursor: 'pointer' }}><AiFillPlusCircle size="23px" /></p>
              <p style={{ marginLeft: "10px" }}>1 x {"2011"}.00 = {"2011"}</p>
            </div>
          </div>
          <div className={style.Box4}>
            <div className={style.Box5}>
              <img src="https://cdn.shopify.com/s/files/1/0906/2558/products/382512089-mettle-priming-balm-01.jpg?v=1648654861" alt="" />
              <h6>Mettle Priming Balm</h6>
            </div>
            <div className={style.Box6}>
              <p className={style.delete}><MdDelete size="20px" /></p>
              <p style={{ marginRight: "-5px", cursor: 'pointer' }}><AiFillMinusCircle size="23px" /></p>
              <p>0</p>
              <p style={{ marginLeft: "-5px", cursor: 'pointer' }}><AiFillPlusCircle size="23px" /></p>
              <p style={{ marginLeft: "10px" }}>1 x {"2011"}.00 = {"2011"}</p>
            </div>
          </div>
          <div className={style.Box4}>
            <div className={style.Box5}>
              <img src="https://cdn.shopify.com/s/files/1/0906/2558/products/382512089-mettle-priming-balm-01.jpg?v=1648654861" alt="" />
              <h6>Mettle Priming Balm</h6>
            </div>
            <div className={style.Box6}>
              <p className={style.delete}><MdDelete size="20px" /></p>
              <p style={{ marginRight: "-5px", cursor: 'pointer' }}><AiFillMinusCircle size="23px" /></p>
              <p>0</p>
              <p style={{ marginLeft: "-5px", cursor: 'pointer' }}><AiFillPlusCircle size="23px" /></p>
              <p style={{ marginLeft: "10px" }}>1 x {"2011"}.00 = {"2011"}</p>
            </div>
          </div>
        </div>
      </div>

      {/* second part */}

      <div className={style.main2}>
        <div className={style.Box3}>
          <p style={{ marginRight: '8px' }}><BsFillCalculatorFill size="20px" /></p>
          <p><u>Price Details</u></p>
        </div>
        <div className={style.Box8}>
          <div className={style.Box3}>
            <div className={style.Box3} style={{marginRight:'71px'}}>
              <p style={{ marginRight: "5px" }}><MdShoppingBag /></p>
              <p>Cart Sub Total:</p>
            </div>
             <p>₹ 1099.00</p>
            </div>
          <div className={style.Box3}>
            <div className={style.Box3} style={{marginRight:'73px'}}>
              <p style={{ marginRight: "5px" }}><GrDeliver /></p>
              <p>Shipping Cost:</p>
            </div>
             <p>₹ 1099.00</p>
            </div>
          <div className={style.Box3}>
            <div className={style.Box3} style={{marginRight:'50px'}}>
              <p style={{ marginRight: "5px" }}><BsTagFill /></p>
              <p>Discount Applied:</p>
            </div>
             <p>₹ 1099.00</p>
            </div>
          <div className={style.Box3}>
            <div className={style.Box3} style={{marginRight:'50px'}}>
              <p style={{ marginRight: "5px" }}><TbFileDollar /></p>
              <p>Amount Payable:</p>
            </div>
             <p><b>₹ 1099.00</b></p>
            </div>
        </div>
        <div className={style.button}>
          <button>Continue Shopping</button>
          <button>Delivery Information</button>
        </div>
      </div>
    </div>
    <Footer/>
  </>)
}
