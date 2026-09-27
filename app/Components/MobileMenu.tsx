"use client";

import Link from "next/link";
import Image from "next/image";

const links = [
  { name: "Home", href: "/" },
  { name: "Medical & Lab Equipment", href: "/equipment" },
  { name: "Catalogs", href: "/catalogs" },
  { name: "About Us", href: "/about" },
  { name: "Contact Us", href: "/contact" },
];

export default function MobileMenu({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (v: boolean) => void;
}) {
  if (!open) return null;

  return (
    <div className="md:hidden border-t bg-white shadow-lg">
      {/* Company Brand / Logo Header in Mobile Drawer */}
      <div className="flex items-center justify-between px-4 py-3 border-b bg-gray-50">
        <div className="flex items-center gap-2">
          {/* Unsplash image used as a custom lab/medical company logo icon */}
          <div className="relative w-8 h-8 overflow-hidden rounded-full border border-teal-600">
            <Image
              src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=100&auto=format&fit=crop&q=60"
              alt="Labova Scientific Logo"
              fill
              className="object-cover"
            />
          </div>
          <span className="font-bold text-lg text-teal-800 tracking-wide">
            LABOVA MED
          </span>
        </div>
      </div>

      {/* Navigation Links */}
      <div className="flex flex-col p-4 space-y-1">
        {links.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            onClick={() => setOpen(false)}
            className="rounded px-3 py-2 text-gray-700 font-medium hover:bg-teal-50 hover:text-teal-700 transition-colors"
          >
            {link.name}
          </Link>
        ))}

        {/* Action Buttons matching header tools */}
        <div className="pt-4 mt-2 border-t flex flex-col gap-2">
          <Link
            href="/quote"
            onClick={() => setOpen(false)}
            className="w-full text-center bg-emerald-600 text-white py-2 rounded font-medium hover:bg-emerald-700 transition-colors"
          >
            Request Quote
          </Link>
          <div className="text-sm text-gray-500 text-center py-1">
            Support: <span className="text-gray-700 font-semibold">info@labovamed.com</span>
          </div>
        </div>
      </div>
    </div>
  );
}