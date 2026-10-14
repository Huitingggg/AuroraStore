import Image from "next/image";
import { notFound } from "next/navigation";
import { getProductBySlug, products } from "@/lib/products";
import { AddToCartButton } from "./AddToCartButton";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = getProductBySlug(params.slug);
  if (!product) notFound();

  return (
    <section className="mx-auto grid max-w-6xl gap-14 px-6 py-16 lg:grid-cols-2 lg:gap-20 lg:px-10 lg:py-24">
      <div className="relative aspect-[4/5] bg-hairline/40">
        <Image src={product.image} alt={product.name} fill className="object-cover" priority />
      </div>
      <div className="flex flex-col justify-center">
        <p className="font-body text-sm text-ink/50">{product.category}</p>
        <h1 className="mt-3 font-display text-4xl text-ink">{product.name}</h1>
        <p className="mt-4 font-body text-xl text-brass">${product.price}</p>
        <p className="mt-6 max-w-md font-body leading-relaxed text-ink/70">
          {product.description}
        </p>
        <div className="mt-8 space-y-1 border-t border-hairline pt-6 font-body text-sm text-ink/60">
          <p>{product.materials}</p>
          <p>{product.maker}</p>
        </div>
        <div className="mt-8">
          <AddToCartButton product={product} />
        </div>
      </div>
    </section>
  );
}
