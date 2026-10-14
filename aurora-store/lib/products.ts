export type Product = {
  slug: string;
  name: string;
  price: number;
  category: string;
  description: string;
  materials: string;
  maker: string;
  image: string;
};

// In production, replace this array with a query to your database
// (see lib/db.ts once you wire one up — instructions in README.md).
export const products: Product[] = [
  {
    slug: "ash-linen-tote",
    name: "Ash Linen Tote",
    price: 68,
    category: "Bags",
    description:
      "A wide-mouthed tote in heavyweight linen, built for market runs and studio days. Structured base, no sag.",
    materials: "100% heavyweight linen, waxed cotton straps",
    maker: "Woven in a four-person workshop outside Porto",
    image: "https://images.unsplash.com/photo-1591561954557-26941169b49e?w=900&q=80",
  },
  {
    slug: "clay-stack-mug",
    name: "Clay Stack Mug, Set of 2",
    price: 34,
    category: "Home",
    description:
      "Hand-thrown stoneware mugs with a matte glaze inside a raw clay exterior. Stack neatly, hold their heat.",
    materials: "Stoneware, food-safe matte glaze",
    maker: "Thrown by a two-potter studio in Vermont",
    image: "https://images.unsplash.com/photo-1517914309068-a5d4a2bf5cd0?w=900&q=80",
  },
  {
    slug: "field-wool-throw",
    name: "Field Wool Throw",
    price: 96,
    category: "Home",
    description:
      "A dense-weave throw in undyed wool, woven on a small mill in a single run each season.",
    materials: "100% wool, undyed",
    maker: "Woven on a century-old mill loom in Wales",
    image: "https://images.unsplash.com/photo-1580301762395-83bc80a4b148?w=900&q=80",
  },
  {
    slug: "brass-desk-lamp",
    name: "Brass Desk Lamp",
    price: 128,
    category: "Home",
    description:
      "A solid-brass task lamp with a warm, dimmable bulb and a weighted base that won't tip.",
    materials: "Solid brass, weighted steel base",
    maker: "Cast and finished by hand in a Brooklyn metal shop",
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=900&q=80",
  },
  {
    slug: "harbor-canvas-jacket",
    name: "Harbor Canvas Jacket",
    price: 148,
    category: "Apparel",
    description:
      "A boxy canvas jacket that softens with wear. Corduroy collar, brass snaps, deep chest pockets.",
    materials: "12oz cotton canvas, corduroy trim",
    maker: "Cut and sewn in a small Lisbon atelier",
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=900&q=80",
  },
  {
    slug: "salt-ceramic-bowl-set",
    name: "Salt Ceramic Bowl Set",
    price: 54,
    category: "Home",
    description:
      "Three nesting bowls in a chalky white glaze, sized for prep, serving, and everything after.",
    materials: "Stoneware, satin glaze",
    maker: "Thrown by a two-potter studio in Vermont",
    image: "https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=900&q=80",
  },
];

export function getProductBySlug(slug: string) {
  return products.find((p) => p.slug === slug);
}

export function getCategories() {
  return Array.from(new Set(products.map((p) => p.category)));
}
