import { products } from "@/lib/products";
import { ProductCard } from "@/components/ProductCard";

export const metadata = { title: "Shop — Aurora" };

export default function ProductsPage() {
  return (
    <section className="py-16">
      <h1 className="font-display text-3xl text-ink">Everything</h1>
      <p className="mt-2 max-w-md font-body text-sm text-ink/70">
        {products.length} pieces, restocked in small runs. What sells out stays sold out.
      </p>
      <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-3">
        {products.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>
    </section>
  );
}
