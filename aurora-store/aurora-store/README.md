# Aurora — demo storefront

A Next.js 14 (App Router) + Tailwind CSS e-commerce starter, built as a learning
project. Product data is mocked in `lib/products.ts` so the site works fully
out of the box; the structure is set up so a real database and Stripe
checkout can be dropped in later without a rewrite.

## What's included

- App Router pages: home, product listing, product detail, cart
- Client-side cart state via React Context (`components/CartContext.tsx`)
- Tailwind design tokens (`tailwind.config.js`) — a stone/ink/pine/brass palette
- Responsive, keyboard-focus-visible styling
- next/image with a whitelisted remote host (Unsplash) for placeholder photos

## Run it locally

Requires [Node.js](https://nodejs.org) 18.17+ and npm.

```bash
npm install
npm run dev
```

Visit http://localhost:3000.

## Deploy to a live server (Vercel — free tier, easiest path for Next.js)

1. Push this folder to a new GitHub repository (`git init`, `git add .`,
   `git commit -m "Initial commit"`, then create a repo on GitHub and
   `git push`).
2. Go to https://vercel.com, sign up/log in with GitHub.
3. Click **Add New → Project**, select your repo, leave defaults (Vercel
   auto-detects Next.js), click **Deploy**.
4. In a couple of minutes you get a live URL like `aurora-store.vercel.app`.
   Add a custom domain later under Project → Settings → Domains.

Vercel handles HTTPS, CDN, and redeploys automatically on every git push —
that's your "upload to server" step in full, and it's also your CI/CD.

## Next steps to make it a real store

1. **Database**: replace `lib/products.ts` with a real data source —
   [Supabase](https://supabase.com) (Postgres) or
   [Prisma](https://www.prisma.io/) + any Postgres host is the common path.
2. **Payments**: add [Stripe Checkout](https://stripe.com/docs/checkout/quickstart).
   You'll add an API route (`app/api/checkout/route.ts`) that creates a
   Checkout Session and redirects the browser to Stripe — Stripe hosts the
   payment page, so you never touch card numbers.
3. **Auth**: [Auth.js](https://authjs.dev/) (formerly NextAuth) for accounts.
4. **Admin**: a simple protected `/admin` route to add/edit products once
   they live in a real database.
5. **Observability**: [Sentry](https://sentry.io) for error tracking (free
   tier), plus Vercel's built-in analytics for traffic.
6. **Environment variables**: never commit secrets. Use `.env.local` locally
   (already gitignored) and add the same keys in Vercel → Settings →
   Environment Variables for production.

## Security & maintenance checklist before real customers use this

- [ ] HTTPS only (Vercel gives you this by default)
- [ ] Card data never touches your server (Stripe Checkout/Elements only)
- [ ] `.env.local` / secrets are gitignored and never committed
- [ ] Dependencies kept patched (`npm audit`, or enable Dependabot on GitHub)
- [ ] A staging deployment (Vercel Preview Deployments do this automatically
      per branch/PR) before merging to `main`/production
- [ ] Basic privacy policy + terms of service page if collecting customer data
- [ ] Error tracking and uptime monitoring wired up (see Sentry above)
