const Task = ({task, setTask, addTodo}) => {

    // console.log(handleValue);
    const handleValue= (e) => {
        setTask(e.target.value);

    }

    const handleKeyDown = (e) => {
        if(e.key === "Enter") {
            addTodo();
        }
    }
    return (
    <div className="flex gap-3">
        <input type="text" 
        placeholder="Enter your task..."
        value={task}
        onChange={handleValue}
        onKeyDown={handleKeyDown}
        className="h-11 rounded-lg border border-gray-300 px-4 text-black outline-none focus:border-amber-500 hover:border-amber-400 "/>
        
        <button 
        onClick={addTodo}
        className="h-11 rounded-lg bg-amber-500 px-5 font-medium text-white hover:bg-amber-600">
            Add Task
        </button>
    </div>
    )
}

export default Task
