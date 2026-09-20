"use client";

import { useMemo, useState } from "react";
import AnimalCard from "./AnimalCard";

export default function AnimalCatalog({ animals }) {
  const [category, setCategory] = useState("সব");
  const [sort, setSort] = useState("default");

  const visibleAnimals = useMemo(() => {
    const filtered = category === "সব" ? animals : animals.filter((animal) => animal.type === category);
    return [...filtered].sort((a, b) => sort === "low" ? a.price - b.price : sort === "high" ? b.price - a.price : a.id - b.id);
  }, [animals, category, sort]);

  return (
    <>
      <div className="catalog-toolbar">
        <div className="filter-buttons">
          {["সব", "গরু", "ছাগল"].map((item) => <button key={item} className={`btn ${category === item ? "btn-primary" : "btn-soft"}`} onClick={() => setCategory(item)}>{item}</button>)}
        </div>
        <select className="sort-select" value={sort} onChange={(event) => setSort(event.target.value)} aria-label="দাম অনুযায়ী সাজান">
          <option value="default">সাজান: নতুন আগে</option>
          <option value="low">দাম: কম থেকে বেশি</option>
          <option value="high">দাম: বেশি থেকে কম</option>
        </select>
      </div>
      <div className="animal-grid">{visibleAnimals.map((animal) => <AnimalCard key={animal.id} animal={animal} />)}</div>
    </>
  );
}
