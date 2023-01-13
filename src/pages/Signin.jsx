import React from "react";
import logo from "../assets/Boginoo.png"
import { Link } from "react-router-dom";
import { useState } from "react";


function Signin(){
    const [email, setEmail] = useState();
    const [pass, setPass] = useState();
    const createUser = async () => {
      const res = await instance.post("/users", {
        email: email,
        password: pass,
      });
      // setData(res.data.data.Shortlink);
      console.log(res)
    };
    return(
        <div className="signinhome">
            <div className="signincont">
            <img className="logo2" src={logo} alt="" />
            <div className="cont2">
                <div className="howitwork">How it Works</div>
                <Link to={".."}>
                <button className="back">Back</button>
                </Link>
                <div className="signin">Sign In</div>
                <div className="email">
                    <div className="email1">Email:</div>
                    <input className="email2" placeholder="name@mail.domain" type="text" />
                </div>
                <div className="password">
                    <div className="password1">Password</div>
                    <input className="password2" placeholder="*********" type="text" />
                </div>
                <button className="button2">Enter</button>
                <Link to={"/Signup"}>
                <div className="tosignup">Don't have account?</div>
                </Link>
               

            </div>
            </div>
        </div>
    )
}

export default Signin