import { useState } from "react";
import ChallengeFrame, { secondaryButtonClass } from "../components/ChallengeFrame";

const items = Array.from({ length: 32 }, (_, index) => ({
  id: index + 1,
  name: `Interview practice item ${index + 1}`,
}));
const ITEMS_PER_PAGE = 6;

export default function Pagination() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(items.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentItems = items.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <ChallengeFrame title="Pagination" description="Array slicing and clear first/last-page boundaries.">
      <section className="mx-auto max-w-3xl">
        <p className="mb-4 text-sm text-slate-600">Page {currentPage} of {totalPages}</p>
        <ul className="grid gap-3 sm:grid-cols-2">
          {currentItems.map((item) => (
            <li key={item.id} className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
              <span className="mr-3 font-bold text-indigo-600">#{item.id}</span>{item.name}
            </li>
          ))}
        </ul>

        <nav aria-label="Pagination" className="mt-6 flex flex-wrap items-center justify-center gap-2">
          <button type="button" onClick={() => setCurrentPage((page) => page - 1)} disabled={currentPage === 1} className={secondaryButtonClass}>Previous</button>
          {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
            <button
              key={page}
              type="button"
              onClick={() => setCurrentPage(page)}
              aria-current={page === currentPage ? "page" : undefined}
              className={`h-10 w-10 rounded-lg text-sm font-semibold ${page === currentPage ? "bg-indigo-600 text-white" : "border border-slate-300 bg-white text-slate-700 hover:bg-slate-50"}`}
            >
              {page}
            </button>
          ))}
          <button type="button" onClick={() => setCurrentPage((page) => page + 1)} disabled={currentPage === totalPages} className={secondaryButtonClass}>Next</button>
        </nav>
      </section>
    </ChallengeFrame>
  );
}
