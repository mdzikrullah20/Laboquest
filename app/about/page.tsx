import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">

      {/* HERO */}
      <section className="px-6 py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-black dark:text-white">
          About Our Company
        </h1>

        <p className="mx-auto mt-5 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
          We design and build high-performance web applications using modern technologies like Next.js and Tailwind CSS.
        </p>
      </section>

      {/* IMAGE + STORY */}
      <section className="mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-2">

        {/* IMAGE */}
        <div className="flex justify-center">
          <Image
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80"
            alt="About us"
            width={500}
            height={400}
            className="rounded-2xl object-cover shadow-lg"
          />
        </div>

        {/* CONTENT */}
        <div>
          <h2 className="text-2xl font-semibold text-black dark:text-white">
            Who We Are
          </h2>

          <p className="mt-4 text-zinc-600 dark:text-zinc-400 leading-relaxed">
            We are a passionate team of developers and designers focused on building
            scalable, modern, and user-friendly digital products. Our mission is to
            deliver high-quality solutions that help businesses grow faster.
          </p>

          <p className="mt-4 text-zinc-600 dark:text-zinc-400 leading-relaxed">
            From frontend UI to backend architecture, we ensure every product is fast,
            secure, and production-ready.
          </p>

          <Link
            href="/contact"
            className="mt-6 inline-block rounded-full bg-black px-6 py-3 text-white hover:bg-zinc-800 dark:bg-white dark:text-black"
          >
            Work With Us
          </Link>
        </div>
      </section>

      {/* STATS */}
      <section className="mt-24 bg-zinc-50 py-16 dark:bg-zinc-900">

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 px-6 sm:grid-cols-3 text-center">

          <div className="rounded-xl bg-white p-6 shadow dark:bg-black">
            <h3 className="text-3xl font-bold text-black dark:text-white">
              50+
            </h3>
            <p className="mt-2 text-zinc-500">Projects Completed</p>
          </div>

          <div className="rounded-xl bg-white p-6 shadow dark:bg-black">
            <h3 className="text-3xl font-bold text-black dark:text-white">
              10+
            </h3>
            <p className="mt-2 text-zinc-500">Expert Developers</p>
          </div>

          <div className="rounded-xl bg-white p-6 shadow dark:bg-black">
            <h3 className="text-3xl font-bold text-black dark:text-white">
              5★
            </h3>
            <p className="mt-2 text-zinc-500">Client Satisfaction</p>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-24 text-center">

        <h2 className="text-3xl font-bold text-black dark:text-white">
          Let’s Build Something Great
        </h2>

        <p className="mt-4 text-zinc-600 dark:text-zinc-400">
          Contact us to start your next project today.
        </p>

        <Link
          href="/contact"
          className="mt-6 inline-block rounded-full bg-black px-8 py-3 text-white hover:bg-zinc-800 dark:bg-white dark:text-black"
        >
          Contact Us
        </Link>

      </section>

    </div>
  );
}