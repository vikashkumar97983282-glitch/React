import { useState } from "react"
import "./forget.css"
import { useNavigate } from 'react-router-dom'

function Forget(){

    const [newpass,setNewpass] = useState("");
    const [confirm,setConfirm] = useState("");
    const [mes,setMes] = useState("")

    const navigate = useNavigate();

    const clk = (e)=>{
        e.preventDefault()

        if (newpass !== "" && newpass === confirm){
            setNewpass("")
            setConfirm("")
            alert("password update sucessfully")
            navigate('/')
        }
        else {
            setConfirm("")
            setMes("confirm password incorrect")
        }

        
    }

    return(
        <div className="forg">
            <form >
                <div className="forcont">
                    <div className="image">
                        <img src="https://cdn-icons-png.flaticon.com/512/6195/6195699.png" alt="" />
                    </div>
                    <input type="password" value={newpass} placeholder="new password" required onChange={(e)=>setNewpass(e.target.value)}/>
                    <br/>
                    <input type="password" value={confirm} placeholder="confirm password" required onChange={(e)=>setConfirm(e.target.value)}/>
                    <br/>
                    <button onClick={clk}>submit</button>
                    <h1>{mes}</h1>
                </div>
            </form>
        </div>
    )
}

export default Forget;