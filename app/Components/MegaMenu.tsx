import Link from "next/link";

const categories = [
  {
    title: "Development",
    items: ["Web Dev", "Mobile Apps", "Backend", "UI/UX"],
  },
  {
    title: "Business",
    items: ["Marketing", "Finance", "Strategy", "Startup"],
  },
  {
    title: "Design",
    items: ["Graphics", "Product Design", "Branding", "Illustration"],
  },
];

export default function MegaMenu() {
  return (
    <div className="absolute left-0 top-full w-full bg-white shadow-lg border-t">
      <div className="mx-auto grid max-w-7xl grid-cols-3 gap-8 p-6">
        {categories.map((cat) => (
          <div key={cat.title}>
            <h3 className="mb-3 font-semibold text-gray-900">
              {cat.title}
            </h3>

            <ul className="space-y-2">
              {cat.items.map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-gray-600 hover:text-blue-600"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}