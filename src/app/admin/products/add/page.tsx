"use client";

import React, { useMemo, useState } from "react";

type StockStatus = "in_stock" | "out_of_stock";

type AddProductFormState = {
  name: string;
  category: string;
  price: string; // keep as string for input control; convert on submit
  stockStatus: StockStatus;
  description: string;
  imageFile: File | null;
};

const CATEGORY_OPTIONS = [
  "Seafood",
  "Fish",
  "Frozen",
  "Shellfish",
  "Meat",
  "Produce",
] as const;

export default function AddProductPage() {
  const [form, setForm] = useState<AddProductFormState>({
    name: "",
    category: CATEGORY_OPTIONS[0],
    price: "",
    stockStatus: "in_stock",
    description: "",
    imageFile: null,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const canSubmit = useMemo(() => {
    return (
      form.name.trim().length > 0 &&
      form.category.trim().length > 0 &&
      form.price.trim().length > 0 &&
      Number.isFinite(Number(form.price)) &&
      Number(form.price) >= 0 &&
      form.description.trim().length > 0
    );
  }, [form.category, form.description, form.name, form.price]);

  function update<K extends keyof AddProductFormState>(
    key: K,
    value: AddProductFormState[K]
  ) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!canSubmit || isSubmitting) return;

    setIsSubmitting(true);
    try {
      const payload = {
        name: form.name.trim(),
        category: form.category,
        price: Number(form.price),
        stockStatus: form.stockStatus,
        description: form.description.trim(),
      // Keep the file in payload for future Supabase Storage integration
      imageFile: form.imageFile,
    };

      // TODO: Integrate with Supabase (db insert + optional Storage upload) later.
      // For now we keep this page backend-agnostic.
      // Intentionally no backend call yet.
      // eslint-disable-next-line no-console
      console.log("AddProduct payload:", payload);

      setSubmitSuccess(true);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight text-black">
            Add Product
          </h1>
          <p className="mt-1 text-sm text-black/60">
            Create a new product listing for your store.
          </p>
        </div>

        <div className="sm:ml-auto">
          <a
            href="/admin/products"
            className="inline-flex items-center justify-center rounded-md border border-black/10 bg-white px-4 py-2 text-sm font-semibold text-black shadow-sm transition hover:bg-black/[0.02] focus:outline-none focus:ring-2 focus:ring-[#E6B84A]/60"
          >
            Back
          </a>
        </div>
      </div>

      <form
        onSubmit={onSubmit}
        className="mt-6 rounded-lg border border-black/10 bg-white shadow-sm"
      >
        <div className="grid gap-6 p-6">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="grid gap-2">
              <label
                htmlFor="name"
                className="text-sm font-semibold text-black"
              >
                Product Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={form.name}
                onChange={(e) => update("name", e.target.value)}
                required
                className="h-10 rounded-md border border-black/10 bg-white px-3 text-sm text-black placeholder:text-black/40 outline-none transition focus:border-[#E6B84A] focus:ring-2 focus:ring-[#E6B84A]/50"
                placeholder="e.g., Salmon Fillet"
              />
            </div>

            <div className="grid gap-2">
              <label
                htmlFor="category"
                className="text-sm font-semibold text-black"
              >
                Category
              </label>
              <select
                id="category"
                name="category"
                value={form.category}
                onChange={(e) => update("category", e.target.value)}
                required
                className="h-10 rounded-md border border-black/10 bg-white px-3 text-sm text-black outline-none transition focus:border-[#E6B84A] focus:ring-2 focus:ring-[#E6B84A]/50"
              >
                {CATEGORY_OPTIONS.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>

            <div className="grid gap-2">
              <label
                htmlFor="price"
                className="text-sm font-semibold text-black"
              >
                Price
              </label>
              <input
                id="price"
                name="price"
                type="number"
                inputMode="decimal"
                min={0}
                step={0.01}
                value={form.price}
                onChange={(e) => update("price", e.target.value)}
                required
                className="h-10 rounded-md border border-black/10 bg-white px-3 text-sm text-black placeholder:text-black/40 outline-none transition focus:border-[#E6B84A] focus:ring-2 focus:ring-[#E6B84A]/50"
                placeholder="e.g., 18.99"
              />
            </div>

            <div className="grid gap-2">
              <label
                htmlFor="stockStatus"
                className="text-sm font-semibold text-black"
              >
                Stock Status
              </label>
              <select
                id="stockStatus"
                name="stockStatus"
                value={form.stockStatus}
                onChange={(e) =>
                  update("stockStatus", e.target.value as StockStatus)
                }
                required
                className="h-10 rounded-md border border-black/10 bg-white px-3 text-sm text-black outline-none transition focus:border-[#E6B84A] focus:ring-2 focus:ring-[#E6B84A]/50"
              >
                <option value="in_stock">In Stock</option>
                <option value="out_of_stock">Out of Stock</option>
              </select>
            </div>
          </div>

          <div className="grid gap-2">
            <label
              htmlFor="description"
              className="text-sm font-semibold text-black"
            >
              Product Description
            </label>
            <textarea
              id="description"
              name="description"
              value={form.description}
              onChange={(e) => update("description", e.target.value)}
              required
              rows={5}
              className="rounded-md border border-black/10 bg-white px-3 py-2 text-sm text-black placeholder:text-black/40 outline-none transition focus:border-[#E6B84A] focus:ring-2 focus:ring-[#E6B84A]/50"
              placeholder="Describe the product, ingredients, size, etc."
            />
          </div>

          <div className="grid gap-2">
            <label
              htmlFor="imageFile"
              className="text-sm font-semibold text-black"
            >
              Product Image Upload
            </label>
            <input
              id="imageFile"
              name="imageFile"
              type="file"
              accept="image/*"
              onChange={(e) => {
                const file = e.target.files?.[0] ?? null;
                update("imageFile", file);
              }}
              className="block w-full cursor-pointer rounded-md border border-black/10 bg-white text-sm text-black file:mr-4 file:rounded-md file:border-0 file:bg-[#E6B84A] file:px-3 file:py-2 file:text-sm file:font-semibold file:text-black hover:file:bg-[#D9A73D] focus:outline-none focus:ring-2 focus:ring-[#E6B84A]/50"
            />
            {form.imageFile ? (
              <p className="text-xs text-black/60">
                Selected: <span className="font-semibold">{form.imageFile.name}</span>
              </p>
            ) : (
              <p className="text-xs text-black/60">
                Upload an image (optional for now; wire to Supabase Storage later).
              </p>
            )}
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-end">
            <button
              type="submit"
              disabled={!canSubmit || isSubmitting}
              className={
                "inline-flex items-center justify-center rounded-md px-5 py-2.5 text-sm font-semibold text-black shadow-sm transition focus:outline-none focus:ring-2 focus:ring-[#E6B84A]/60 " +
                (!canSubmit || isSubmitting
                  ? "cursor-not-allowed bg-[#E6B84A]/40 hover:bg-[#D9A73D]/40"
                  : "bg-[#E6B84A] hover:bg-[#D9A73D]")
              }
            >
              {isSubmitting ? "Submitting…" : "Submit"}
            </button>
          </div>

          {submitSuccess ? (
            <div
              className="rounded-md border border-[#E6B84A]/40 bg-[#E6B84A]/15 px-3 py-2 text-sm text-black"
              role="alert"
            >
              Product added successfully.
            </div>
          ) : (
            <div aria-live="polite" className="sr-only" />
          )}
        </div>
      </form>
    </section>
  );
}

