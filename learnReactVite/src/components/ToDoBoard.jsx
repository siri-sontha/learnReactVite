import Task  from "./Task.jsx"
import Button  from "./Button.jsx"

export default function ToDoBoard() {
    return (
        <>
            <div className="ToDoBoard-div-parent">
                <div className="ToDoBoard-div">
                    <h2>To Do List</h2>
                    <Task task="Pray" />
                    <Task task="Code"/>
                    <Task task="Take a break"/>
                    <Task task="Code"/>
                    <Task task="Eat"/>
                    <Task task="Sleep"/>
                    <Button />    
                </div>
            </div>
        </>
    )
}

