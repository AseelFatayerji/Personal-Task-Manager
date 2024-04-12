

function Board({title}){
    return(
        <div className="task">
            <div className="task-header float space-between">
            <div ><label>{title}</label></div>
            <div><button>Add Task</button></div></div>
        </div>
    )
}

export default Board;