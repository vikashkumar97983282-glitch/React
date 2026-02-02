import { use, useState } from "react"
import "./forget.css"

function Forget(){

    const [newpass,setNewpass] = useState("");
    const [confirm,setConfirm] = useState("");
    const [mes,setMes] = useState("")

    const clk = (e)=>{
        e.preventDefault()

        if (newpass !== "" && newpass === confirm){
            setNewpass("")
            setConfirm("")
            setMes("password update sucessfully")
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