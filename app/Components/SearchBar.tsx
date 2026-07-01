"use client";

import { Search } from "lucide-react";
import { useState } from "react";

export default function SearchBar() {
  const [query, setQuery] = useState("");

  return (
    <div className="flex w-full max-w-md items-center rounded-lg border bg-white px-3 py-2 shadow-sm">
      <Search className="text-gray-500" size={18} />

      <input
        type="text"
        placeholder="Search..."
        className="ml-2 w-full outline-none"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <button className="rounded-md bg-blue-600 px-3 py-1 text-sm text-white">
        Go
      </button>
    </div>
  );
}