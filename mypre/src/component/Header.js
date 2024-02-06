import React from "react";
import'../../node_modules/bootstrap/dist/css/bootstrap.css'
import'../new.css';
import {  NavLink } from "react-router-dom";
const Header =() =>{
    return(
    <>
       <div className="container-fluid ">
            <div className="row">
                <div className="col-md-10 ml-0 p-0">
                    <ul className="ull">
                        <li className="lii"><NavLink to="/">Home</NavLink></li>
                        <li className="lii"><NavLink to="/About">About</NavLink></li>
                        <li className="lii"><NavLink to="/product">Product</NavLink></li>
                        <li className="lii"><NavLink to="/Contact">Contact</NavLink></li>
                    </ul>
                </div>
                <div className="col-md-2 p-0">
                    <ul className="ull">
                        <li className="lii"><NavLink to="/login">Login</NavLink></li>
                        <li className="lii"><NavLink to="/SignUp">Signup</NavLink></li>
                    </ul>
                </div>
            </div>
        </div>
    </>
)

}
export default Header;