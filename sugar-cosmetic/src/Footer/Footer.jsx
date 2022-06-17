import React from "react";

import styles from "./Footer.module.css";

function Footer() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.main1}>
          <img
            style={{ height: "120px" }}
            src="https://in.sugarcosmetics.com/Footer_sugar_icon.png"
            alt=""
          />
        </div>
        <div className={styles.main2}>
          <a href="https://www.facebook.com/trySUGAR/" alt="/">
            <img
              className={styles.imgmain1}
              src="https://in.sugarcosmetics.com/desc-images/facebook.svg"
              alt=""
            />
          </a>

          <a href="https://www.instagram.com/trysugar/?hl=en" alt="/">
            <img
              className={styles.imgmain1}
              src="https://in.sugarcosmetics.com/desc-images/Instagram.svg"
              alt=""
            />
          </a>
          <a href="https://www.pinterest.com/sugarcosmetics/" alt="/">
            <img
              className={styles.imgmain1}
              src="https://in.sugarcosmetics.com/desc-images/Pinterest.svg"
              alt=""
            />
          </a>
          <a href="https://sugarcosmetics-blog.tumblr.com/" alt="/">
            <img
              className={styles.imgmain1}
              src="https://in.sugarcosmetics.com/desc-images/Tumblr.svg"
              alt=""
            />
          </a>
          <a
            href="https://www.youtube.com/channel/UCKVqnev2idvmUNKc2b91B8g"
            alt="/"
          >
            <img
              className={styles.imgmain1}
              src="https://in.sugarcosmetics.com/desc-images/Youtube.svg"
              alt=""
            />
          </a>
        </div>
        <div style={{ marginLeft: "90px" }}>
          <div className={styles.main3}>
            <div>
              <p style={{ fontSize: "large", textAlign: "left" }}>
                SUBSCRIBE TO OUR NEWSLETTER
              </p>
              <input type="text" placeholder="Your Email address" />
              <button>Sign Up</button>
            </div>
            <div className={styles.innerdiv3}>
              <div>
                <p style={{ fontSize: "large", textAlign: "left" }}>
                  GET THE NEW SUGAR APP TODAY.
                </p>
              </div>
              <div style={{ display: "flex", gap: "20px" }}>
                <p
                  style={{
                    width: "250px",
                    fontSize: "large",
                    color: "rgb(131,131,131)",
                    textAlign: "left",
                  }}
                >
                  Tap into a better shopping experience.
                </p>
                <a href="https://sugarcosmetics.app.link/WebFApp" alt="/">
                  <img
                    style={{
                      height: "30px",
                      width: "100px",
                      marginTop: "15px",
                    }}
                    src="https://in.sugarcosmetics.com/playstore.png"
                    alt=""
                  />
                </a>
                <a href="https://sugarcosmetics.app.link/WebFApp" alt="/">
                  <img
                    style={{
                      height: "30px",
                      width: "100px",
                      marginTop: "15px",
                    }}
                    src="https://in.sugarcosmetics.com/apple-store.png"
                    alt=""
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          className={styles.div4}
          style={{ marginLeft: "90px", marginTop: "-5px" }}
        >
          <p style={{ color: "white", fontSize: "large" }}>INFORMATION</p>
          <div style={{ display: "flex", gap: "120px", marginTop: "-10px" }}>
            <a href="/" alt="/">
              Stores
            </a>
            <a
              href="https://in.sugarcosmetics.com/pages/terms-conditions"
              alt="/"
            >
              Terms and Conditions
            </a>
            <a
              href="https://in.sugarcosmetics.com/pages/returns-refunds"
              alt="/"
            >
              Returns
            </a>
            <a href="https://in.sugarcosmetics.com/pages/faqs">FAQs</a>
            <a href="https://in.sugarcosmetics.com/pages/about-us" alt="/">
              About Us
            </a>
          </div>
        </div>
        <div style={{ marginLeft: "90px", marginTop: "-5px" }}>
          <p style={{ color: "white", fontSize: "large", textAlign: "left" }}>
            GET IN TOUCH
          </p>
        </div>
        <div
          style={{
            marginLeft: "90px",
            marginTop: "-5px",
            display: "flex",
            gap: "70px",
          }}
        >
          <div className="detail">
            <div style={{ display: "flex" }}>
              <img
                style={{ marginTop: "20px", width: "20px", height: "15px" }}
                src="https://in.sugarcosmetics.com/desc-images/phone_android_white.svg"
                alt=""
              />
              <p
                style={{ color: "white", fontSize: "17px", fontWeight: "540" }}
              >
                Call us at
              </p>
            </div>
            <p
              className="number"
              style={{
                fontSize: "17px",
                color: "rgb(153,153,153)",
                marginTop: "-10px",
                textAlign: "left",
              }}
            >
              1800-209-9933
            </p>
            <p
              style={{
                fontSize: "small",
                color: "rgb(153,153,153)",
                marginTop: "-15px",
              }}
            >
              Monday to Friday : 9 AM to 7 PM
            </p>
          </div>
          <div>
            <p
              style={{
                color: "white",
                fontSize: "17px",
                fontWeight: "540",
                textAlign: "left",
              }}
            >
              Support
            </p>
            <p
              style={{
                fontSize: "17px",
                color: "rgb(153,153,153)",
                marginTop: "-10px",
              }}
            >
              hello@sugarcosmetics.com
            </p>
          </div>
          <div>
            <p
              style={{
                color: "white",
                fontSize: "17px",
                fontWeight: "540",
                textAlign: "left",
              }}
            >
              Careers
            </p>
            <p
              style={{
                fontSize: "17px",
                color: "rgb(153,153,153)",
                marginTop: "-10px",
              }}
            >
              We're hiring!
            </p>
          </div>
          <div>
            <p
              style={{
                color: "white",
                fontSize: "17px",
                fontWeight: "540",
                textAlign: "left",
              }}
            >
              PRESS AND MEDIA
            </p>
            <p
              style={{
                fontSize: "17px",
                color: "rgb(153,153,153)",
                marginTop: "-10px",
              }}
            >
              pr@sugarcosmetics.com
            </p>
          </div>
          <div>
            <p style={{ color: "white", fontSize: "17px", fontWeight: "540" }}>
              INFLUENCER COLLAB
            </p>
            <p
              style={{
                fontSize: "17px",
                color: "rgb(153,153,153)",
                textDecoration: "none",
                textAlign: "left",
              }}
            >
              JOIN US
            </p>
          </div>
        </div>
        <hr
          style={{ marginLeft: "40px", marginRight: "40px", marginTop: "42px",border:"1px solid white" }}
        />
        <center className={styles.center}>Copyright © 2022 SUGAR Cosmetics. All rights reserved.</center>
      </div>
    </>
  );
}

export default Footer;
