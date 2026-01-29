import {useState } from 'react';
import './state.css'

const State = ()=>{

    const [num,setNum] = useState(10);

    function Increment(){
        setNum(num+1)
    }

    function Decrement(){
        setNum(num-1);
    }

    const jumpup=()=>{
        setNum(num+5);
    }

    const jumpback=()=>{
        setNum(num-5);
    }

    const [user,setUser] = useState({name:"vikash",age:20})

    const changeuser =()=>{
        const newuser={...user};
        newuser.name="rahul";
        newuser.age=30;
        setUser(newuser);
    }


    return(
        <div className='st'>
            <h1>the number is {num}</h1>
            <button onClick={Increment}>Increment</button>
            <button onClick={Decrement}>Decrement</button>
            <button onClick={jumpup}>jumpup</button>
            <button onClick={jumpback}>jumpback</button>

            <h1>my name is {user.name}. and i am {user.age} years old.</h1>
            <button onClick={changeuser}>changeuser</button>
        </div>
    )
}

export default State;