import { useState } from "react";
import ChallengeFrame from "../components/ChallengeFrame";

const questions = [
  { id: 1, question: "What is React state?", answer: "State is component data that can change over time and trigger a re-render." },
  { id: 2, question: "Why do lists need keys?", answer: "Stable keys help React identify which list items changed, moved, or were removed." },
  { id: 3, question: "What does useEffect do?", answer: "useEffect synchronizes a component with an external system after rendering." },
  { id: 4, question: "What is a controlled input?", answer: "Its displayed value is controlled by React state and updated through an event handler." },
];

export default function Accordion() {
  const [openId, setOpenId] = useState(null);

  return (
    <ChallengeFrame title="Accordion" description="Only one accessible answer panel can be open at a time.">
      <div className="mx-auto max-w-2xl divide-y divide-slate-200 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
        {questions.map((item) => {
          const isOpen = openId === item.id;
          const panelId = `answer-${item.id}`;
          return (
            <section key={item.id}>
              <button
                type="button"
                onClick={() => setOpenId(isOpen ? null : item.id)}
                aria-expanded={isOpen}
                aria-controls={panelId}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-semibold hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-indigo-500"
              >
                {item.question}
                <span aria-hidden="true" className="text-xl text-indigo-600">{isOpen ? "−" : "+"}</span>
              </button>
              {isOpen && (
                <div id={panelId} className="px-5 pb-5 text-sm leading-6 text-slate-600">
                  {item.answer}
                </div>
              )}
            </section>
          );
        })}
      </div>
    </ChallengeFrame>
  );
}
