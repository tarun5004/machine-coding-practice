

const TodoList = ({todos, toggleTodo, deleteTodo}) => {
    return (
    <div className="mt-6 space-y-3  ">
        {todos.map((todo) => (
        <div 
        key={todo.id}
        className=" items-center flex justify-between rounded-lg border border-gray-200 p-4">
        <p className= {todo.isCompleted ? "text-gray-400 line-through" : "text-gray-800"}> {todo.task}</p>
        

        <div className="flex gap-3">
            <button
            onClick={()=> toggleTodo(todo.id)}
            className="rounded-md bg-green-500 px-3 py-1 text-sm text-white hover:bg-green-600">
                Done
            </button>

            <button 
            onClick={()=> deleteTodo(todo.id)}
            className="rounded-md bg-red-500 px-3 py-1 text-sm text-white hover:bg-red-600">
                Delete
            </button>
        </div>
    </div>
    ))}
    </div>
    )
}

export default TodoList
