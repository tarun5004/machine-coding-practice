import { useMemo, useState } from "react";
import ChallengeFrame, { inputClass } from "../components/ChallengeFrame";

const users = [
  { id: 101, name: "Aarav Sharma", role: "Frontend Developer", experience: 1 },
  { id: 102, name: "Diya Patel", role: "UI Developer", experience: 2 },
  { id: 103, name: "Kabir Singh", role: "React Developer", experience: 3 },
  { id: 104, name: "Meera Joshi", role: "Frontend Intern", experience: 0 },
  { id: 105, name: "Rohan Verma", role: "Web Developer", experience: 2 },
];

export default function DynamicTable() {
  const [query, setQuery] = useState("");
  const [sortBy, setSortBy] = useState("name-asc");

  const visibleUsers = useMemo(() => {
    const filtered = users.filter((user) =>
      `${user.name} ${user.role}`.toLowerCase().includes(query.toLowerCase().trim()),
    );

    return [...filtered].sort((first, second) => {
      if (sortBy === "experience-asc") return first.experience - second.experience;
      if (sortBy === "experience-desc") return second.experience - first.experience;
      const direction = sortBy === "name-desc" ? -1 : 1;
      return first.name.localeCompare(second.name) * direction;
    });
  }, [query, sortBy]);

  return (
    <ChallengeFrame title="Dynamic Table" description="Mapped rows, stable keys, search, sorting, and mobile horizontal scrolling.">
      <section className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
        <div className="grid gap-3 border-b border-slate-200 p-4 sm:grid-cols-[1fr_240px]">
          <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search name or role" aria-label="Search table" className={inputClass} />
          <select value={sortBy} onChange={(event) => setSortBy(event.target.value)} aria-label="Sort users" className={inputClass}>
            <option value="name-asc">Name: A to Z</option>
            <option value="name-desc">Name: Z to A</option>
            <option value="experience-asc">Experience: Low to high</option>
            <option value="experience-desc">Experience: High to low</option>
          </select>
        </div>

        {visibleUsers.length ? (
          <div className="overflow-x-auto">
            <table className="w-full min-w-[620px] text-left text-sm">
              <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500">
                <tr><th className="px-5 py-3">ID</th><th className="px-5 py-3">Name</th><th className="px-5 py-3">Role</th><th className="px-5 py-3">Experience</th></tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {visibleUsers.map((user) => (
                  <tr key={user.id} className="hover:bg-slate-50">
                    <td className="px-5 py-4 text-slate-500">{user.id}</td>
                    <td className="px-5 py-4 font-medium">{user.name}</td>
                    <td className="px-5 py-4 text-slate-600">{user.role}</td>
                    <td className="px-5 py-4 text-slate-600">{user.experience} {user.experience === 1 ? "year" : "years"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p className="py-14 text-center text-slate-500">No matching rows found.</p>
        )}
      </section>
    </ChallengeFrame>
  );
}
