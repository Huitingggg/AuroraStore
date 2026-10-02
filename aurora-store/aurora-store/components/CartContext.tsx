"use client";

import { createContext, useContext, useMemo, useState, ReactNode } from "react";
import type { Product } from "@/lib/products";

type CartLine = { product: Product; quantity: number };

type CartContextValue = {
  lines: CartLine[];
  addItem: (product: Product) => void;
  removeItem: (slug: string) => void;
  total: number;
  count: number;
};

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [lines, setLines] = useState<CartLine[]>([]);

  function addItem(product: Product) {
    setLines((prev) => {
      const existing = prev.find((l) => l.product.slug === product.slug);
      if (existing) {
        return prev.map((l) =>
          l.product.slug === product.slug ? { ...l, quantity: l.quantity + 1 } : l
        );
      }
      return [...prev, { product, quantity: 1 }];
    });
  }

  function removeItem(slug: string) {
    setLines((prev) => prev.filter((l) => l.product.slug !== slug));
  }

  const total = useMemo(
    () => lines.reduce((sum, l) => sum + l.product.price * l.quantity, 0),
    [lines]
  );
  const count = useMemo(() => lines.reduce((sum, l) => sum + l.quantity, 0), [lines]);

  return (
    <CartContext.Provider value={{ lines, addItem, removeItem, total, count }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
