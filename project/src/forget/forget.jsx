import { use, useState } from "react"
import "./forget.css"

function Forget(){

    const [newpass,setNewpass] = useState("");
    const [confirm,setConfirm] = useState("");

    const clk = (e)=>{
        e.preventDefault()
        setNewpass(newpass)
        setConfirm(confirm)
    }

    return(
        <div className="forg">
            <form onClick={clk}>
                <div className="forcont">
                    <div className="image">
                        <img src="https://cdn-icons-png.flaticon.com/512/6195/6195699.png" alt="" />
                    </div>
                    <input type="password" placeholder="new password" required onChange={(e)=>setNewpass(e.target.value)}/>
                    <br/>
                    <input type="password" placeholder="confirm password" required onChange={(e)=>setConfirm(e.target.value)}/>
                    <br/>
                    <button onChange={clk}>submit</button>
                </div>
            </form>
        </div>
    )
}

export default Forget;