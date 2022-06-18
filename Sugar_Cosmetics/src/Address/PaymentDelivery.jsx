/* eslint-disable jsx-a11y/alt-text */
import React, { useContext } from "react";
import styles from "./paydel.module.css";
import { CartContext } from "../ContextApi/CartStorage";
import { useNavigate } from "react-router-dom";
import MiniCart from "../Cart Page/MiniCart";
import style from "../Cart Page/Cart.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const PaymentDelivery = () => {
  const navigate = useNavigate();
  const { Cart, amount, formData } = useContext(CartContext);
  const notify = () => toast("Proceeding to Payment");
  return (
    <>
      <div style={{ height: "155px" }}></div>

      <div className={styles.main}>
        <div style={{ display: "block" }}>
          <div style={{ height: "230px" }}>
            <div style={{ height: "35px", paddingTop: "11px" }}>
              <img
                src="	https://in.sugarcosmetics.com/desc-images/PriceDetails.svg"
                width="20px"
                height="20px"
              ></img>
              <span style={{ marginLeft: "10px" }}>Price Details</span>
            </div>

            <div style={{ height: "30px", paddingTop: "5px" }}>
              <img
                src="	https://in.sugarcosmetics.com/desc-images/CartSubtotal.svg"
                width="15px"
                height="15px"
              />
              <span style={{ marginLeft: "10px" }}>Cart Sub Total: </span>
              <span style={{ marginLeft: "80px" }}>₹ {amount}</span>
            </div>
            <div style={{ height: "30px", paddingTop: "5px" }}>
              <img
                src="https://in.sugarcosmetics.com/desc-images/Shipping_Cost.svg"
                width="15px"
                height="15px"
              />
              <span style={{ marginLeft: "10px" }}>Shipping Cost: </span>
              <span style={{ marginLeft: "80px" }}>₹ 69.0</span>
            </div>
            <div style={{ height: "30px", paddingTop: "5px" }}>
              <img
                src="https://in.sugarcosmetics.com/desc-images/Discount.svg"
                width="15px"
                height="15px"
              />
              <span style={{ marginLeft: "10px", justifyContent: "start" }}>
                Discount Applied:{" "}
              </span>
              <span style={{ marginLeft: "60px" }}>₹ 00.0</span>
            </div>
            <div style={{ height: "30px", paddingTop: "5px" }}>
              <img
                src="https://in.sugarcosmetics.com/desc-images/AmountPayable.svg"
                width="15px"
                height="15px"
              />
              <span style={{ marginLeft: "10px" }}>Amount Payable: </span>
              <span style={{ marginLeft: "65px" }}>₹ {amount + 69} </span>
            </div>
            <div>
              <span>Including ₹ 200.69 in taxes</span>
            </div>
            <div style={{ marginTop: "20px", marginBottom: "20px" }}>
              <img
                src="https://in.sugarcosmetics.com/desc-images/shopping_cart.svg"
                width="20px"
                height="20px"
                alt="cartLogo"
              />
              <span style={{ marginLeft: "10px" }}>Order Summary</span>
            </div>
          </div>
          <div
            style={{
              height: "100%",
              marginTop: "30px",
              width: "120%",
            }}
          >
            {/* Appending the cart products here */}
            <div
              className={style.cart}
              style={{ height: "300px", marginTop: "-5%" }}
            >
              {Cart.map((data) => {
                return <MiniCart key={data._id} {...data} />;
              })}
            </div>
          </div>
        </div>

        <div>
          {/* adding delivery deatils  down */}
          <div
            style={{ marginTop: "10px", marginBottom: "10px", display: "flex" }}
          >
            <img
              src="https://in.sugarcosmetics.com/desc-images/CustomerInformation.svg"
              width="20px"
              height="20px"
              alt="cartLogo"
            />
            <span style={{ marginLeft: "10px" }}>Cantact Information</span>
          </div>

          <div
            style={{
              //   border: "1px solid red",
              height: "350px",
              backgroundColor: "whitesmoke",
              borderRadius: "15px",
              width: "95%",
            }}
          >
            <div style={{ justifyContent: "space-around", display: "flex" }}>
              <div style={{ marginTop: "10px" }}>
                <span
                  style={{
                    color: "slategray",
                    fontSize: "18px",
                    marginRight: "15px",
                  }}
                >
                  Full Name
                </span>
                <span>{formData.name}</span>
              </div>
              <div style={{ marginTop: "10px" }}>
                <span
                  style={{
                    color: "slategray",
                    fontSize: "18px",
                    marginRight: "15px",
                  }}
                >
                  Phone Number
                </span>
                <span>{formData.number}</span>
              </div>
            </div>
            <div>
              <div style={{ marginTop: "10px" }}>
                <span
                  style={{
                    color: "slategray",
                    fontSize: "18px",
                    marginRight: "15px",
                    marginLeft: "25px",
                  }}
                >
                  Email
                </span>
                <span>{formData.email}</span>
              </div>
            </div>
            <div>
              <div style={{ justifyContent: "space-around", display: "flex" }}>
                <div style={{ marginTop: "10px", marginLeft: "-140px" }}>
                  <span
                    style={{
                      color: "slategray",
                      fontSize: "18px",
                    }}
                  >
                    Delivery Address
                  </span>
                </div>
                <div style={{ marginTop: "10px", marginRight: "-130px" }}>
                  <button
                    style={{
                      backgroundColor: "slategray",
                      height: "35px",
                      padding: "5px 5px",
                      border: "1px solid slategray",
                    }}
                    onClick={() => {
                      navigate("/products/Add_Address");
                    }}
                  >
                    Change Address
                  </button>
                </div>
              </div>
            </div>
            <div
              style={{
                backgroundColor: "#fff",
                height: "150px",
                width: "90%",
                margin: "auto",
                marginTop: "10px",
                padding: "0px 10px",
              }}
            >
              <p style={{ marginTop: "15px" }}>Users Name :{formData.name}</p>
              <p>Phone Number :{formData.number}</p>
              <p>
                Address :{formData.flatNumber},{formData.formData},
                {formData.city},{formData.country}
              </p>
              <p>Area pinCode : {formData.pincode}</p>
            </div>
            <div style={{ marginTop: "20px", display: "flex" }}>
              <button
                style={{
                  height: "36.50px",
                  border: "1px solid gray",
                  width: "35%",
                  backgroundColor: "#fff",
                }}
                onClick={() => {
                  navigate("/");
                 
                }}
              >
                {" "}
                Continue Shopping
              </button>
              <button
                style={{
                  height: "37px",
                  border: "1px solid gray",
                  width: "70%",
                  backgroundColor: "darkslategray",
                  color: "#fff",
                }}
                onClick={() => {
                  navigate("/products/payment");
                  notify();
                }}
              >
                Proceed to Payment Rs.<span>{amount + 69}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div style={{ height: "155px" }}></div>
    </>
  );
};
export default PaymentDelivery;
