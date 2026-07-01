"use client";

import Link from "next/link";

const links = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
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
    <div className="md:hidden border-t bg-white">
      <div className="flex flex-col p-4">
        {links.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            onClick={() => setOpen(false)}
            className="rounded px-3 py-2 hover:bg-gray-100"
          >
            {link.name}
          </Link>
        ))}
      </div>
    </div>
  );
}