"use client";

import Link from "next/link";
import Image from "next/image";
import { useCart } from "@/components/CartContext";

export default function CartPage() {
  const { lines, removeItem, total } = useCart();

  if (lines.length === 0) {
    return (
      <section className="mx-auto max-w-6xl px-6 py-24 lg:px-10">
        <h1 className="font-display text-4xl text-ink">Your cart is empty</h1>
        <p className="mt-4 font-body text-ink/60">
          Nothing added yet.{" "}
          <Link href="/products" className="text-ink underline underline-offset-4 hover:text-brass">
            Browse the shop
          </Link>
          .
        </p>
      </section>
    );
  }

  return (
    <section className="mx-auto max-w-6xl px-6 py-16 lg:px-10 lg:py-24">
      <h1 className="font-display text-4xl text-ink">Your cart</h1>
      <div className="mt-10 divide-y divide-hairline border-y border-hairline">
        {lines.map(({ product, quantity }) => (
          <div key={product.slug} className="flex items-center gap-5 py-6">
            <div className="relative h-24 w-20 flex-shrink-0 bg-hairline/40">
              <Image src={product.image} alt={product.name} fill className="object-cover" />
            </div>
            <div className="flex-1 font-body">
              <p className="font-display text-lg text-ink">{product.name}</p>
              <p className="mt-1 text-sm text-ink/50">Qty {quantity}</p>
            </div>
            <p className="font-body text-brass">${product.price * quantity}</p>
            <button
              onClick={() => removeItem(product.slug)}
              className="font-body text-sm text-ink/40 hover:text-ink"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
      <div className="mt-8 flex items-center justify-between">
        <p className="font-display text-xl text-ink">Total — ${total}</p>
        <button
          disabled
          title="Wire up Stripe Checkout here — see README.md"
          className="cursor-not-allowed border border-ink/25 px-7 py-3 font-body text-sm text-ink/35"
        >
          Checkout (connect Stripe)
        </button>
      </div>
    </section>
  );
}
