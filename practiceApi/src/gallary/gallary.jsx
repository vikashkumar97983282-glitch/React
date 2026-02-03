import React from "react";
import axios from 'axios'
import { useState } from "react";
import './gallary.css'


function Gallary(){

    const [userData, setUserData] = useState([]);

    const getdata = async ()=>{
        const response = await axios.get('https://picsum.photos/v2/list?page=2&limit=100')

       
        setUserData(response.data)
        console.log(response.data)
    }



    return (
        <div>
            <h1>vikash kumar</h1>
            <button onClick={getdata}>data</button>
            <div className="parent">
                {userData.map((elem,idx)=>{
                    return (<div key={idx} className="imgcont">
                        <img src={elem.download_url} alt="" />
                        <br/>
                        <h2>{elem.author}</h2>
                    </div>)
                })}
            </div>
        </div>
    )
}

export default Gallary;