import Link from "next/link";
import Image from "next/image";
import { products } from "@/lib/products";
import { ProductCard } from "@/components/ProductCard";

export default function Home() {
  const featured = products.slice(0, 4);

  return (
    <>
      <section className="grid gap-8 py-16 lg:grid-cols-5 lg:items-center lg:py-24">
        <div className="lg:col-span-2">
          <h1 className="font-display text-5xl leading-[1.05] text-ink lg:text-6xl">
            Things you'll
            <br />
            still own in ten years.
          </h1>
          <p className="mt-6 max-w-sm font-body text-ink/70">
            Small runs of linen, clay, brass, and wool — made by a handful of
            workshops we visit in person, sold without the markup of a
            department store.
          </p>
          <Link
            href="/products"
            className="mt-8 inline-block border border-ink px-6 py-3 font-body text-sm text-ink transition-colors hover:bg-ink hover:text-stone-50"
          >
            Shop the collection
          </Link>
        </div>
        <div className="relative aspect-[4/3] lg:col-span-3 lg:aspect-auto lg:h-[440px]">
          <Image
            src="https://images.unsplash.com/photo-1616627981037-1eaeaaf9c2fb?w=1200&q=80"
            alt="Linen and ceramic goods arranged on a wooden table"
            fill
            className="object-cover"
            priority
          />
        </div>
      </section>

      <section className="border-t border-stone-200 py-16">
        <div className="flex items-baseline justify-between">
          <h2 className="font-display text-2xl text-ink">New this season</h2>
          <Link href="/products" className="font-body text-sm text-pine hover:underline">
            View all
          </Link>
        </div>
        <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4">
          {featured.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </section>
    </>
  );
}
