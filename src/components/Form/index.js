import React from "react"


export function Input(props){
    return <input {...props}></input>
}

export function Submit(props) {
    return (
        <button {...props}>Submit</button>
    )
}