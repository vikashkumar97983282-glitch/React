import { useState } from "react";
import './hooks4.css'


function HooksExample4(){

    const [first, setFirst] = useState("");
    const [last, setLast] = useState("");
    const [mobile, setMobile] = useState("");
    const [data,setData] = useState([])
   

    const addcontact= (e)=>{
        e.preventDefault();
        const copyData=[...data];
        copyData.push({first,last,mobile})
        
        setData(copyData)

        console.log(copyData)

    }

    const deletecont=(idx)=>{
        const copyData =[...data]

        console.log(copyData[idx])

        copyData.splice(idx,1)

        setData(copyData)

    }






    return (
        <div>
            <form onClick={(e)=>{e.preventDefault()}}>
                <input type="text" placeholder="first name" value={first} onChange={(e)=>setFirst(e.target.value)}/>
                <br/>
                <input type="text" placeholder="last name" value={last} onChange={(e)=>setLast(e.target.value)}/>
                <br/>
                <input type="moblie number" placeholder="Mobile number" value={mobile} onChange={(e)=>setMobile(e.target.value)}/>
                <br/>
                <button onClick={addcontact} >add</button>
                <ul>
                    {data.map(function(ele,idx){
                        return <div key={idx}>
                            <li>{ele.first}</li>
                            <button onClick={(e)=>{e.preventDefault()}}>show</button>
                            <button onClick={()=>{
                                deletecont(idx)
                            }}>delete</button>
                        </div>
                    })}
                </ul>
                
            </form>
        </div>
    )
}

export default HooksExample4;