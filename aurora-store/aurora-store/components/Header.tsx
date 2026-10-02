"use client";

import Link from "next/link";
import { useCart } from "./CartContext";

export function Header() {
  const { count } = useCart();

  return (
    <header className="border-b border-stone-200">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <Link href="/" className="font-display text-2xl tracking-tight text-ink">
          Aurora
        </Link>
        <nav className="flex items-center gap-8 font-body text-sm text-ink">
          <Link href="/products" className="hover:text-pine">
            Shop
          </Link>
          <Link href="/cart" className="flex items-center gap-2 hover:text-pine">
            Cart
            <span className="rounded-full bg-ink px-2 py-0.5 text-xs text-stone-50">
              {count}
            </span>
          </Link>
        </nav>
      </div>
    </header>
  );
}
