import { useEffect, useState } from "react"
import Task from "./Task"
import TodoList from "./TodoList"


const Todo = () => {
    

    const[task, setTask] =useState("");
    const[todos, setTodos] = useState(()=> {
        const savedTodos = localStorage.getItem("todos");

        return savedTodos ? JSON.parse(savedTodos) : [];
    });

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    const addTodo =() => {
        if(task.trim() === "") return;

        setTodos(prev => [
            ...prev, {
                id:Date.now(),
                task,
                isCompleted: false
            }
        ])
        setTask("");
    }

    const toggleTodo = (id)=> {
        setTodos(prev => 
            prev.map(todo => 
                todo.id === id
                ? {...todo, isCompleted: !todo.isCompleted}
                :todo
            )
        );
    };

    const deleteTodo = (id) => {
        setTodos(prev => 
            prev.filter(todo => todo.id !== id)
        );
    };

    return (
    <div className='min-h-screen bg-amber-200  px-4 py-10'>
        <div className="mx-auto max-w-xl rounded-2xl bg-amber-50 p-6 shadow-lg">
            <h1 className="mb-6 text-center text-3xl font-bold text-amber-500">
                Cryboy Todo List
            </h1>
            

            <Task
                task={task}
                setTask={setTask}
                addTodo={addTodo}
                />

            <TodoList
                todos={todos}
                toggleTodo={toggleTodo}
                deleteTodo={deleteTodo}
                />
        </div>
    </div>
    )
}

export default Todo
