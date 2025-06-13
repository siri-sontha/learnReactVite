
export default function Task({task = "Add your task here"}){

    return(
        <>
            <div className="Task-div">
                <input type="checkbox" className="Task-checkbox"></input>
                <p>{task}</p>
                <p>...</p>
            </div>
        </>
    )
}