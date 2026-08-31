import ChallengeFrame from "../components/ChallengeFrame";

function ChildCard() {
  return (
    <article className="w-full max-w-sm rounded-xl bg-white p-6 text-center shadow-lg">
      <h2 className="text-xl font-bold text-slate-900">Child Card</h2>
      <p className="mt-2 text-sm leading-6 text-slate-600">
        The parent uses Flexbox to center this card on both axes.
      </p>
    </article>
  );
}

export default function ParentChildLayout() {
  return (
    <ChallengeFrame title="Parent / Child Layout" description="A clear Flexbox centering example without absolute positioning.">
      <section className="flex min-h-[420px] items-center justify-center rounded-xl bg-indigo-600 p-5 sm:min-h-[500px] sm:p-10">
        <ChildCard />
      </section>
    </ChallengeFrame>
  );
}
