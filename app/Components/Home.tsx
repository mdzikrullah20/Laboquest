import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col">
      
      {/* HERO SECTION */}
      <section className="flex min-h-[80vh] items-center justify-center px-6">
        <div className="flex max-w-3xl flex-col items-center gap-6 text-center">
          
          <Image
            src="/next.svg"
            alt="Logo"
            width={120}
            height={30}
            priority
            className="dark:invert"
          />

          <h1 className="text-4xl font-bold text-black dark:text-white">
            Build Modern Websites with Next.js
          </h1>

          <p className="text-lg text-zinc-600 dark:text-zinc-400">
            A clean starter setup with Header, MegaMenu, MobileMenu, and Footer
            using Tailwind CSS.
          </p>

          <div className="flex gap-4">
            <Link
              href="/services"
              className="rounded-full bg-black px-6 py-3 text-white dark:bg-white dark:text-black"
            >
              Explore Services
            </Link>

            <Link
              href="/about"
              className="rounded-full border px-6 py-3 hover:bg-zinc-100 dark:hover:bg-zinc-900"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="bg-zinc-100 dark:bg-zinc-900 py-20 px-6">
        <div className="mx-auto max-w-6xl text-center">
          
          <h2 className="text-3xl font-bold text-black dark:text-white">
            Features
          </h2>

          <p className="mt-3 text-zinc-600 dark:text-zinc-400">
            Everything you need to build a scalable frontend
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            
            <div className="rounded-xl bg-white p-6 shadow dark:bg-black">
              <h3 className="text-xl font-semibold">Fast Performance</h3>
              <p className="mt-2 text-sm text-zinc-500">
                Built on Next.js App Router for speed.
              </p>
            </div>

            <div className="rounded-xl bg-white p-6 shadow dark:bg-black">
              <h3 className="text-xl font-semibold">Responsive UI</h3>
              <p className="mt-2 text-sm text-zinc-500">
                Works perfectly on mobile, tablet, and desktop.
              </p>
            </div>

            <div className="rounded-xl bg-white p-6 shadow dark:bg-black">
              <h3 className="text-xl font-semibold">Reusable Components</h3>
              <p className="mt-2 text-sm text-zinc-500">
                Header, Footer, MegaMenu, and more.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-20 px-6 text-center">
        <h2 className="text-3xl font-bold">
          Ready to start building?
        </h2>

        <p className="mt-3 text-zinc-600 dark:text-zinc-400">
          Start customizing your project today.
        </p>

        <div className="mt-6">
          <Link
            href="/contact"
            className="rounded-full bg-blue-600 px-6 py-3 text-white hover:bg-blue-700"
          >
            Contact Us
          </Link>
        </div>
      </section>

    </div>
  );
}