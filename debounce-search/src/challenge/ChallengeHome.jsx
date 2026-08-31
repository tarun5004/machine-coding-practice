import { useEffect, useState } from "react";
import { challenges } from "./challengeData";

function readChallengeId() {
  return window.location.hash.replace(/^#\/?/, "");
}

export default function ChallengeHome() {
  const [activeId, setActiveId] = useState(readChallengeId);

  useEffect(() => {
    function handleHashChange() {
      setActiveId(readChallengeId());
    }
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const activeChallenge = challenges.find((challenge) => challenge.id === activeId);
  if (activeChallenge) return <activeChallenge.Component />;

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <header className="border-b border-slate-200 bg-white px-4 py-5 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <h1 className="text-xl font-bold sm:text-2xl">Fresher Machine Coding Practice Lab</h1>
          <p className="text-sm text-slate-600"><strong className="text-indigo-600">14</strong> interview-ready React challenges</p>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">React Challenges</h2>
        <p className="mt-2 text-sm text-slate-600 sm:text-base">Practice forms, state, lists, async data, and common UI patterns.</p>

        <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {challenges.map((challenge) => (
            <article key={challenge.id} className="flex min-h-44 flex-col rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-bold"><span className="mr-2 text-indigo-600">{challenge.number}</span>{challenge.name}</h3>
                <span className="text-xs font-medium text-green-700">{challenge.difficulty}</span>
              </div>
              <p className="mt-3 text-xs font-medium uppercase tracking-wide text-slate-500">{challenge.category}</p>
              <p className="mt-4 flex-1 text-sm leading-6 text-slate-600">{challenge.description}</p>
              <button
                type="button"
                onClick={() => {
                  window.location.hash = `/${challenge.id}`;
                }}
                className="mt-4 self-start rounded-lg bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:self-end"
              >
                Open challenge
              </button>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
