import Link from "next/link";

const industries = [
  {
    title: "E-Commerce",
    description:
      "Scalable online stores with fast performance and secure checkout systems.",
    color: "bg-blue-100 dark:bg-blue-900",
  },
  {
    title: "Education",
    description:
      "E-learning platforms, LMS systems, and interactive student portals.",
    color: "bg-green-100 dark:bg-green-900",
  },
  {
    title: "Healthcare",
    description:
      "Secure healthcare apps, appointment systems, and patient dashboards.",
    color: "bg-red-100 dark:bg-red-900",
  },
  {
    title: "Finance",
    description:
      "Banking apps, fintech dashboards, and secure transaction systems.",
    color: "bg-yellow-100 dark:bg-yellow-900",
  },
  {
    title: "Real Estate",
    description:
      "Property listing platforms with advanced search and filters.",
    color: "bg-purple-100 dark:bg-purple-900",
  },
  {
    title: "SaaS",
    description:
      "Subscription-based SaaS platforms with analytics and automation.",
    color: "bg-zinc-200 dark:bg-zinc-800",
  },
];

export default function IndustriesPage() {
  return (
    <div className="min-h-screen px-6 py-16">

      {/* HEADER */}
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="text-4xl font-bold text-black dark:text-white">
          Industries We Serve
        </h1>
        <p className="mt-3 text-zinc-600 dark:text-zinc-400">
          We build scalable solutions across multiple industries.
        </p>
      </div>

      {/* GRID */}
      <div className="mx-auto mt-12 grid max-w-6xl gap-6 sm:grid-cols-2 md:grid-cols-3">

        {industries.map((industry) => (
          <div
            key={industry.title}
            className={`rounded-xl p-6 shadow hover:shadow-md transition ${industry.color}`}
          >
            <h2 className="text-xl font-semibold text-black dark:text-white">
              {industry.title}
            </h2>

            <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
              {industry.description}
            </p>

            <Link
              href="/contact"
              className="mt-4 inline-block text-sm font-medium text-blue-600 hover:underline"
            >
              Get a solution →
            </Link>
          </div>
        ))}
      </div>

      {/* CTA SECTION */}
      <div className="mx-auto mt-20 max-w-3xl text-center">
        <h2 className="text-2xl font-bold text-black dark:text-white">
          Need a custom solution?
        </h2>

        <p className="mt-3 text-zinc-600 dark:text-zinc-400">
          Let’s build something powerful for your industry.
        </p>

        <Link
          href="/contact"
          className="mt-6 inline-block rounded-full bg-black px-6 py-3 text-white dark:bg-white dark:text-black"
        >
          Contact Us
        </Link>
      </div>

    </div>
  );
}