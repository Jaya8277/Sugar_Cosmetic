import React, {useEffect, useState ,useContext} from "react";
import { Navigate, useNavigate } from "react-router-dom";
import styles from "./Delivery.module.css";
import { CartContext } from "../ContextApi/CartStorage";

function Delivery() {
  const navigate = useNavigate();

    const [show, setShow] = React.useState(false);
    const { formData, setFormData } = useContext(CartContext);


  const handleChange = (e) => {
    const inputName = e.target.name;
 
   
      setFormData({
        ...formData,
        [inputName]: e.target.value,
      });
    
  };
    localStorage.setItem("Address", JSON.stringify(formData));
console.log(formData);
  const haddleSubmit = (e) => {
    e.preventDefault();
  console.log("hai");

  

  };

  return (
    <>
      <div style={{ height: "155px" }}></div>

      <div style={{ position: "relative" }}>
        <div className={styles.container}>
          <img
            className={styles.img1}
            src="https://in.sugarcosmetics.com/guestCheckout/topleftcircles75.png"
            alt=""
          />
          <button className={styles.button1} onClick={() => setShow(true)}>
            Log In/Sign Up
          </button>
          <p style={{ marginTop: "10px" }}>OR</p>
          <div className={styles.innerdiv1}>
            <img
              src="https://in.sugarcosmetics.com/guestCheckout/reception.svg"
              alt=""
            />
            <p>Continue as a guest</p>
          </div>

          <form onSubmit={haddleSubmit}>
            <div className={styles.formdiv1}>
              <div>
                <input
                  type="text"
                  name="name"
                  onChange={handleChange}
                  placeholder="Full Name"
                />
                <input
                  type="number"
                  name="number"
                  onChange={handleChange}
                  placeholder="phone number"
                />
              </div>
              <div>
                <input
                  type="number"
                  name="flatNumber"
                  placeholder="Flat Number"
                  onChange={handleChange}
                />
                <input
                  type="text"
                  name="email"
                  onChange={handleChange}
                  placeholder="Email Id"
                />
              </div>
              <div>
                <input
                  type="text"
                  name="address"
                  placeholder="Apartment Address"
                  onChange={handleChange}
                />
                <div>
                  <input
                    className={styles.special}
                    type="number"
                    name="pincode"
                    placeholder="Zipcode/ Pincode"
                    onChange={handleChange}
                  />
                  <button className={styles.details}>Get Details</button>
                </div>
              </div>
            </div>
            <div className={styles.formdiv2}>
              <div>
                <input
                  type="text"
                  name="state"
                  onChange={handleChange}
                  placeholder="State/ Province"
                />
              </div>
              <div>
                <input
                  type="text"
                  onChange={handleChange}
                  name="city"
                  placeholder="City"
                />
              </div>
              <div>
                <input
                  type="text"
                  onChange={handleChange}
                  name="country"
                  placeholder="Country"
                />{" "}
              </div>
            </div>
            <div className={styles.formdiv3}>
              <div>
                <button className={styles.cancel}>Cancel</button>
              </div>
              <div onClick={() => navigate("/products/addresss")}>
                <input
                  type="submit"
                  className={styles.save}
                  value="Save and use this address"
                />
              </div>
            </div>
          </form>
          <img
            className={styles.img2}
            src="https://in.sugarcosmetics.com/guestCheckout/bottomrightcircles75.png"
            alt=""
          />
        </div>
      </div>
      {show && (
        <>
          <div
            className={styles.bgmodal}
            style={{ marginTop: "0px", zIndex: "99" }}
          >
            <div className={styles.modalcontents}>
              <div id={styles.slide}>
                <img
                  id={styles.bg}
                  src="https://in.sugarcosmetics.com/Login_bg.svg"
                  alt=""
                />
              </div>

              <div id={styles.form}>
                <p id={styles.head}>
                  <span
                    style={{ marginRight: "50px", cursor: "pointer" }}
                    onClick={() => setShow(false)}
                  >
                    <i class="fa-solid fa-xmark"></i>
                  </span>
                  Login/Sign Up Using Phone
                </p>
                <div id={styles.numHold}>
                  <p id={styles.code}>+91</p>
                  <input type="text" id={styles.number} maxlength="1" />
                  <input type="text" id={styles.number} maxlength="1" />
                  <input type="text" id={styles.number} maxlength="1" />
                  <input type="text" id={styles.number} maxlength="1" />
                  <input type="text" id={styles.number} maxlength="1" />
                  <input type="text" id={styles.number} maxlength="1" />
                  <input type="text" id={styles.number} maxlength="1" />
                  <input type="text" id={styles.number} maxlength="1" />
                  <input type="text" id={styles.number} maxlength="1" />
                  <input type="text" id={styles.number} maxlength="1" />
                  <button id={styles.request}>Request OTP</button>
                </div>

                <p id={styles.enter}>
                  Enter your phone number to request an OTP
                </p>
                <hr id={styles.hr} />
                <p id={styles.digit}>
                  Enter the 4 digit OTP received on your phone.
                </p>

                <div id={styles.otpHold}>
                  <input type="text" id={styles.otp} maxlength="1" />
                  <input type="text" id={styles.otp} maxlength="1" />
                  <input type="text" id={styles.otp} maxlength="1" />
                  <input type="text" id={styles.otp} maxlength="1" />
                </div>
                <button
                  id={styles.verify}
                  onClick={() => navigate("/products/addresss")}
                >
                  Verify OTP
                </button>

                <div id={styles.condition}>
                  <input type="checkbox" id={styles.check} />
                  <p id={styles.whatsapp}>
                    Get Important Updates on Whatsapp.{" "}
                  </p>
                  <a id={styles.terms} href="">
                    Terms and Conditions
                  </a>
                </div>

                <div id={styles.extra}>
                  <p id={styles.p1}>
                    Registering for this site allows you to access your order
                    status and history. Just fill in the fields below, and we'll
                    get a new account set up for you in no time. We will only
                    ask you for information necessary to make the purchase
                    process faster and easier.
                  </p>

                  <div id={styles.extraInfo}>
                    <p id={styles.p2}>
                      By Signing up or logging in, you agree to our{" "}
                    </p>
                    <a href="" id={styles.terms2}>
                      Terms and Conditions
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Delivery;
