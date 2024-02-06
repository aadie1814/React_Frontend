import React from "react"
import'../../node_modules/bootstrap/dist/css/bootstrap.css'
import pic from '../image/computer.png'
import Header from "./Header";
import'../new.css';
import { AiTwotoneMail } from "react-icons/ai";
import { RiLockPasswordFill } from "react-icons/ri";
import Footer from "./Footer";
import { NavLink } from "react-router-dom";
const Login = () =>{
    return(
    <>
        <Header/>
        <section className="cone">
            <div className="container ">
                <div className="row  m-0 p-0">
                    <div className="col-md-6 mt-5 mb-5 m-0 p-0 fc">
                       <form className="form mr-0">
                           <h2 className="mt-5 login fc ">Login</h2><hr className="loginhr"></hr>
                            <div id="icone" className="from-group">
                                <AiTwotoneMail className="emaili"></AiTwotoneMail>
                                <input type="email" class="form-control mm" placeholder=" Enter Your Email" id="email" name="email"></input> <br/>
                            </div><br/>
                            <div id="icone" className="from-group">
                                <RiLockPasswordFill className="pass"></RiLockPasswordFill>
                                <input type="pass" class="form-control mm" placeholder=" Enter Your Password" id="pass" name="pass"></input><br/>
                            </div><br/>
                            <h6 className="f"> <NavLink to= "#" className="cl">Forgot Password?</NavLink></h6><br/>
                            <button type="submit" class="btn btn-primary b ">Login</button><br/><br/>
                            <h6 className="dd">Don't have an account? <NavLink to="/SignUp" className="cl">Signup Now</NavLink> </h6>
                        </form>
                    </div>
                    <div className="col-md-6 m-0 p-0  mt-5 mb-5 ">
                        { <img src={pic} alt='' height="540px" width="100%"></img> } 
                    </div>
                </div>
            </div>
        </section>
        <Footer/>
    </>
)
}
export default Login;