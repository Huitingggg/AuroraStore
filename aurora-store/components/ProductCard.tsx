import Link from "next/link";
import Image from "next/image";
import type { Product } from "@/lib/products";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/products/${product.slug}`} className="group block">
      <div className="relative aspect-[4/5] overflow-hidden bg-hairline/40">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
          sizes="(min-width: 1024px) 25vw, 50vw"
        />
      </div>
      <div className="mt-4 flex items-baseline justify-between">
        <span className="font-display text-lg text-ink">{product.name}</span>
        <span className="font-body text-sm text-brass">${product.price}</span>
      </div>
      <p className="mt-1 font-body text-sm text-ink/50">{product.category}</p>
    </Link>
  );
}
