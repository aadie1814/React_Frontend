import React from "react"
import'../../node_modules/bootstrap/dist/css/bootstrap.css'
import pic from '../image/homei.jpg'
import pic1 from '../image/home.webp'
import'../new.css';
import { SiFireship } from "react-icons/si";
import { RiTruckLine } from "react-icons/ri";
import { BsCoin } from "react-icons/bs";
import Header from "./Header";
import Footer from "./Footer";
const Home = () =>{
return(
    <>
        <Header/>
        <section className="nnn">
        <div className="container ">
            <div className="row mt-0">
                <div className="col-md-6 mt-5"><br/><br/><br/><br/><br/>
                    <h2 className="i" >ALL WHAT YOU NEED IS HERE !</h2>
                    <h2 className="i">New Fashion collection</h2>
                    <h2 className="i">Every Season</h2>
                    <button  class="btn btn-primary text-light text-center ">Contact Now</button>
                </div>
                <div className="col-md-6 mt-6 ml-5 mt-5 mb-4 ">
                { <img src={pic1} alt='' height="500px" width="100%"></img> }
                </div>
            </div>
        </div>
        </section>
        <section>
            <div className="container">
                <div className="row mt-5">
                   <h2 className="text-center mb-5">Why Shop With Us</h2>
                    <div className="col-md-4  ">
                        <div class="card cd2 ">
                            <div class="card-body">
                            <RiTruckLine className="ih"></RiTruckLine>
                            
                               <h3 className="mt-2 text-white">Fast Delivery</h3>
                              <p className="text-white">Variations of passages of Lorem Ipsum available</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4  ">
                        <div class="card cd2 ">
                            <div class="card-body">
                               <SiFireship className="ih"></SiFireship>
                               <h3 className="mt-2 text-white">Free Shipping</h3>
                              <p className="text-white" >Variations of passages of Lorem Ipsum available</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4  ">
                        <div class="card cd2 ">
                            <div class="card-body">
                               <BsCoin className=" ih"></BsCoin> 
                               <h3 className="mt-2 text-white">Best Quality</h3>
                              <p className="text-white">Variations of passages of Lorem Ipsum available</p>
                            </div>
                        </div>
                    </div>
                   
                </div>
            </div>
        </section><br/>
        <section>
            <div className="container-fluid  ">
                <div className="row p-0 m-0 mt-5">
                    <div className="col-md-6 m-0 p-0 ">
                        { <img src={pic} alt='' height="550px" width="100%"></img> }
                    </div>
                    <div className="col-md-6 nnn p-5 m-0 "><br/><br/><br/><br/><br/>
                        <h2 className="i" >#New Arrivals</h2>
                        <p>Vitae Fugiat laboriosam officia  perferendis provident aliquid </p>
                        <p>Voluptatibus dolorem, Fugit ullam sit earum id eaque nisi hic?</p>
                        <p>Tenetur commodi,nisi rem vel,eaque abipsa,autem</p>
                        <p>Simillique ex unde!</p>
                        <button  class="btn btn-primary text-light text-center ">Shop Now</button>
                     </div>
                </div>
            </div>
        </section>
        <section className="Discount">
            <div className="container"><br/><br/>
                <h2 className="text-center i ">Subscribe To Get Discount Offers</h2><br/>
                <from>
                  <input type="email" class="form-control su" placeholder="Enter Your Email" id="email" name="email"></input><br/>
                  <button  class="btn btn-primary text-light text-center btt mb-5 ">SUBSCRIBE</button>
                </from>
            </div>
        </section>
        <section>
           
            
        </section>
        <Footer/>
    </>
)}
export default Home;