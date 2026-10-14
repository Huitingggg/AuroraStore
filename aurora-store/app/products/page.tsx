import { products } from "@/lib/products";
import { ProductCard } from "@/components/ProductCard";

export const metadata = { title: "Shop — Aurora" };

export default function ProductsPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20 lg:px-10 lg:py-28">
      <h1 className="font-display text-4xl text-ink">Everything</h1>
      <p className="mt-3 max-w-md font-body text-ink/60">
        {products.length} pieces, restocked in small runs. What sells out
        stays sold out until next season.
      </p>
      <div className="mt-14 grid grid-cols-2 gap-x-8 gap-y-14 lg:grid-cols-3">
        {products.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>
    </section>
  );
}
