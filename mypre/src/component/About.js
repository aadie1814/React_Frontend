import React from "react"
import'../../node_modules/bootstrap/dist/css/bootstrap.css'
import'../new.css';
import pic from '../image/about.avif'
import {FaShippingFast} from 'react-icons/fa'
import {MdSupportAgent} from 'react-icons/md'
import {GiReceiveMoney} from 'react-icons/gi'
import {TbShoppingBagDiscount} from 'react-icons/tb'

import Header from "./Header";
import Footer from "./Footer";
const About = () =>{
return(
    <>
    <Header/>
    
        <section className="bg">
            <div className="container">
                <div className="row  ">
                    <div className="col-md-6 "><br/><br/><br/><br/><br/>
                        <h1 className="i" >Trend fashion collection</h1>
                        <p className="i">Lorem ipsum dolor sit amet,consectetur adipiscing elit.</p>
                        <p className="i">Tellus suspendisse morbi arcu adipiscing nunc.Amet,</p>
                        <p className="i">cars tempus netus libero.</p>
                        <button  class="btn btn-primary text-light text-center ">Shop Now</button>
                    </div>
                   <div className="col-md-6 mt-3 ml-5 mb-4">
                      { <img src={pic} alt='' height="500px" width="100%"></img> }
                    </div>
               </div>
            </div>
     </section>
        <section> 
            <div className="container">
                <div className="row mt-5">
                    <div className="col-md-4"></div>
                    <div className="col-md-6 mt-1">
                        <h1 className="i">Why You picking Us.</h1>
                        <p className="i">Winter is the coldest Seasonof the year in polar and temperate zones.</p>
                        <p className="i">it accurs after autumn before spring 
                        each year.</p>
                    </div>
                    <div className="col-md-2"></div>
                </div>
            </div>
        </section>
        <section className="">
            <div className="container">
                <div className="row mt-5">
                    <div className="col-md-1"></div>
                    <div className="col-md-2 m-4 ">
                         <FaShippingFast className="one"></FaShippingFast>
                         <h3 className="mt-2">Free Shipping</h3>
                         <p>Free shipping on All Order</p>
                    </div>
                    <div className="col-md-2 m-4 ">
                        <MdSupportAgent className="one"></MdSupportAgent>
                        <h3 className="mt-2">Support 24/7</h3>
                        <p>Support 24 Hours a day</p>
                    </div>
                    <div className="col-md-2 m-4 ">
                        <GiReceiveMoney className="one"></GiReceiveMoney>
                       <h3 className="mt-2">Money return</h3> 
                       <p>Back guarantee under 5 days</p>
                    </div>
                    <div className="col-md-2 m-4 ">
                        <TbShoppingBagDiscount className="one"></TbShoppingBagDiscount>
                        <h3 className="mt-2">OrderDiscount</h3>
                        <p>Onevery order Over $150</p>
                    </div>
                    <div className="col-md-1"></div>
                </div>
            </div>
        </section>
        <Footer/>
    </>
)
}
export default About;