"use client";

import { useState } from "react";
import type { Product } from "@/lib/products";
import { useCart } from "@/components/CartContext";

export function AddToCartButton({ product }: { product: Product }) {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  function handleClick() {
    addItem(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  }

  return (
    <button
      onClick={handleClick}
      className="border border-ink px-6 py-3 font-body text-sm text-ink transition-colors hover:bg-ink hover:text-stone-50"
    >
      {added ? "Added" : "Add to cart"}
    </button>
  );
}
