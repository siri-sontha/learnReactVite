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
            const newTask = {
                id: newId,
                text: inputText,
                isComplete: false,
            }
            setTasks([...tasks, newTask])
            console.log('new task added with id ' + newId)
            inputRef.current.value = ""
        }
    }

    const del = (taskId) => {
        const updatedTasks = tasks.filter(task => task.id !== taskId)
        setTasks(updatedTasks)
        console.log("Deleted task with id:", taskId)
    }

    const finish = (taskId) => {
        const updatedTasks = tasks.map(task => task.id === taskId ? { ...task, isComplete: !task.isComplete } : task)
        setTasks(updatedTasks)
    }

    return (
        <>
            {tasks.map(task => (
                <Task key={task.id} id={task.id} task={task} onDelete={() => del(task.id)} finish={() => finish(task.id)} />
            ))}
            <div className="Insert-div">
                <input ref={inputRef} type="text" placeholder="Add Your Task" />
                <button onClick={add}>Add <span>+</span></button>
            </div>
        </>
    )
}