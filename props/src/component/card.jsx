import "./card.css"

import React from "react";

const Container = (props)=> {

    console.log(props.user)


    return (
        <div className="cont">
        <img src={props.img}></img>
        <h1>{props.user}</h1>
        <h2>{props.dept}</h2>
        <p>I am interested in {props.skill}</p>
        <button>view profile</button>
        </div>
    )
}

export default Container;