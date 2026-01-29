import React from "react";
import './login.css'

function Login(){

    return (
        <div className="login">
            <div className="content">
                {/* <h1>CUSTOMER </h1> */}
                <div className="logo">
                    <img src="https://www.citypng.com/public/uploads/preview/hd-man-user-illustration-icon-transparent-png-701751694974843ybexneueic.png" alt="" />
                </div>
                <br/>
                <input className="data" type="email" id="email" name="email" placeholder="Enter Email"/>
                <br/>
                <input className="data" type="password" id="password" name="password" placeholder="Enter Password" required/>
                <br/>
                <input className="box" id="check" type="checkbox" placeholder="Remember me"/>
                <label for="check">Remember me</label>
                <a href="">Forget password</a>
                <br/>
                <br/>
                <button >Login</button>
            </div>
        </div>
    )
}

export default Login;