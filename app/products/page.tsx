import Image from "next/image";
import Link from "next/link";

export default function ProductsPage() {
  const products = [
    {
      id: "1",
      name: "Next.js Hoodie",
      price: 1999,
      category: "Clothing",
      description: "Premium hoodie built for developers.",
      image: "/next.svg",
      inStock: true,
    },
    {
      id: "2",
      name: "Tailwind T-Shirt",
      price: 999,
      category: "Clothing",
      description: "Comfortable T-shirt with Tailwind branding.",
      image: "/vercel.svg",
      inStock: true,
    },
    {
      id: "3",
      name: "React Cap",
      price: 799,
      category: "Accessories",
      description: "Stylish cap for React developers.",
      image: "/next.svg",
      inStock: false,
    },
  ];

  return (
    <div className="min-h-screen px-6 py-16">

      {/* HEADER */}
      <div className="text-center">
        <h1 className="text-4xl font-bold text-black dark:text-white">
          Our Products
        </h1>
        <p className="mt-3 text-zinc-600 dark:text-zinc-400">
          Explore developer-friendly merchandise & accessories
        </p>
      </div>

      {/* GRID */}
      <div className="mx-auto mt-12 grid max-w-6xl gap-6 sm:grid-cols-2 md:grid-cols-3">

        {products.map((product) => (
          <Link
            key={product.id}
            href={`/products/${product.id}`}
            className="group rounded-xl border bg-white p-4 shadow-sm transition hover:shadow-lg dark:border-zinc-800 dark:bg-black"
          >
            
            {/* IMAGE */}
            <div className="flex justify-center">
              <Image
                src={product.image}
                alt={product.name}
                width={140}
                height={140}
                className="h-32 w-auto object-contain transition group-hover:scale-105"
              />
            </div>

            {/* CATEGORY */}
            <span className="mt-3 inline-block rounded-full bg-zinc-100 px-3 py-1 text-xs text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300">
              {product.category}
            </span>

            {/* NAME */}
            <h2 className="mt-3 text-lg font-semibold text-black dark:text-white">
              {product.name}
            </h2>

            {/* DESCRIPTION */}
            <p className="mt-1 text-sm text-zinc-500">
              {product.description}
            </p>

            {/* PRICE + STOCK */}
            <div className="mt-3 flex items-center justify-between">
              <p className="font-bold text-blue-600">
                ₹{product.price}
              </p>

              <span
                className={`text-xs font-medium ${
                  product.inStock ? "text-green-600" : "text-red-500"
                }`}
              >
                {product.inStock ? "In Stock" : "Out of Stock"}
              </span>
            </div>

          </Link>
        ))}
      </div>
    </div>
  );
}