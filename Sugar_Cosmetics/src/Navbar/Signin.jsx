import React from 'react'
import "./Signin.css"

const Signin = () => {
    return (
      <div>
        <div className="sublogin">
          <div className="close">
            <i className="fa-solid fa-xmark"></i>
          </div>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
          <p className="headlog">Login/Sign Up</p>
          <div className="loginbox">
            <div className="boxtop">
              <img
                src="https://in.sugarcosmetics.com/smartphone.svg"
                alt=""
                height="3rem"
                width="3rem"
                className="logmob"
              />
              <p className="loginsign">Login/Sign Up Using Phone</p>
            </div>
            <div className="loginput">
              <h4 className="contrycode">+91</h4>
              <input type="text" maxlength="1" className="loginput1" />
              <input type="text" maxlength="1" className="loginput1" />
              <input type="text" maxlength="1" className="loginput1" />
              <input type="text" maxlength="1" className="loginput1" />
              <input type="text" maxlength="1" className="loginput1" />
              <input type="text" maxlength="1" className="loginput1" />
              <input type="text" maxlength="1" className="loginput1" />
              <input type="text" maxlength="1" className="loginput1" />
              <input type="text" maxlength="1" className="loginput1" />
              <input type="text" maxlength="1" className="loginput1" />
              <button className="requestptp">Request OTP</button>
            </div>
            <div className="hrline"></div>
            <div className="otpsection">
              <p>Enter the 4 digit OTP received on your phone.</p>
              <div className="otpbox">
                <input
                  type="text"
                  className="enterotp enterotp1"
                  maxlength="1"
                />
                <input
                  type="text"
                  className="enterotp enterotp2"
                  maxlength="1"
                />
                <input
                  type="text"
                  className="enterotp enterotp3"
                  maxlength="1"
                />
                <input
                  type="text"
                  className="enterotp enterotp4"
                  maxlength="1"
                />
                <div>
                  <button className="verify">Verify OTP</button>
                  <span className="incorrect"></span>
                </div>
                <div className="whats">
                  <input type="checkbox" />
                  <p>Get Important Updates on Whatsapp. Terms and Conditions</p>
                </div>
              </div>
            </div>
          </div>
          <div className="logcontent">
            <div className="logp">
              <p>
                Registering for this site allows you to access your order status
                and history. Just fill in the fields below, and we'll get a new
                account set up for you in no time. We will only ask you for
                information necessary to make the purchase process faster and
                easier.
              </p>
            </div>
            <div className="smll">
              <small className="smll">
                By Signing up or logging in, you agree to our Terms and
                Conditions
              </small>
            </div>
          </div>
        </div>
        `
      </div>
    );
}

export default Signin