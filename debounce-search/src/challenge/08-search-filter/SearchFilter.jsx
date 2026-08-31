import { useState } from "react";
import ChallengeFrame, {
  inputClass,
  secondaryButtonClass,
} from "../components/ChallengeFrame";

const products = [
  { id: 1, name: "Wireless Keyboard", category: "Electronics", price: 2499 },
  { id: 2, name: "React Interview Notes", category: "Books", price: 499 },
  { id: 3, name: "Desk Lamp", category: "Home", price: 1299 },
  { id: 4, name: "Noise Cancelling Headphones", category: "Electronics", price: 6999 },
  { id: 5, name: "JavaScript Handbook", category: "Books", price: 699 },
  { id: 6, name: "Laptop Stand", category: "Home", price: 1599 },
];

export default function SearchFilter() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");

  const filteredProducts = products.filter((product) => {
    const matchesQuery = product.name.toLowerCase().includes(query.toLowerCase().trim());
    const matchesCategory = category === "All" || product.category === category;
    return matchesQuery && matchesCategory;
  });

  function clearFilters() {
    setQuery("");
    setCategory("All");
  }

  return (
    <ChallengeFrame title="Search + Filter" description="Plain JavaScript filter logic with combined search and category conditions.">
      <section>
        <div className="mb-6 grid gap-3 rounded-xl border border-slate-200 bg-white p-4 sm:grid-cols-[1fr_220px_auto]">
          <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search products" aria-label="Search products" className={inputClass} />
          <select value={category} onChange={(event) => setCategory(event.target.value)} aria-label="Filter by category" className={inputClass}>
            {["All", "Electronics", "Books", "Home"].map((option) => <option key={option}>{option}</option>)}
          </select>
          <button type="button" onClick={clearFilters} className={secondaryButtonClass}>Clear filters</button>
        </div>

        {filteredProducts.length ? (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProducts.map((product) => (
              <article key={product.id} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                <p className="text-sm font-medium text-indigo-600">{product.category}</p>
                <h2 className="mt-2 font-bold">{product.name}</h2>
                <p className="mt-3 text-sm text-slate-600">₹{product.price.toLocaleString("en-IN")}</p>
              </article>
            ))}
          </div>
        ) : (
          <p className="rounded-xl border border-dashed border-slate-300 bg-white py-14 text-center text-slate-500">No products match these filters.</p>
        )}
      </section>
    </ChallengeFrame>
  );
}
