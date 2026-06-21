import React from "react";
import { useState } from "react";
import axios from "axios";


function Extra(){

    const [result, setResult] = useState(null);

    const user = async ()=>{
        let res = await axios.get('http://localhost:3000/client',{withCredentials:true});
        
        setResult(res.data[0])
        
    }
    console.log(result)

    return (
        <div className="m-10 p-20">
            <h1>hello users</h1>
            <button onClick={user}>click me</button>
            {/* <h1>{result[0].avatar}</h1> */}
             {/* render only after avatar exists */}
            {result?.avatar && (
                <img
                    src={`http://localhost:3000/uploads/${result.avatar}`}
                    alt="avatar"
                    width="800"
                />
            )}
        </div>
    )
}

export default Extra;