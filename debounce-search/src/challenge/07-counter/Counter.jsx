import { useState } from "react";
import ChallengeFrame, {
  primaryButtonClass,
  secondaryButtonClass,
} from "../components/ChallengeFrame";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <ChallengeFrame title="Counter" description="A small state update exercise with a non-negative boundary.">
      <section className="mx-auto max-w-md rounded-xl border border-slate-200 bg-white p-8 text-center shadow-sm">
        <p className="text-sm font-medium text-slate-500">Current count</p>
        <p className="my-6 text-7xl font-bold tabular-nums text-indigo-600" aria-live="polite">{count}</p>
        <div className="flex flex-wrap justify-center gap-3">
          <button type="button" onClick={() => setCount((current) => Math.max(0, current - 1))} disabled={count === 0} className={secondaryButtonClass}>Decrease</button>
          <button type="button" onClick={() => setCount(0)} className={secondaryButtonClass}>Reset</button>
          <button type="button" onClick={() => setCount((current) => current + 1)} className={primaryButtonClass}>Increase</button>
        </div>
      </section>
    </ChallengeFrame>
  );
}
