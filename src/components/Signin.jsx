import React from 'react'
import "./Signin.css"

const Signin = () => {
    return (
        <div>

            <div id="sublogin">
                <div id="close"><i class="fa-solid fa-xmark"></i></div>
                <p id="headlog">Login/Sign Up</p>
                <div id="loginbox">
                    <div class="boxtop">
                        <img
                            src="https://in.sugarcosmetics.com/smartphone.svg"
                            alt=""
                            height="30px"
                            width="30px"
                            class="logmob"
                        />
                        <p class="loginsign">Login/Sign Up Using Phone</p>
                    </div>
                    <div class="loginput">
                        <h4 class="contrycode">+91</h4>
                        <input type="text" maxlength="1" class="loginput1" />
                        <input type="text" maxlength="1" class="loginput1" />
                        <input type="text" maxlength="1" class="loginput1" />
                        <input type="text" maxlength="1" class="loginput1" />
                        <input type="text" maxlength="1" class="loginput1" />
                        <input type="text" maxlength="1" class="loginput1" />
                        <input type="text" maxlength="1" class="loginput1" />
                        <input type="text" maxlength="1" class="loginput1" />
                        <input type="text" maxlength="1" class="loginput1" />
                        <input type="text" maxlength="1" class="loginput1" />
                        <button id="requestptp">Request OTP</button>
                    </div>
                    <div class="hrline"></div>
                    <div id="otpsection">
                        <p>Enter the 4 digit OTP received on your phone.</p>
                        <div class="otpbox">
                            <input type="text" class="enterotp enterotp1" maxlength="1" />
                            <input type="text" class="enterotp enterotp2" maxlength="1" />
                            <input type="text" class="enterotp enterotp3" maxlength="1" />
                            <input type="text" class="enterotp enterotp4" maxlength="1" />
                            <div>
                                <button id="verify">Verify OTP</button>
                                <span id="incorrect"></span>
                            </div>
                            <div class="whats">
                                <input type="checkbox" />
                                <p>Get Important Updates on Whatsapp. Terms and Conditions</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="logcontent">
                    <div class="logp">
                        <p>Registering for this site allows you to access your order status and history. Just fill in the
                            fields below, and we'll get a new account set up for you in no time. We will only ask you
                            for information necessary to make the purchase process faster and easier.</p>
                    </div>
                    <div id="smll">
                        <small class="smll">By Signing up or logging in, you agree to our Terms and Conditions</small>
                    </div>

                </div>
            </div>`



        </div>
    )
}

export default Signin