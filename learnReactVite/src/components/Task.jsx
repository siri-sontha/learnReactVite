import { useRef, useEffect } from "react"
import trash from "../assets/trash-solid.svg" 

export default function Task({task = "Add your task here", id, onDelete, finish}){

    return(
        <>
            <div className="Task-div">
                <p>{id}.</p>
                <input type="checkbox" className="Task-checkbox" checked={task.isComplete} onChange={finish}></input>
                <p style={{textDecoration: task.isComplete ? "line-through" : "none"}}>{task.text}</p>
                <img src={trash} onClick={onDelete}/>
            </div>
        </>
    )
}