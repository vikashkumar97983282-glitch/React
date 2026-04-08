import React, { useContext } from "react";
import Home from "./home";
import { Link } from "react-router-dom";
import { UserContext } from "../hooks/user-context";

function About(){
 const {users} = useContext(UserContext)
    return (
        <div>
            <h1>this is about page</h1>
            <Link to="/home">Home page</Link>
                     {users.map((user, index) => {
  return (
    <div key={index}>
      <p>{user.name}</p>
      <p>{user.password}</p>
    </div>
  );
})}
        </div>
    )
}

export default About;