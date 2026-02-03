import React, { useEffect } from "react";
import axios from 'axios'
import { useState } from "react";
import './gallary.css'


function Gallary(){

    const [userData, setUserData] = useState([]);
    const [page,setPage] = useState(1);

    const getdata = async ()=>{
        const response = await axios.get(`https://picsum.photos/v2/list?page=${page}&limit=30`)
        setUserData(response.data)
    }

    useEffect(function(){
        getdata()
    },[page])



    return (
        <div className="cont">
            <h1>Vikash Kumar</h1>
            <div className="parent">
                {userData.map((elem,idx)=>{
                    return (
                    <a href={elem.url} key={idx}>
                        <div className="imgcont">
                        <img src={elem.download_url} alt="" />
                        <br/>
                        <h2>{elem.author}</h2>
                    </div>
                    </a>
                    )
                })}
            </div>
            <button onClick={()=>{
                if(page>1){
                    setPage(page-1)
                }
            }}>prev</button>
            <h3>Page- {page}</h3>
            <button onClick={()=>{
                if(page>0){
                    setPage(page+1)
                }
            }}>next</button>
        </div>
    )
}

export default Gallary;