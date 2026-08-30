const TodoList = ({
    todos,
    toggleTodo,
    deleteTodo,
    startEdit,
    editingId,
    editTask,
    setEditTask,
    updateTodo,
    cancelEdit
}) => {
    return (
        <div className="mt-6 space-y-3">

            {todos.map((todo) => (
                <div
                    key={todo.id}
                    className="flex items-center justify-between rounded-lg border border-gray-200 p-4"
                >
                    {/* Task / Edit Input */}
                    {editingId === todo.id ? (
                        <input
                            value={editTask}
                            onChange={(e) => setEditTask(e.target.value)}
                            className="rounded-md border border-gray-300 px-3 py-1 text-black outline-none focus:border-blue-500"
                        />
                    ) : (
                        <p
                            className={
                                todo.isCompleted
                                    ? "text-gray-400 line-through"
                                    : "text-gray-800"
                            }
                        >
                            {todo.task}
                        </p>
                    )}

                    {/* Buttons */}
                    <div className="flex gap-2">

                        {editingId === todo.id ? (
                            <>
                                <button
                                    onClick={() => updateTodo(todo.id)}
                                    className="rounded-md bg-blue-500 px-3 py-1 text-sm text-white hover:bg-blue-600"
                                >
                                    Save
                                </button>

                                <button
                                    onClick={cancelEdit}
                                    className="rounded-md bg-gray-500 px-3 py-1 text-sm text-white hover:bg-gray-600"
                                >
                                    Cancel
                                </button>
                            </>
                        ) : (
                            <>
                                <button
                                    onClick={() => toggleTodo(todo.id)}
                                    className="rounded-md bg-green-500 px-3 py-1 text-sm text-white hover:bg-green-600"
                                >
                                    Done
                                </button>

                                <button
                                    onClick={() => deleteTodo(todo.id)}
                                    className="rounded-md bg-red-500 px-3 py-1 text-sm text-white hover:bg-red-600"
                                >
                                    Delete
                                </button>

                                <button
                                    onClick={() => startEdit(todo)}
                                    className="rounded-md bg-blue-400 px-3 py-1 text-sm text-white hover:bg-blue-500"
                                >
                                    Edit
                                </button>
                            </>
                        )}

                    </div>
                </div>
            ))}
        </div>
    );
};

export default TodoList;