import React from 'react'
import "./Product.css"

const Product = () => {
    return (
        <div className='product_main'>




            <div className="container">

               
                <div className="content">

                    {/* <!-- Lightbox --> */}
                    <section className="lightbox">
                        <img className="product-hero" src="https://cdn.shopify.com/s/files/1/0906/2558/products/382512092-mettle-priming-balm-02.jpg?v=1648654863" alt="image product" />
                        <div className="previous arrow">
                            <img src="./images/icon-previous.svg" alt="icon previous" />
                        </div>
                        <div className="next arrow">
                            <img src="./images/icon-next.svg" alt="icon next" />
                        </div>
                        <div className="thumb-gallery">
                            <div className="pic active">
                                <img src="https://cdn.shopify.com/s/files/1/0906/2558/products/382512092-mettle-priming-balm-02.jpg?v=1648654863" alt="thumb-1" />
                            </div>
                            <div className="pic">
                                <img src="https://cdn.shopify.com/s/files/1/0906/2558/products/382512089-mettle-priming-balm-01.jpg?v=1648654861" alt="thumb-2" />
                            </div>
                            <div className="pic">
                                <img src="./images/image-product-3-thumbnail.jpg" alt="thumb-3" />
                            </div>
                            <div className="pic">
                                <img src="./images/image-product-4-thumbnail.jpg" alt="thumb-4" />
                            </div>
                        </div>
                    </section>

                    {/* <!-- Product --> */}
                    <section className="product">
                        <div className="company-name">SNEAKER COMPANY</div>
                        <br />
                        <p>₹ 1099.00</p>
                        {/* <div className="title">Fall Limited Edition Sneakers</div> */}
                        {/* <div className="description">
                            These low-profile sneakers are your perfect casual wear companion.
                            Featuring a durable rubber outer sole, they'll withstand everything
                            the weather can offer.
                        </div>
                        <div className="price-wrapper">
                            <div className="group">
                                <div className="price">$125.00</div>
                                <div className="discount">50%</div>
                            </div>
                            <div className="old-price">$250.00</div>
                        </div> */}

                        <div className="count-btn-group">
                            {/* <div className="counter-wrapper">
                                <img id="btnMinus" src="./images/icon-minus.svg" alt="icon minus" />
                                <div className="counter">1</div>
                                <img id="btnPlus" src="./images/icon-plus.svg" alt="icon plus" />
                            </div> */}

                            <div className="btn">
                                <img src="./images/icon-cart.svg" alt="icon cart" />
                                <p>Add to cart</p>
                            </div>
                        </div>
                    </section>
                </div>

                <div className="overlay hidden">
                    <div className="btnClose">
                        <img id="btnOverlayClose" src="./images/icon-close.svg" alt="lightbox close" />
                    </div>
                </div>

            </div>











        </div>
    )
}

export default Product