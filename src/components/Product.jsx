import React from 'react'
import "./Product.css";
import { AiOutlineHeart } from 'react-icons/ai';
import { BsWhatsapp } from 'react-icons/bs';
import { BsFacebook } from 'react-icons/bs';
import { BiMessageRoundedDetail } from 'react-icons/bi';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { ImLinkedin2 } from 'react-icons/im';
import { IoIosArrowDown } from 'react-icons/io';
import { IoIosArrowUp } from 'react-icons/io';




const Product = () => {
    return (
        <div>


            <div id="navbar"></div>
            <br />
            <div id="hometitle">
                <img src="https://in.sugarcosmetics.com/desc-images/breadcrumb_home.svg" alt="koko" />
                <p>/
                    Blend trend makeup brush/Eyes brushes/Blend trend eyeshadow brush 043 round xl</p>
            </div>




            {/* ---------------------------------------------- */}
            <div className="bigdiv">

                <div className="promain">

                    <div id="proimgdiv">

                        <img
                            src='https://cdn.shopify.com/s/files/1/0906/2558/products/382512092-mettle-priming-balm-02.jpg?v=1648654863' alt='j' className='slideItem' />
                        <div>
                            <IoIosArrowUp className='arr' />

                            <img src='https://cdn.shopify.com/s/files/1/0906/2558/products/382512089-mettle-priming-balm-01.jpg?v=1648654861' alt='j' className='smallImg' />
                            <img src='https://cdn.shopify.com/s/files/1/0906/2558/products/382512092-mettle-priming-balm-02.jpg?v=1648654863' alt='j' className='smallImg' />
                            <img src='https://cdn.shopify.com/s/files/1/0906/2558/products/382512092-mettle-priming-balm-02.jpg?v=1648654863' alt='j' className='smallImg' />
                            <IoIosArrowDown className='arr' />
                        </div>
                    </div>

                    <div id="prodetdiv">
                        <h1 id="prname">Mettle Priming Balm</h1>
                        <p id="pr_rating">₹ 1099.00</p>
                        <p id="pr_price"></p>
                        <button id="addbtn">Add to Cart </button>
                        <br /> <a href="wishlist.html">
                            <AiOutlineHeart />
                            Save to wishlist</a>
                        <div className='flex'>

                            <p className='share'>Share with friends :  </p>
                            <BsWhatsapp className='b a' />
                            <BsFacebook className='b c' />
                            <AiFillTwitterCircle className='b d' />
                            <BiMessageRoundedDetail className='b e' />
                            <ImLinkedin2 className='b f' />
                        </div>


                    </div>

                </div>
                <img src="https://in.sugarcosmetics.com/productbanner.svg" alt="koko" /><br />
                <div className='check'>
                    <label >Check Estimated Delivery Date For your Location :

                    </label>
                    <input type="text" placeholder="Enter Pincode" id="pin" />
                    <button id="pinbtn">Check Now</button>
                </div>
                <br />
                <div className='offer'>
                    <h4>Available Offers!!</h4>
                    <p>
                        – Get a Matte Attack <br />
                        Transferproof Lipstick
                        <br /> FREE on a spend of Rs. 799
                        <br />
                        <span>Know More</span>
                        – Get a Aquaholic Instant Pore Cleansing Mask, <br /> Contour De Force Mini Blush <br />
                        and a Pouch on a spend of Rs. 998 <br />
                        <span>Know More</span> <br />
                        – Grab a complimentary product worth Rs.499 on a spend of Rs.699
                    </p>
                </div>

                <div id="desbtn">
                    <button>Description</button>
                    <button>How to use</button>
                    <button>Similar Products</button>
                    <button>Reviews</button>
                </div>
                <div className='bottom'>
                    <p>Achieve flawless skin – No filter necessary!</p> <br />
                    <p>Perfect for eyeshadow application and blending, SUGAR Blend Trend Eyeshadow Brush Round XL 043 softens harsh
                        lines and applies the eye shadow transition colour with ease. This dome shaped, fluffy eye shadow brush with
                        100% cruelty-free bristles picks up powder or cream shadow with ease and rounded brush shape expertly blends
                        and diffuses shadow into the crease. This brush can also be used contouring, shading and highlighting and is
                        perfect for creating a smokey eye look.</p>

                    <p>About the Range:</p>

                    <p>SUGARs professional range of Blend Trend Makeup Brushes is designed for precision results and crafted with
                        the best quality, velvety-soft synthetic bristles. From applying foundation to eyeshadow and cream blushes
                        to powder makeup products, these exquisite makeup brushes do it all with finesse and help define your
                        features beautifully, build coverage, accentuate beauty looks with ease whilst taking your makeup artistry
                        to the next level.</p>

                    <h4>Features:</h4>

                    <ul>
                        <li>This rounded, dense eyeshadow brush is ideal for blending and diffusing out shadow at the crease</li>
                        <li>This brushs shape is perfect for a targeted eyeshadow application ensuring there are no harsh edges
                        </li>
                        <li>It effortlessly diffuses shadow for a beautifully blended crease and picks up powder or cream eyeshadow
                            with ease</li>
                        <li>SUGAR Blend Trend Brushes feature high quality synthetic, 100% cruelty-free bristles that ensure precise
                            application and diffusion of product</li>
                        <li>Easy to clean and durable, these makeup brushes are made with high-quality aluminum ferrules and premium
                            wooden handles</li>
                    </ul>


                </div>

                <div className='netWa'>
                    Net Weight: <span>7gms</span> <br />
                    Country of Origin: <span>Made in PRC | Formulated In Korea</span><br />
                    Company Name: <span> SUGAR Cosmetics LLC</span><br />
                    Company Address: <span> 8 The Green, Suite A, Dover, DE 19901.</span><br />
                </div>

            </div>

            <div>
                <p>Watch Video</p>
                <iframe width="620" height="365" src="https://www.youtube.com/embed/_TTJmiTiiOQ"
                    title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen></iframe>
            </div>

        </div>

    )
}

export default Product