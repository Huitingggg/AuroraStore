import Link from "next/link";
import Image from "next/image";
import type { Product } from "@/lib/products";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/products/${product.slug}`} className="group block">
      <div className="relative aspect-[4/5] overflow-hidden border border-stone-200 bg-stone-100">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
          sizes="(min-width: 1024px) 25vw, 50vw"
        />
      </div>
      <div className="mt-3 flex items-baseline justify-between font-body text-sm text-ink">
        <span>{product.name}</span>
        <span className="text-brass">${product.price}</span>
      </div>
    </Link>
  );
}
