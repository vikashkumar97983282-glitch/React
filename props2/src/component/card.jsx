import React from "react";
import "./card.css"


function Card(){
    return (
        <div className="card">
            <div className="top">
                <img src="https://plus.unsplash.com/premium_photo-1683120966127-14162cdd0935?q=80&w=363&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></img>
                <button>Save</button>
            </div>

            <div className="center">
                <h3>Amazon<span>5days a go</span></h3>
                <h2>Graphics Designer</h2>
                <div className="tag">
                    <button>part time</button>
                    <button>senior level</button>
                </div>
            </div>
            
            <div className="bottom">
                <div>
                    <h3>rs:1500rs</h3>
                    <p>Mountaion view, CA</p>
                </div>
                <button>Apply now</button>
                
            </div>

        </div>
    )
}
export default Card;