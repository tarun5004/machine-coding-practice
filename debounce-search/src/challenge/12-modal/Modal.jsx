import { useEffect, useRef, useState } from "react";
import ChallengeFrame, {
  primaryButtonClass,
  secondaryButtonClass,
} from "../components/ChallengeFrame";

function ModalDialog({ onClose }) {
  const closeButtonRef = useRef(null);

  useEffect(() => {
    closeButtonRef.current?.focus();
    function handleKeyDown(event) {
      if (event.key === "Escape") onClose();
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 p-4"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <section role="dialog" aria-modal="true" aria-labelledby="modal-title" className="w-full max-w-md rounded-xl bg-white p-6 shadow-2xl">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h2 id="modal-title" className="text-xl font-bold">Confirm practice session</h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">Start a focused 45-minute machine-coding session?</p>
          </div>
          <button ref={closeButtonRef} type="button" onClick={onClose} className="rounded-lg px-2 py-1 text-sm font-semibold text-slate-500 hover:bg-slate-100" aria-label="Close modal">Close</button>
        </div>
        <div className="mt-6 flex justify-end gap-3">
          <button type="button" onClick={onClose} className={secondaryButtonClass}>Cancel</button>
          <button type="button" onClick={onClose} className={primaryButtonClass}>Start session</button>
        </div>
      </section>
    </div>
  );
}

export default function Modal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <ChallengeFrame title="Modal" description="Overlay close, close button, and Escape-key support.">
      <section className="mx-auto max-w-xl rounded-xl border border-slate-200 bg-white p-8 text-center shadow-sm">
        <h2 className="text-xl font-bold">Ready to practise?</h2>
        <p className="my-4 text-slate-600">Open the modal and try closing it in three different ways.</p>
        <button type="button" onClick={() => setIsOpen(true)} className={primaryButtonClass}>Open modal</button>
      </section>
      {isOpen && <ModalDialog onClose={() => setIsOpen(false)} />}
    </ChallengeFrame>
  );
}
