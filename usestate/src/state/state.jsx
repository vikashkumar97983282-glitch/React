import { useActionState, useState } from 'react';
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


    return(
        <div className='st'>
            <h1>the number is {num}</h1>
            <button onClick={Increment}>Increment</button>
            <button onClick={Decrement}>Decrement</button>
            <button onClick={jumpup}>jumpup</button>
            <button onClick={jumpback}>jumpback</button>
        </div>
    )
}

export default State;