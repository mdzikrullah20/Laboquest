import Link from "next/link";
import Image from "next/image";
import { products } from "@/lib/products";

export default function ProductsPage() {
  return (
    <div className="min-h-screen px-6 py-16">
      
      {/* HEADER */}
      <div className="text-center">
        <h1 className="text-4xl font-bold text-black dark:text-white">
          Products
        </h1>
        <p className="mt-3 text-zinc-600 dark:text-zinc-400">
          Explore our latest developer merchandise
        </p>
      </div>

      {/* GRID */}
      <div className="mx-auto mt-12 grid max-w-6xl gap-6 sm:grid-cols-2 md:grid-cols-3">
        
        {products.map((product) => (
          <Link
            key={product.id}
            href={`/products/${product.id}`}
            className="rounded-xl border bg-white p-4 shadow hover:shadow-md dark:border-zinc-800 dark:bg-black"
          >
            <Image
              src={product.image}
              alt={product.name}
              width={200}
              height={200}
              className="mx-auto h-40 w-auto object-contain"
            />

            <h2 className="mt-4 text-lg font-semibold">
              {product.name}
            </h2>

            <p className="text-sm text-zinc-500">
              {product.description}
            </p>

            <p className="mt-2 font-bold text-blue-600">
              ₹{product.price}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}