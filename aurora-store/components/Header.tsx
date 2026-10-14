"use client";

import Link from "next/link";
import { useCart } from "./CartContext";

export function Header() {
  const { count } = useCart();

  return (
    <header className="border-b border-hairline bg-linen">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6 lg:px-10">
        <Link href="/" className="font-display text-[1.65rem] tracking-tight text-ink">
          Aurora
        </Link>
        <nav className="flex items-center gap-10 font-body text-[0.95rem] text-ink">
          <Link href="/products" className="group relative pb-0.5">
            Shop
            <span className="absolute bottom-0 left-0 h-px w-0 bg-ink transition-all duration-300 group-hover:w-full" />
          </Link>
          <Link href="/cart" className="group relative flex items-center gap-2 pb-0.5">
            Cart
            {count > 0 && <span className="text-brass">({count})</span>}
            <span className="absolute bottom-0 left-0 h-px w-0 bg-ink transition-all duration-300 group-hover:w-full" />
          </Link>
        </nav>
      </div>
    </header>
  );
}
