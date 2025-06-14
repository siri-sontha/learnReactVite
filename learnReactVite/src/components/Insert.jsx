import { useRef, useState } from "react"
import Task from './Task.jsx'


export default function Insert() {

    const inputRef = useRef()

    const [tasks, setTasks] = useState([])
    
    const [id, setId] = useState(0)

    const add = () => {
        const inputText = inputRef.current.value.trim()
        if (inputText) {
            const newId = id + 1
            setId(newId)
            const newTask ={
                id : newId,
                text: inputText
            }
            setTasks([...tasks, newTask])
            inputRef.current.value = ""
        }
    }

    return (
        <>
             {tasks.map(task => (
          <Task key={task.id} id={task.id} task={task.text} />
            ))}
            <div className="Insert-div">
                <input ref={inputRef} type="text" placeholder="Add Your Task" />
                <button onClick={add}>Add <span>+</span></button>
            </div>
        </>
    )
}