"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Medical Equipment", href: "/equipment" },
  { name: "Catalogs", href: "/catalogs" },
  { name: "About Us", href: "/about" },
  { name: "Contact Us", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b bg-white shadow-sm">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4">
        {/* Lab Equipment Company Logo & Brand */}
        <Link href="/" className="flex items-center gap-3">
          <div className="relative h-10 w-10 overflow-hidden rounded-lg border border-teal-600 shadow-sm">
            <Image
              src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=100&auto=format&fit=crop&q=60"
              alt="Labova Scientific Logo"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold tracking-tight text-teal-800">
              LABOVA<span className="text-emerald-600">MED</span>
            </span>
            <span className="text-[10px] uppercase tracking-wider text-gray-500 font-medium">
              Scientific & Lab Equipment
            </span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="font-medium text-gray-700 transition hover:text-teal-600"
            >
              {item.name}
            </Link>
          ))}

          <Link
            href="/quote"
            className="rounded-lg bg-emerald-600 px-5 py-2.5 font-medium text-white shadow-sm transition hover:bg-emerald-700"
          >
            Request Quote
          </Link>
        </div>

        {/* Mobile Button Toggle */}
        <button
          className="rounded-lg p-2 text-gray-700 hover:bg-gray-100 md:hidden focus:outline-none"
          onClick={() => setOpen(!open)}
          aria-label="Toggle Menu"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="border-t bg-white md:hidden shadow-lg">
          <div className="flex flex-col p-4 space-y-1">
            {navLinks.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="rounded-md px-3 py-3 font-medium text-gray-700 hover:bg-teal-50 hover:text-teal-700 transition"
                onClick={() => setOpen(false)}
              >
                {item.name}
              </Link>
            ))}

            <div className="pt-4 mt-2 border-t flex flex-col gap-3">
              <Link
                href="/quote"
                onClick={() => setOpen(false)}
                className="w-full rounded-lg bg-emerald-600 py-2.5 text-center font-medium text-white shadow-sm transition hover:bg-emerald-700"
              >
                Request Quote
              </Link>
              <div className="text-center text-xs text-gray-500 py-1">
                Inquiries: <span className="font-semibold text-gray-700">info@labovamed.com</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}