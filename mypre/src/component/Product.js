import React from "react"
import'../new.css';
import'../../node_modules/bootstrap/dist/css/bootstrap.css'
import pic from '../image/product.jpg'
import pic111 from '../image/about.avif'
import pic121 from '../image/productimage2.jpg'
import pic123 from '../image/productimage3.jpg'
import pic2 from '../image/tier.jpg'
import pic23 from'../image/girl.png'
import pic3 from '../image/productcard3.jpg'
import picf from '../image/formal.jpg'
import picb from '../image/md3.jpg'
import picw from '../image/denim.jpeg'
import Header from "./Header";
import Footer from "./Footer";
const Product = () =>{
return(
    <>
        <Header/>
       {/*  Stylish section */}
        <section className="bgi">
            <div className="container">
                <div className="row  ">
                    <div className="col-md-6 "><br/><br/><br/><br/><br/>
                        <h1 className="i">Stylish & Dashing</h1>
                        <p className="i">Produce and supply various Handicraft items all over</p> 
                        <p className="i">the world which were very attractive</p>
                        <button  class="btn btn-primary text-light text-center ">Shop Now</button>
                    </div>
                   <div className="col-md-6 mt-3 ml-5 mb-4 mt-3">
                      { <img src={pic} alt='' height="450px" width="100%"></img> }
                    </div>
               </div>
            </div>
        </section>
      
       {/*  section image */}
        <section>
            <div className="container">
                <div className="row">
                    <div className="col-md-4 mt-5">
                        { <img src={pic111} alt='' height="350" width="100%"></img> } 
                    </div>
                    <div className="col-md-4 mt-5">
                        { <img src={pic121} alt='' height="350" width="100%"></img> }
                    </div>
                    <div className="col-md-4 mt-5">
                        { <img src={pic123} alt='' height="350" width="100%"></img> }   
                    </div>
                </div>
            </div>
        </section>
        {/* section Featured Products */}
        <section>
            <h3 className="h1">Female Products</h3>
            <p className="p2">Produce and supply various Handicraft items all over</p>
            <p className="p2">the world which were very attractive</p>
           {/*  card section */}
            <div className="container">
                <div className="row">
                    <div className="col-md-4 mt-5">  
                        <div class="card cd1 ">
                            <div class="card-header  p-0 ">
                                { <img src={pic2} alt='' height="300px" width="100%"></img> }
                            </div>
                            <div class="card-body">
                                <h3 className="text-center">White Black Poat</h3>
                                <p className="text-center">$60.00</p>
                                <p className="r">Fashion</p>
                            </div> 
                         </div>
                    </div>
                    <div className="col-md-4 mt-5">
                        <div class="card cd1 ">
                            <div class="card-header p-0 ">
                            { <img src={pic23} alt='' height="300px" width="100%"></img> }
                            </div>
                            <div class="card-body">
                                <h3 className="text-center">Cesteria long Poat</h3>
                                <p className="text-center">$90.00</p>
                                <p className="r">Fashion</p>
                            </div> 
                        </div>
                    </div>
                    <div className="col-md-4 mt-5">
                        <div class="card cd1 ">
                            <div class="card-header p-0  ">
                                { <img src={pic3} alt='' height="300px" width="100%"></img> }
                            </div>
                            <div class="card-body">
                                <h3 className="text-center">Woodent Turning</h3>
                                <p className="text-center">$90.00</p>
                                <p className="r">Fashion</p>
                            </div> 
                        </div>
                    </div>
                </div>
            </div>
           {/*  card section2 */}
            <h3 className="h1"> Male Products</h3>
            <p className="p2">Produce and supply various Handicraft items all over</p>
            <p className="p2">the world which were very attractive</p>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-4">
                        <div class="card cd1">
                            <div class="card-header p-0 ">
                                { <img src={picw} alt='' height="300px" width="100%"></img> }
                            </div>
                            <div class="card-body">
                                <h4 className="text-center white">white pinstripe shirt & blue jeans</h4>
                                <p className="text-center">$60.00</p>
                                <p className="r">Fashion</p>

                            </div> 
                         </div>
                    </div>
                    <div className="col-md-4 mb-3">
                        <div class="card cd1 ">
                            <div class="card-header p-0 ">
                                { <img src={picf} alt='' height="300px" width="100%"></img> }
                            </div>
                            <div class="card-body">
                                <h4 className="text-center">Formal Dress </h4>
                                <p className="text-center">$60.00</p>
                                <p className="r">Fashion</p>
                            </div> 
                        </div>
                    </div>
                    <div className="col-md-4 mb-3">
                    <div class="card  cd1">
                            <div class="card-header p-0 ">
                                { <img src={picb} alt='' height="300px" width="100%"></img> }
                            </div>
                            <div class="card-body">
                            <h4 className="text-center"> Indo Western Dress</h4>
                            <p className="text-center">$60.00</p>
                            <p className="r">Fashion</p>
                            </div> 
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <Footer/>

    </>
)
}
export default Product;