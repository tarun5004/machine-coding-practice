import { useState } from "react"


const Todo = () => {
    const [task, setTask] = useState("");
    const handleChange = (e) => {
        setTask(e.target.value)
    }
    return (
    <div>
        <div>
            <input value={task} onChange={handleChange} type="text" />
            <button>Add task</button>
        </div>
    </div>
    )
}

export default Todo
