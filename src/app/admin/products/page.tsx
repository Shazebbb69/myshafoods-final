import Link from "next/link";
import React from "react";

type StockStatus = "in_stock" | "out_of_stock";

type Product = {
  id: string;
  name: string;
  category: string;
  price: number;
  stockStatus: StockStatus;
  imageSrc: string;
};

const products: Product[] = [
  {
    id: "p-1",
    name: "Salmon Fillet",
    category: "Seafood",
    price: 18.99,
    stockStatus: "in_stock",
    imageSrc: "/file.svg",
  },
  {
    id: "p-2",
    name: "Shrimp (1 lb)",
    category: "Seafood",
    price: 14.5,
    stockStatus: "out_of_stock",
    imageSrc: "/file.svg",
  },
  {
    id: "p-3",
    name: "Sea Bass",
    category: "Fish",
    price: 22.0,
    stockStatus: "in_stock",
    imageSrc: "/file.svg",
  },
  {
    id: "p-4",
    name: "Crab Cakes",
    category: "Frozen",
    price: 16.75,
    stockStatus: "in_stock",
    imageSrc: "/file.svg",
  },
  {
    id: "p-5",
    name: "Oysters (12 pc)",
    category: "Shellfish",
    price: 26.25,
    stockStatus: "out_of_stock",
    imageSrc: "/file.svg",
  },
];

function StockBadge({ status }: { status: StockStatus }) {
  const isInStock = status === "in_stock";

  return (
    <span
      className={
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold " +
        (isInStock
          ? "bg-green-500/15 text-green-700"
          : "bg-red-500/15 text-red-700")
      }
    >
      {isInStock ? "In Stock" : "Out of Stock"}
    </span>
  );
}

export default function ProductsPage() {
  return (
    <section>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight text-black">
            Products
          </h1>
          <p className="mt-1 text-sm text-black/60">
            Manage your catalog and track stock status.
          </p>
        </div>

        <div className="sm:ml-auto">
          <Link
            href="/admin/products/add"
            className="inline-flex items-center justify-center rounded-md bg-[#E6B84A] px-4 py-2 text-sm font-semibold text-black shadow-sm transition hover:bg-[#D9A73D] focus:outline-none focus:ring-2 focus:ring-[#E6B84A]/60"
          >
            Add Product
          </Link>
        </div>
      </div>

      <div className="mt-6 rounded-lg border border-black/10 bg-white shadow-sm">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-black/10">
            <thead className="bg-black/5">
              <tr>
                <th
                  scope="col"
                  className="px-4 py-3 text-left text-xs font-semibold text-black/70"
                >
                  Product Image
                </th>
                <th
                  scope="col"
                  className="px-4 py-3 text-left text-xs font-semibold text-black/70"
                >
                  Product Name
                </th>
                <th
                  scope="col"
                  className="px-4 py-3 text-left text-xs font-semibold text-black/70"
                >
                  Category
                </th>
                <th
                  scope="col"
                  className="px-4 py-3 text-left text-xs font-semibold text-black/70"
                >
                  Price
                </th>
                <th
                  scope="col"
                  className="px-4 py-3 text-left text-xs font-semibold text-black/70"
                >
                  Stock Status
                </th>
                <th
                  scope="col"
                  className="px-4 py-3 text-right text-xs font-semibold text-black/70"
                >
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-black/10 bg-white">
              {products.map((product) => (
                <tr key={product.id} className="hover:bg-black/[0.03]">
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-3">
                      <div className="h-12 w-12 overflow-hidden rounded-md border border-black/10 bg-black/5">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={product.imageSrc}
                          alt={product.name}
                          className="h-full w-full object-cover"
                          loading="lazy"
                        />
                      </div>
                    </div>
                  </td>

                  <td className="px-4 py-3">
                    <div className="font-medium text-black">{product.name}</div>
                  </td>

                  <td className="px-4 py-3 text-sm text-black/70">
                    {product.category}
                  </td>

                  <td className="px-4 py-3 text-sm text-black/70">
                    ${product.price.toFixed(2)}
                  </td>

                  <td className="px-4 py-3">
                    <StockBadge status={product.stockStatus} />
                  </td>

                  <td className="px-4 py-3 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button
                        type="button"
                        className="rounded-md border border-[#E6B84A] bg-[#E6B84A]/15 px-3 py-1.5 text-xs font-semibold text-black transition hover:bg-[#E6B84A]/25 focus:outline-none focus:ring-2 focus:ring-[#E6B84A]/60"
                        aria-label={`Edit ${product.name}`}
                      >
                        Edit
                      </button>
                      <button
                        type="button"
                        className="rounded-md border border-red-500/20 bg-red-500/10 px-3 py-1.5 text-xs font-semibold text-black transition hover:bg-red-500/15 focus:outline-none focus:ring-2 focus:ring-red-500/20"
                        aria-label={`Delete ${product.name}`}
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex flex-col gap-3 px-4 py-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="text-sm text-black/60">
            Showing{" "}
            <span className="font-semibold text-black">{products.length}</span>{" "}
            products
          </div>
          <div className="text-sm text-black/60">
            {/* Placeholder for pagination/filtering */}
            <span className="rounded-md bg-black/5 px-2 py-1">All</span>
          </div>
        </div>
      </div>
    </section>
  );
}
