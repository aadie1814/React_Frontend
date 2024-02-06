import React from "react"
import'../../node_modules/bootstrap/dist/css/bootstrap.css'
import pic from '../image/signup2.jpeg'
import'../new.css';
import Header from "./Header";
const Signup = () =>{
    return(
        <>
         <Header/>
         <section className="cone">
            <div className="container ">
                <div className="row m-0 p-0 ">
                    <div className="col-md-6 mt-5 m-0 p-0">
                        { <img src={pic} alt='' height="658px" width="100%"></img> } 
                    </div>
                    <div className="col-md-6 bg-light mt-5 mb-5 m-0 p-0  ">
                        <form className="form frm">
                           <h2 className="mt-5 text-center">SignUp</h2>
                           <label className="lable">FullName</label>
                           <input type="text" class="form-control mm " placeholder="NAME..." id="text" name="text"></input> <br/>
                           <label  className="lable">Email</label>
                           <input type="email" class="form-control mm" placeholder=" Email Address..." id="email" name="email"></input> <br/>
                           <label  className="lable">UserName</label>
                           <input type="text" class="form-control mm" placeholder="UserName..." id="text" name="text"></input> <br/>
                           <label  className="lable">Password</label>
                           <input type="password" class="form-control mm" placeholder=" ************" id="pass" name="pass"></input> <br/>
                           <label  className="lable"> Repeat Password</label>
                           <input type="password" class="form-control mm" placeholder=" ************" id="pass" name="pass"></input><br/>
                           <input type="checkbox"></input>
                           <label className="lable "> <h6 className="c">I agree to the term of user</h6></label><br/><br/>
                           <button type="submit" class="btn btn-primary mx-auto d-block ">SignUp</button><br/><br/>
                        </form>
                    </div>
                </div>
            </div>
        </section>
        </>
)
}
export default Signup;