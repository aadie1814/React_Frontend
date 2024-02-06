import React from "react"
import'../../node_modules/bootstrap/dist/css/bootstrap.css'
import'../new.css';
import Header from "./Header";
import Footer from "./Footer";
const Contact = () =>{
return(
    <>
    <Header/>
    <section className="cone">
         <div className="container ">
            <div className="row  ">
                <div className="col-md-6 bg-primary mt-5 mb-5  "><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                    <h2 className="mt-5 text-center text-light"  >Let's Chat</h2>
                    <p className="text-center text-light mt-1">Feel free to send me message in the  contact form</p>
                </div>
                <div className="col-md-6 bg-light mt-5 mb-5  ">
                    <h2 className="text-center mt-5 text-dark">Contact</h2><br/>
                    <p>.Required</p>
                    <form>
                       <input type="text" class="form-control" placeholder="Name*" id="name" name="name"></input><br/>
                       <input type="email" class="form-control" placeholder="Email*" id="email" name="email"></input><br/>
                       <input type="text" class="form-control" placeholder="Company*" id="text" name="text"></input><br/>
                       <input type="text" class="form-control" placeholder="Phone*" id="text" name="text"></input><br/>
                       <textarea class="form-control"  placeholder="Message*" rows="5" id="comment" name="text"></textarea><br/>
                       <button type="submit" class="btn btn-primary buttons ">Submit</button><br/><br/>
                    </form>
                </div>
            </div>
        </div>
    </section>
    <Footer/>
    </>
)
}
export default Contact;