import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">

      {/* HERO SECTION */}
      <section className="relative h-[90vh] w-full">

        {/* BACKGROUND IMAGE (ONLINE IMAGE) */}
        <Image
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80"
          alt="Hero Background"
          fill
          priority
          className="object-cover"
        />

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/50" />

        {/* CONTENT */}
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-6">

          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
            High Quality Laboratory & Industrial Solutions
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-zinc-200">
            Discover premium refrigeration systems, lab equipment, and industrial cooling solutions built for performance.
          </p>

          {/* SEARCH BAR */}
          <div className="mt-8 flex w-full max-w-xl overflow-hidden rounded-full bg-white shadow-lg">

            <input
              type="text"
              placeholder="Search products, categories..."
              className="w-full px-5 py-3 text-black outline-none"
            />

            <button className="bg-blue-600 px-6 py-3 font-medium text-white hover:bg-blue-700">
              Search
            </button>
          </div>

          {/* CTA BUTTONS */}
          <div className="mt-8 flex gap-4">
            <Link
              href="/products"
              className="rounded-full bg-white px-6 py-3 font-medium text-black hover:bg-zinc-200"
            >
              Explore Products
            </Link>

            <Link
              href="/contact"
              className="rounded-full border border-white px-6 py-3 font-medium text-white hover:bg-white hover:text-black"
            >
              Contact Us
            </Link>
          </div>

        </div>
      </section>

      {/* INFO SECTION */}
      <section className="px-6 py-20 bg-zinc-50 dark:bg-zinc-900">

        <div className="mx-auto max-w-6xl text-center">
          <h2 className="text-3xl font-bold text-black dark:text-white">
            Trusted Laboratory Cooling Equipment Manufacturer
          </h2>

          <p className="mt-4 text-zinc-600 dark:text-zinc-400">
            We provide Blood Bank Refrigerators, Freezers, Ice Flake Machines, and advanced cooling systems
            designed for hospitals, labs, and industrial use.
          </p>
        </div>

        {/* FEATURE GRID */}
        <div className="mx-auto mt-12 grid max-w-6xl gap-6 sm:grid-cols-2 md:grid-cols-3">

          <div className="rounded-xl bg-white p-6 shadow dark:bg-black">
            <h3 className="text-xl font-semibold">High Performance</h3>
            <p className="mt-2 text-sm text-zinc-500">
              Engineered for precision temperature control.
            </p>
          </div>

          <div className="rounded-xl bg-white p-6 shadow dark:bg-black">
            <h3 className="text-xl font-semibold">Certified Quality</h3>
            <p className="mt-2 text-sm text-zinc-500">
              ISO & international standard compliant systems.
            </p>
          </div>

          <div className="rounded-xl bg-white p-6 shadow dark:bg-black">
            <h3 className="text-xl font-semibold">Reliable Support</h3>
            <p className="mt-2 text-sm text-zinc-500">
              24/7 customer support and service assistance.
            </p>
          </div>

        </div>

      </section>

      {/* CTA SECTION */}
      <section className="px-6 py-24 text-center">

        <h2 className="text-3xl font-bold text-black dark:text-white">
          Need a Custom Cooling Solution?
        </h2>

        <p className="mt-4 text-zinc-600 dark:text-zinc-400">
          Contact our engineering team for tailored industrial solutions.
        </p>

        <Link
          href="/contact"
          className="mt-6 inline-block rounded-full bg-black px-8 py-3 text-white hover:bg-zinc-800 dark:bg-white dark:text-black"
        >
          Get Quote
        </Link>

      </section>

    </div>
  );
}