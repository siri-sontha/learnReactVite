import { useRef, useEffect } from "react"
import trash from "../assets/trash-solid.svg" 
import Insert from './Insert.jsx'

export default function Task({task = "Add your task here", id}){

    return(
        <>
            <div className="Task-div">
                <p ref={currentIdRef}>{id}.</p>
                <input type="checkbox" className="Task-checkbox"></input>
                <p>{task}</p>
                <img src={trash} alt="delete" onClick={del} />
            </div>
        </>
    )
}