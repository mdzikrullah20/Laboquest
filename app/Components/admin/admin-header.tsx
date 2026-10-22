
"use client";

import { Bell, Search, ChevronDown } from "lucide-react";

export default function AdminHeader() {
  return (
    <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-gray-200 bg-white px-4 pl-16 sm:px-6 md:pl-6">
      <div>
        <h2 className="text-lg font-semibold text-gray-900">
          Admin Panel
        </h2>
        <p className="hidden text-xs text-gray-500 sm:block">
          Manage your online store
        </p>
      </div>

      <div className="flex items-center gap-3 sm:gap-5">
        <div className="hidden items-center gap-2 rounded-lg border border-gray-200 px-3 py-2 lg:flex">
          <Search size={17} className="text-gray-400" />
          <input
            type="search"
            placeholder="Search..."
            aria-label="Search admin"
            className="w-36 bg-transparent text-sm outline-none"
          />
        </div>

        <button
          type="button"
          aria-label="Notifications"
          className="relative rounded-lg p-2 text-gray-500 hover:bg-gray-100"
        >
          <Bell size={20} />
          <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-red-500" />
        </button>

        <button
          type="button"
          className="flex items-center gap-2 rounded-lg p-1.5 hover:bg-gray-50"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-indigo-100 text-sm font-bold text-indigo-700">
            A
          </div>

          <div className="hidden text-left sm:block">
            <p className="text-sm font-semibold text-gray-800">
              Admin
            </p>
            <p className="text-xs text-gray-500">
              Store Manager
            </p>
          </div>

          <ChevronDown size={16} className="hidden text-gray-400 sm:block" />
        </button>
      </div>
    </header>
  );
}
