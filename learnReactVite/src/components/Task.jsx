
export default function Task({task = "Add your task here", id = "1" }){

    return(
        <>
            <div className="Task-div">
                <p>{id}.</p>
                <input type="checkbox" className="Task-checkbox"></input>
                <p>{task}</p>
                <p>...</p>
            </div>
        </>
    )
}
