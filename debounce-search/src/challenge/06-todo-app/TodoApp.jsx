import { useEffect, useState } from "react";
import ChallengeFrame, {
  inputClass,
  primaryButtonClass,
  secondaryButtonClass,
} from "../components/ChallengeFrame";

const STORAGE_KEY = "placement-practice-todos";

function createId() {
  return globalThis.crypto?.randomUUID?.() ?? `${Date.now()}-${Math.random()}`;
}

function TodoItem({ todo, onToggle, onDelete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [draft, setDraft] = useState(todo.text);

  function saveEdit() {
    const trimmedDraft = draft.trim();
    if (!trimmedDraft) return;
    onEdit(todo.id, trimmedDraft);
    setIsEditing(false);
  }

  return (
    <li className="flex flex-col gap-3 rounded-lg border border-slate-200 p-3 sm:flex-row sm:items-center">
      {isEditing ? (
        <input value={draft} onChange={(event) => setDraft(event.target.value)} className={`${inputClass} flex-1`} autoFocus />
      ) : (
        <label className="flex flex-1 cursor-pointer items-center gap-3">
          <input type="checkbox" checked={todo.completed} onChange={() => onToggle(todo.id)} className="h-4 w-4 accent-indigo-600" />
          <span className={todo.completed ? "text-slate-400 line-through" : "text-slate-800"}>{todo.text}</span>
        </label>
      )}
      <div className="flex gap-2">
        {isEditing ? (
          <button type="button" onClick={saveEdit} className={primaryButtonClass}>Save</button>
        ) : (
          <button type="button" onClick={() => setIsEditing(true)} className={secondaryButtonClass}>Edit</button>
        )}
        <button type="button" onClick={() => onDelete(todo.id)} className="rounded-lg px-3 py-2 text-sm font-semibold text-red-600 hover:bg-red-50">Delete</button>
      </div>
    </li>
  );
}

export default function TodoApp() {
  const [todos, setTodos] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY)) ?? [];
    } catch {
      return [];
    }
  });
  const [text, setText] = useState("");
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  function addTodo(event) {
    event.preventDefault();
    const trimmedText = text.trim();
    if (!trimmedText) return;
    setTodos((current) => [...current, { id: createId(), text: trimmedText, completed: false }]);
    setText("");
  }

  const visibleTodos = todos.filter((todo) => {
    if (filter === "active") return !todo.completed;
    if (filter === "completed") return todo.completed;
    return true;
  });

  return (
    <ChallengeFrame title="Todo App" description="Add, edit, delete, complete, filter, and persist tasks with localStorage.">
      <section className="mx-auto max-w-3xl rounded-xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7">
        <form onSubmit={addTodo} className="flex flex-col gap-3 sm:flex-row">
          <input value={text} onChange={(event) => setText(event.target.value)} placeholder="Add a new task" aria-label="New todo" className={`${inputClass} flex-1`} />
          <button type="submit" className={primaryButtonClass}>Add todo</button>
        </form>

        <div className="my-5 flex flex-wrap gap-2" aria-label="Todo filters">
          {["all", "active", "completed"].map((option) => (
            <button
              key={option}
              type="button"
              onClick={() => setFilter(option)}
              className={`rounded-full px-4 py-2 text-sm font-medium capitalize ${filter === option ? "bg-indigo-600 text-white" : "bg-slate-100 text-slate-700 hover:bg-slate-200"}`}
            >
              {option}
            </button>
          ))}
        </div>

        {visibleTodos.length ? (
          <ul className="space-y-3">
            {visibleTodos.map((todo) => (
              <TodoItem
                key={todo.id}
                todo={todo}
                onToggle={(id) => setTodos((current) => current.map((item) => item.id === id ? { ...item, completed: !item.completed } : item))}
                onDelete={(id) => setTodos((current) => current.filter((item) => item.id !== id))}
                onEdit={(id, nextText) => setTodos((current) => current.map((item) => item.id === id ? { ...item, text: nextText } : item))}
              />
            ))}
          </ul>
        ) : (
          <p className="rounded-lg bg-slate-50 py-10 text-center text-sm text-slate-500">No {filter === "all" ? "" : filter} tasks found.</p>
        )}
      </section>
    </ChallengeFrame>
  );
}
