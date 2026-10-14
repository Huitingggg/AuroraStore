# Aurora — demo storefront

A Next.js 14 (App Router) + Tailwind CSS e-commerce starter, built as a learning
project. Product data is mocked in `lib/products.ts` so the site works fully
out of the box.

## Design notes (v2)

- **Palette**: linen (`#F2EEE4`) canvas, warm ink (`#1C1B19`) text, a deep
  bottle green (`#163C33`) for the hero and one accent section, antique brass
  (`#B8923F`) for price and small accents. No pure black, no pure white.
- **Type**: Fraunces (serif, with italic used deliberately for the hero line
  and the pull-quote) paired with IBM Plex Sans for body text and UI.
- **Layout**: full-bleed photographic hero → a two-column "craft" story
  section → a product shelf → a single full-width pull-quote on bottle green.
  One bold moment (the hero) with everything else quiet and hairline-bordered.

## Run it locally

Requires [Node.js](https://nodejs.org) 18.17+ and npm.

```bash
npm install
npm run dev
```

Visit http://localhost:3000.

## Deploy to a live server

See the Notion roadmap for the full step-by-step (Vercel is the proven path;
Cloudflare now recommends Workers + the OpenNext adapter rather than Pages).

## Next steps to make it a real store

1. **Database**: replace `lib/products.ts` with Supabase or Prisma + Postgres.
2. **Payments**: add Stripe Checkout via an API route.
3. **Auth**: Auth.js for accounts.
4. **Admin**: a protected `/admin` route once products live in a real DB.
5. **Observability**: Sentry for error tracking.
