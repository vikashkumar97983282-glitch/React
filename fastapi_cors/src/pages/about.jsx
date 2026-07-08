import React, { useEffect, useState } from "react";
import axios from "axios";


function About(){
    
    const [data,setData] = useState({})

    useEffect(()=>{
        const fetchData = async ()=>{
            try{
                const response = await axios.get('http://127.0.0.1:8000/info');
                setData(response.data)
            } catch(error){
                console.error(error)
            }
        };
        fetchData()
    },[])

    return (
        <div className="min-h-screen bg-slate-50 p-6">
            <div className="mx-auto max-w-md rounded-xl bg-white p-6 shadow-md">
                <h1 className="text-2xl font-bold text-slate-800">this is about page</h1>
                <h2 className="mt-3 text-lg text-slate-600">API Message : {data.message}</h2>
                <h3 className="mt-2 text-sm font-medium text-blue-600">API Status : {data.status}</h3>
            </div>
        </div>
    )
}

export default About;