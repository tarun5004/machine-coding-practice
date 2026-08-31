import { useEffect, useState } from "react";
import ChallengeFrame, { primaryButtonClass } from "../components/ChallengeFrame";

export default function ApiDataDisplay() {
  const [users, setUsers] = useState([]);
  const [status, setStatus] = useState("loading");
  const [retryCount, setRetryCount] = useState(0);

  useEffect(() => {
    const controller = new AbortController();

    fetch("https://jsonplaceholder.typicode.com/users", { signal: controller.signal })
      .then((response) => {
        if (!response.ok) throw new Error(`Request failed with status ${response.status}`);
        return response.json();
      })
      .then((data) => {
        setUsers(data);
        setStatus(data.length ? "success" : "empty");
      })
      .catch((error) => {
        if (error.name !== "AbortError") setStatus("error");
      });

    return () => controller.abort();
  }, [retryCount]);

  return (
    <ChallengeFrame title="API Data Display" description="Fetch lifecycle with response.ok, loading, error, success, and empty states.">
      {status === "loading" && <p role="status" className="rounded-xl bg-white py-14 text-center text-slate-600">Loading users...</p>}

      {status === "error" && (
        <div role="alert" className="rounded-xl border border-red-200 bg-red-50 p-6 text-center">
          <p className="text-red-700">Could not load users. Check your connection and try again.</p>
          <button
            type="button"
            onClick={() => {
              setStatus("loading");
              setRetryCount((count) => count + 1);
            }}
            className={`${primaryButtonClass} mt-4`}
          >
            Retry
          </button>
        </div>
      )}

      {status === "empty" && <p className="rounded-xl bg-white py-14 text-center text-slate-500">The API returned no users.</p>}

      {status === "success" && (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {users.map((user) => (
            <article key={user.id} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <h2 className="font-bold">{user.name}</h2>
              <p className="mt-2 text-sm text-slate-600">{user.email}</p>
              <p className="mt-1 text-sm text-slate-600">{user.company.name}</p>
            </article>
          ))}
        </div>
      )}
    </ChallengeFrame>
  );
}
