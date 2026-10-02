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
    <section className="grid gap-10 py-16 lg:grid-cols-2">
      <div className="relative aspect-[4/5] border border-stone-200 bg-stone-100">
        <Image src={product.image} alt={product.name} fill className="object-cover" priority />
      </div>
      <div>
        <p className="font-body text-sm uppercase tracking-wide text-pine">{product.category}</p>
        <h1 className="mt-2 font-display text-3xl text-ink">{product.name}</h1>
        <p className="mt-4 font-body text-lg text-brass">${product.price}</p>
        <p className="mt-6 max-w-md font-body text-ink/80">{product.description}</p>
        <p className="mt-4 font-body text-sm text-ink/60">{product.materials}</p>
        <div className="mt-8">
          <AddToCartButton product={product} />
        </div>
      </div>
    </section>
  );
}
