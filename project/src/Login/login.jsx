import React from "react";
import './login.css'
import { useState } from "react";

function Login(){

    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");
    const [message,setMessage] = useState("")

    const handlelogin = (e)=>{

        e.preventDefault()

        if(username === "abc@gmail.com" && password === "1234"){
            setMessage("login sucessfully !");
        } else {
            setMessage("login failed !");
        }

        setUsername("")
        setPassword("")
    
    }

    return (
        <div className="container">
            <form onSubmit={handlelogin}>
                <div className="content">
                    {/* <h1>CUSTOMER </h1> */}
                    <div className="logo">
                        <img src="https://www.citypng.com/public/uploads/preview/hd-man-user-illustration-icon-transparent-png-701751694974843ybexneueic.png" alt="" />
                    </div>
                    <br/>
                    <input className="data" value={username} type="email" id="email" name="email" placeholder="Enter Email" required onChange={(e)=>setUsername(e.target.value)}/>
                    <br/>
                    <input className="data" value={password} type="password" id="password" name="password" placeholder="Enter Password" required onChange={(e)=>setPassword(e.target.value)}/>
                    <br/>
                    <input className="box" id="check" type="checkbox"/>
                    <label htmlFor="check">Remember me</label>
                    <a href="/forget">Forget password</a>
                    <br/>
                    <br/>
                    <button type="submit">Login</button>
                    <p>{message}</p>
                </div>
            </form>
        </div>
    )
}

export default Login;