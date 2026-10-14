import Link from "next/link";
import Image from "next/image";
import { products } from "@/lib/products";
import { ProductCard } from "@/components/ProductCard";

export default function Home() {
  const featured = products.slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="relative flex h-[88vh] min-h-[560px] items-end overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1616627981037-1eaeaaf9c2fb?w=1800&q=80"
          alt="Linen, clay, and brass goods arranged on a wooden table"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bottledark/90 via-bottledark/20 to-transparent" />
        <div className="relative mx-auto w-full max-w-6xl px-6 pb-16 lg:px-10 lg:pb-20">
          <h1 className="max-w-xl font-display text-5xl italic leading-[1.08] text-linen lg:text-6xl">
            Things you'll still own in ten years.
          </h1>
          <p className="mt-6 max-w-sm font-body text-linen/80">
            Small runs of linen, clay, brass, and wool, bought directly from
            the handful of workshops we visit in person.
          </p>
          <Link
            href="/products"
            className="mt-8 inline-block border border-linen/70 px-7 py-3 font-body text-sm text-linen transition-colors hover:bg-linen hover:text-ink"
          >
            Shop the collection
          </Link>
        </div>
      </section>

      {/* Craft story */}
      <section className="mx-auto grid max-w-6xl gap-12 px-6 py-24 lg:grid-cols-2 lg:gap-20 lg:px-10 lg:py-32">
        <div className="relative aspect-[5/6]">
          <Image
            src="https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=1000&q=80"
            alt="A potter's hands shaping stoneware on a wheel"
            fill
            className="object-cover"
          />
        </div>
        <div className="flex flex-col justify-center">
          <h2 className="font-display text-3xl leading-snug text-ink lg:text-4xl">
            We visit every workshop before we carry its work.
          </h2>
          <p className="mt-6 max-w-md font-body leading-relaxed text-ink/70">
            Aurora started as a notebook of places worth visiting: a mill in
            Wales, a two-potter studio in Vermont, a metal shop in Brooklyn
            that still casts by hand. Each season we return, place a small
            order, and sell it until it's gone. Nothing is restocked on
            demand, and nothing is made to sit in a warehouse.
          </p>
          <p className="mt-6 max-w-md font-body leading-relaxed text-ink/70">
            What you buy here was made by someone whose name we know, in a
            quantity they chose.
          </p>
        </div>
      </section>

      {/* Featured shelf */}
      <section className="mx-auto max-w-6xl border-t border-hairline px-6 py-24 lg:px-10">
        <div className="flex items-baseline justify-between">
          <h2 className="font-display text-2xl text-ink">New this season</h2>
          <Link href="/products" className="font-body text-sm text-ink/60 hover:text-ink">
            View all
          </Link>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-x-8 gap-y-14 lg:grid-cols-3">
          {featured.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </section>

      {/* Pull quote */}
      <section className="bg-bottle px-6 py-28 lg:px-10">
        <blockquote className="mx-auto max-w-2xl text-center">
          <p className="font-display text-3xl italic leading-snug text-linen lg:text-4xl">
            "I've had the mugs for two years. They still feel like the first
            week I got them."
          </p>
          <footer className="mt-6 font-body text-sm text-linen/60">
            A customer, in an email we kept
          </footer>
        </blockquote>
      </section>
    </>
  );
}
