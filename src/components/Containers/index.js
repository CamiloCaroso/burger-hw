import React from "react"
import "./style.css"


export function Container(props){
    return <div className="container">{props.children}</div>
}

export function FoodWrapper(props){
    return <div className="foodWrapper">{props.children}</div>
}

