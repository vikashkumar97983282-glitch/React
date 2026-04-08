import React, { useContext } from "react";
import About from "./about";
import Form from "./form";
import { Link } from "react-router-dom";
import { UserContext } from "../hooks/user-context";


function Home(){
 const {users} = useContext(UserContext)
 console.log(users)
    return(
        <div className="home">
            <h1>Home page</h1>
            <Link to="/about">about</Link>
            <Link to="/form" >form</Link>
            <p>this is our home page management </p>
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

export default Home;