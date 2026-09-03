import { useEffect, useState } from "react";

const menuItems = [
  { id: 1, name: "Caramel Macchiato", category: "Espresso", price: "$5.45" },
  { id: 2, name: "Iced Brown Sugar Oatmilk Shaken Espresso", category: "Cold coffee", price: "$6.25" },
  { id: 3, name: "Caffe Latte", category: "Espresso", price: "$4.95" },
  { id: 4, name: "Matcha Tea Latte", category: "Tea", price: "$5.75" },
  { id: 5, name: "Chocolate Croissant", category: "Bakery", price: "$4.25" },
  { id: 6, name: "Strawberry Açaí Refresher", category: "Refreshers", price: "$5.95" },
];

function DebouncedSearch() {
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedTerm, setDebouncedTerm] = useState("");

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedTerm(searchTerm.trim().toLowerCase());
    }, 500);

    return () => clearTimeout(timerId);
  }, [searchTerm]);

  const isSearching = searchTerm.trim().toLowerCase() !== debouncedTerm;
  const filteredItems = menuItems.filter((item) => {
    const searchableText = `${item.name} ${item.category}`.toLowerCase();
    return searchableText.includes(debouncedTerm);
  });

  return (
    <section className="mx-auto max-w-4xl px-4 py-10">
      <div className="mb-6 text-center">
        <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-green-800">
          Explore the menu
        </p>
        <h1 className="text-3xl font-bold text-stone-900">What are you craving?</h1>
      </div>

      <label className="mx-auto block max-w-xl">
        <span className="sr-only">Search the menu</span>
        <input
          type="search"
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
          placeholder="Search drinks, food, or categories"
          className="w-full rounded-full border border-stone-300 bg-white px-5 py-3 text-stone-900 shadow-sm outline-none transition focus:border-green-700 focus:ring-2 focus:ring-green-100"
        />
      </label>

      <div className="mt-8 min-h-32">
        {isSearching ? (
          <p className="text-center text-stone-500">Searching the menu...</p>
        ) : filteredItems.length === 0 ? (
          <p className="text-center text-stone-500">No menu items match that search.</p>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2">
            {filteredItems.map((item) => (
              <article key={item.id} className="rounded-xl border border-stone-200 bg-white p-5 shadow-sm">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h2 className="font-semibold text-stone-900">{item.name}</h2>
                    <p className="mt-1 text-sm text-stone-500">{item.category}</p>
                  </div>
                  <span className="font-semibold text-green-800">{item.price}</span>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default DebouncedSearch;