import { useEffect, useState } from "react";
import ChallengeFrame, { inputClass } from "../components/ChallengeFrame";

const skills = [
  "React", "JavaScript", "HTML", "CSS", "Tailwind CSS", "Git", "REST API",
  "Responsive Design", "Accessibility", "Redux", "Node.js", "Express.js",
];

export default function DebouncedSearch() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const trimmedQuery = query.trim();
    if (!trimmedQuery) return undefined;

    const timeoutId = setTimeout(() => {
      setResults(skills.filter((skill) => skill.toLowerCase().includes(trimmedQuery.toLowerCase())));
      setIsLoading(false);
    }, 450);

    return () => clearTimeout(timeoutId);
  }, [query]);

  function handleQueryChange(event) {
    const nextQuery = event.target.value;
    setQuery(nextQuery);
    setIsLoading(Boolean(nextQuery.trim()));
    if (!nextQuery.trim()) setResults([]);
  }

  return (
    <ChallengeFrame title="Debounced Search" description="A real 450ms debounce using setTimeout and useEffect cleanup.">
      <section className="mx-auto max-w-2xl rounded-xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7">
        <label htmlFor="skill-search" className="mb-2 block text-sm font-medium">Search frontend skills</label>
        <input id="skill-search" value={query} onChange={handleQueryChange} placeholder="Try React or CSS" className={inputClass} />

        <div className="mt-5" aria-live="polite">
          {!query.trim() && <p className="text-sm text-slate-500">Type to start searching.</p>}
          {isLoading && <p className="text-sm text-indigo-600">Searching after you stop typing...</p>}
          {!isLoading && query.trim() && results.length > 0 && (
            <ul className="divide-y divide-slate-200 rounded-lg border border-slate-200">
              {results.map((skill) => <li key={skill} className="px-4 py-3 text-sm">{skill}</li>)}
            </ul>
          )}
          {!isLoading && query.trim() && results.length === 0 && <p className="rounded-lg bg-slate-50 py-8 text-center text-sm text-slate-500">No matching skills found.</p>}
        </div>
      </section>
    </ChallengeFrame>
  );
}
