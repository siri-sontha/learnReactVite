import Task  from "./Task.jsx"
import Insert  from "./Insert.jsx"


export default function ToDoBoard() {
    return (
        <>
            <div className="ToDoBoard-div-parent">
                <div className="ToDoBoard-div">
                    <h2>To Do List</h2>
                    <Insert /> 
                </div>
            </div>
        </>
    )
}

