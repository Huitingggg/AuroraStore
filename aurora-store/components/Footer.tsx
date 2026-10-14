export function Footer() {
  return (
    <footer className="border-t border-hairline bg-linen">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 lg:grid-cols-[1.3fr_1fr_1fr] lg:px-10">
        <div>
          <p className="font-display text-xl text-ink">Aurora</p>
          <p className="mt-3 max-w-xs font-body text-sm leading-relaxed text-ink/60">
            Small runs of linen, clay, brass, and wool, bought directly from
            the workshops that make them.
          </p>
        </div>
        <div>
          <p className="font-body text-sm text-ink/40">Shop</p>
          <ul className="mt-3 space-y-2 font-body text-sm text-ink/80">
            <li><a href="/products" className="hover:text-ink">Everything</a></li>
            <li><a href="/cart" className="hover:text-ink">Your cart</a></li>
          </ul>
        </div>
        <div>
          <p className="font-body text-sm text-ink/40">Keep in touch</p>
          <p className="mt-3 font-body text-sm text-ink/80">
            One email a season, when a new run arrives.
          </p>
          <form className="mt-4 flex border-b border-ink/30 focus-within:border-ink">
            <input
              type="email"
              placeholder="you@example.com"
              aria-label="Email address"
              className="w-full bg-transparent py-2 font-body text-sm text-ink placeholder:text-ink/40 focus:outline-none"
            />
            <button className="font-body text-sm text-ink/60 hover:text-ink">Join</button>
          </form>
        </div>
      </div>
      <div className="border-t border-hairline px-6 py-6 font-body text-xs text-ink/40 lg:px-10">
        © {new Date().getFullYear()} Aurora Goods Co.
      </div>
    </footer>
  );
}
