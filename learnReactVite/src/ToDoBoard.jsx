import Task  from "./Task.jsx"
import Button  from "./Button.jsx"

export default function ToDoBoard() {
    return (
        <>
            <div className="ToDoBoard-div-parent">
                <div className="ToDoBoard-div">
                    <h2>To Do List</h2>
                    <Task name="Pray" />
                    <Task name="Code"/>
                    <Task name="Take a break"/>
                    <Task name="Code"/>
                    <Task name="Eat"/>
                    <Task name="Sleep"/>
                    <Button />    
                </div>
            </div>
        </>
    )
}

