"use client";

import Link from "next/link";
import Image from "next/image";
import { useCart } from "@/components/CartContext";

export default function CartPage() {
  const { lines, removeItem, total } = useCart();

  if (lines.length === 0) {
    return (
      <section className="py-16">
        <h1 className="font-display text-3xl text-ink">Your cart is empty</h1>
        <p className="mt-3 font-body text-ink/70">
          Nothing added yet.{" "}
          <Link href="/products" className="text-pine hover:underline">
            Browse the shop
          </Link>
          .
        </p>
      </section>
    );
  }

  return (
    <section className="py-16">
      <h1 className="font-display text-3xl text-ink">Your cart</h1>
      <div className="mt-8 divide-y divide-stone-200 border-y border-stone-200">
        {lines.map(({ product, quantity }) => (
          <div key={product.slug} className="flex items-center gap-4 py-5">
            <div className="relative h-20 w-16 flex-shrink-0 border border-stone-200 bg-stone-100">
              <Image src={product.image} alt={product.name} fill className="object-cover" />
            </div>
            <div className="flex-1 font-body">
              <p className="text-ink">{product.name}</p>
              <p className="text-sm text-ink/60">Qty {quantity}</p>
            </div>
            <p className="font-body text-brass">${product.price * quantity}</p>
            <button
              onClick={() => removeItem(product.slug)}
              className="font-body text-sm text-ink/50 hover:text-ink"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
      <div className="mt-6 flex items-center justify-between">
        <p className="font-body text-lg text-ink">Total: ${total}</p>
        <button
          disabled
          title="Wire up Stripe Checkout here — see README.md"
          className="cursor-not-allowed border border-ink/30 px-6 py-3 font-body text-sm text-ink/40"
        >
          Checkout (connect Stripe)
        </button>
      </div>
    </section>
  );
}
