import React from 'react';
// import "./Pay.css"
import "./Demo.css"

const Pay = () => {
    return (
      <>
        <div style={{ height: "155px" }}></div>
        <div className="sure">
          <div className="dynamic_part">Will Add</div>

          <div className="cartPriceOffer">
            <div className="payContainer">
              <div className="priceDetailTag">
                <img
                  src="https://in.sugarcosmetics.com/desc-images/Offers_price_details.svg"
                  alt=""
                />{" "}
                Payment Method
              </div>
              <p>Select Payment Method</p>

              <div>
                <div className="upi">
                  <img
                    src="https://in.sugarcosmetics.com/paymentIcons/upi.svg"
                    alt=""
                  />
                  <div className="iconfles">
                    <p>Instant Pay Using UPI</p>
                    <img
                      src="https://in.sugarcosmetics.com/desc-images/Check.svg"
                      alt=""
                      className="uiconleft"
                    />
                  </div>
                </div>
                <div className="paydrop">
                  <div className="payinput">
                    <input type="text" placeholder="Enter UPI Id" />
                  </div>
                </div>
              </div>
              <div>
                <div className="mobwallet">
                  <img
                    src="https://in.sugarcosmetics.com/paymentIcons/wallets.svg"
                    alt=""
                  />
                  <div className="iconfles">
                    <p>Mobile Wallets</p>
                    <img
                      src="https://in.sugarcosmetics.com/desc-images/Check.svg"
                      alt=""
                      className="miconleft"
                    />
                  </div>
                </div>
              </div>
              <div>
                <div className="debitcard">
                  <img
                    src="https://in.sugarcosmetics.com/paymentIcons/creditDebit.svg"
                    alt=""
                  />
                  <div className="iconfles">
                    <p>Credit/Debit Cards</p>
                    <img
                      src="https://in.sugarcosmetics.com/desc-images/Check.svg"
                      alt=""
                      className="diconleft"
                    />
                  </div>
                </div>
                <div className="dropdebit">
                  <input type="number" placeholder="Card Holder Number" />
                  <br />
                  <input type="text" placeholder="Card Holder Name" />
                  <br />
                  <div className="exp">
                    <input type="text" placeholder="Expiriy Date(MM/YY)" />
                    <input type="text" placeholder="CVV" />
                  </div>
                  <div>
                    <p>
                      {" "}
                      <span>
                        {" "}
                        <input type="checkbox" />
                      </span>
                      We will securely save this card for faster paymnet
                      experience (CVV will not saved). If required you can
                      remove this card from My Account Payment Methods
                    </p>
                  </div>
                </div>
              </div>
              <div className="netbanking">
                <img
                  src="https://in.sugarcosmetics.com/paymentIcons/netBanking.svg"
                  alt=""
                />
                <div className="iconfles">
                  <p>Net Banking</p>
                  <img
                    src="https://in.sugarcosmetics.com/desc-images/Check.svg"
                    alt=""
                    className="niconleft"
                  />
                </div>
              </div>
              <div>
                <div className="cash">
                  <img
                    src="https://in.sugarcosmetics.com/paymentIcons/cod.svg"
                    alt=""
                  />
                  <div className="iconfles">
                    <p>Cash On Delivery</p>
                    <img
                      src="https://in.sugarcosmetics.com/desc-images/Check.svg"
                      alt=""
                      className="ciconleft"
                    />
                  </div>
                </div>
                <div className="cashdrop">
                  <p>
                    We recommend using a digital payment method for completing
                    the payment
                  </p>
                </div>
              </div>

              <div className="button_delivery_shopping">
                <div className="continueShopping_btn">
                  <a href="../HTML/index.html">delivery Info</a>
                </div>
                <div className="PaymentInfo_btn">Proceed to Payment</div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}

export default Pay