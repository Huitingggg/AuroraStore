export function Footer() {
  return (
    <footer className="mt-24 border-t border-stone-200">
      <div className="mx-auto max-w-6xl px-6 py-10 font-body text-sm text-ink/70">
        <p>Aurora — small-batch goods for the home and the walk there.</p>
        <p className="mt-1">© {new Date().getFullYear()} Aurora Goods Co.</p>
      </div>
    </footer>
  );
}
