"use client";

import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");

  return (
    <div className="rounded-xl bg-gray-800 p-6 text-white">
      <h3 className="text-lg font-semibold">Subscribe to Newsletter</h3>
      <p className="mt-1 text-sm text-gray-300">
        Get the latest updates and offers.
      </p>

      <div className="mt-4 flex gap-2">
        <input
          type="email"
          placeholder="Enter email"
          className="w-full rounded-lg px-3 py-2 text-black outline-none"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button className="rounded-lg bg-blue-600 px-4 py-2">
          Subscribe
        </button>
      </div>
    </div>
  );
}