import React, {useState} from "react";

export default function HookExample2(){
    const [user, setUser] = useState({
        name: "",
        age : 0,
        male:false,
        email: "",
    });
    return (
        <>
        <h1>User Information</h1>
        <h2>Name:{user.name}</h2>
        <h2>Age: {user.age}</h2>
        <h2>Email:{user.email}</h2>
        <h2>Gender:{user.male}</h2>
        <br/>
        <input type="text" placeholder="Name" onChange={(e)=> setUser({...user,name:e.target.value})} />
        <input type="email" placeholder="email" onChange={(e)=> setUser({...user,email:e.target.value})} />
        <input type="number" placeholder="age" onChange={(e)=> setUser({...user,age:e.target.value})} />
        <input type="checkbox" onChange={()=> setUser({...user,male: !user.value})} />
        <br/>
        <select>
            <option value="">Select City</option>
            <option value="India">India</option>
            <option value="New York">New York</option>
            <option value="Los Angeles">Los Angeles</option>
            </select>
        </>
    )
}