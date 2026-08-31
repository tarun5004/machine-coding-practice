import { useState } from "react";
import ChallengeFrame from "../components/ChallengeFrame";

const tabs = [
  { id: "home", label: "Home", title: "Welcome home", content: "Review your current practice plan and continue from where you stopped." },
  { id: "profile", label: "Profile", title: "Your profile", content: "Keep your placement details and strongest frontend topics in one place." },
  { id: "settings", label: "Settings", title: "Practice settings", content: "Choose the challenge difficulty and the amount of time available." },
];

export default function Tabs() {
  const [activeTab, setActiveTab] = useState("home");
  const activeContent = tabs.find((tab) => tab.id === activeTab);

  return (
    <ChallengeFrame title="Tabs" description="State-driven selected styles and conditional content.">
      <section className="mx-auto max-w-2xl overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
        <div role="tablist" aria-label="Account sections" className="flex border-b border-slate-200">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              id={`tab-${tab.id}`}
              type="button"
              role="tab"
              aria-selected={activeTab === tab.id}
              aria-controls={`panel-${tab.id}`}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 px-4 py-3 text-sm font-semibold focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-indigo-500 ${activeTab === tab.id ? "border-b-2 border-indigo-600 text-indigo-600" : "text-slate-500 hover:bg-slate-50 hover:text-slate-800"}`}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div id={`panel-${activeTab}`} role="tabpanel" aria-labelledby={`tab-${activeTab}`} className="min-h-56 p-6 sm:p-8">
          <h2 className="text-xl font-bold">{activeContent.title}</h2>
          <p className="mt-3 leading-7 text-slate-600">{activeContent.content}</p>
        </div>
      </section>
    </ChallengeFrame>
  );
}
