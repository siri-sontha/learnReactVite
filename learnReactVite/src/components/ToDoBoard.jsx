import Task  from "./Task.jsx"
import Insert  from "./Insert.jsx"


export default function ToDoBoard() {
    return (
        <>
            <div className="ToDoBoard-div-parent">
                <div className="ToDoBoard-div">
                    <h2>To Do List</h2>
                    <Task task="Pray" id="1"/>
                    <Task task="Code" id="2"/>
                    <Task task="Take a break" id="3"/>
                    <Task task="Code" id="4"/>
                    <Task task="Eat" id="5"/>
                    <Task task="Sleep" id="6"/>
                    <Insert /> 
                </div>
            </div>
        </>
    )
}

