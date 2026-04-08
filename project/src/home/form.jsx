import React, { useRef } from "react";
import Home from "./home";
import { Link } from "react-router-dom";
import { UserContext } from "../hooks/user-context";
import { useContext } from "react";

function Form(){
    const nameRef = useRef();
    const passwordRef = useRef();
    const {users, setUsers} = useContext(UserContext)

    const handleSubmit = () => {
  const name = nameRef.current.value;
  const password = passwordRef.current.value;
  const newUser = {name,password}
  setUsers([...users,newUser])
  console.log(name, password);
};
    return (
        <div>

            <input type="text" name="username" id="" ref={nameRef} />
            <br/>
            <input type="text" name="password" id="" ref={passwordRef} />
            <br/>
            <button type="Submit" onClick={handleSubmit}>Add</button>
            <Link to="/home" >HOme</Link>
        </div>
    )
}

export default Form;