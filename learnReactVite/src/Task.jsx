export default function Task({ name = "Add your task here" }){
    return(
        <>
            <div className="Task-div">
                <input type="checkbox" className="Task-checkbox"></input>
                <p>{name}</p>
                <p>...</p>
            </div>
        </>
    )
}