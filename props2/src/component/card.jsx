import React from "react";
import "./card.css"


function Card(props){
    return (
        <div className="card">
            <div className="top">
                <img src={props.brandlogo}></img>
                <button>Save</button>
            </div>

            <div className="center">
                <h3>{props.company}<span>{props.posted}</span></h3>
                <h2>{props.title}</h2>
                <div className="tag">
                    <button>{props.tag[0]}</button>
                    <button>{props.tag[1]}</button>
                </div>
            </div>
            
            <div className="bottom">
                <div>
                    <h3>{props.salary}</h3>
                    <p>{props.location}</p>
                </div>
                <button>Apply now</button>
                
            </div>

        </div>
    )
}
export default Card;