export type Category = 'Rings' | 'Necklaces' | 'Earrings' | 'Bracelets';

export type MaterialOption = 'Gold' | 'Silver' | 'Rose Gold' | 'Platinum';
export type GemstoneOption = 'Diamond' | 'Sapphire' | 'Emerald' | 'Ruby';

export interface Product {
  id: number;
  name: string;
  description: string;
  longDescription: string;
  price: number;
  category: Category;
  image: string;
  badge?: 'New' | 'Bestseller' | 'Limited';
  material: MaterialOption;
  gemstone: GemstoneOption;
  rating: number;
  reviews: number;
}

export const products: Product[] = [
  {
    id: 1,
    name: 'Celestial Diamond Ring',
    description: 'A brilliant-cut diamond set in warm 18k gold.',
    longDescription: 'The Celestial Diamond Ring captures light from every dimension. At its heart sits a 1.2-carat brilliant-cut diamond, hand-set in a band of 18k gold. The four-prong crown elevates the stone, allowing maximum brilliance while maintaining a silhouette of understated grace.',
    price: 8900,
    category: 'Rings',
    image: 'https://images.pexels.com/photos/21928771/pexels-photo-21928771.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    badge: 'Bestseller',
    material: 'Gold',
    gemstone: 'Diamond',
    rating: 4.9,
    reviews: 187,
  },
  {
    id: 2,
    name: 'Aurora Sapphire Necklace',
    description: 'A sapphire pendant embraced by a golden halo.',
    longDescription: 'The Aurora Sapphire Necklace evokes the depth of a midnight sky. A cushion-cut sapphire is encircled by a halo of diamonds, all suspended from a delicate 18k gold chain. Each pendant is assembled by hand and polished to a mirror finish.',
    price: 5600,
    category: 'Necklaces',
    image: 'https://images.pexels.com/photos/32988651/pexels-photo-32988651.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    badge: 'New',
    material: 'Gold',
    gemstone: 'Sapphire',
    rating: 4.8,
    reviews: 94,
  },
  {
    id: 3,
    name: 'Starlight Diamond Earrings',
    description: 'Diamond earrings that cascade with light.',
    longDescription: 'The Starlight Diamond Earrings are a study in movement and light. Each earring features a cascade of graduated diamonds set in warm gold, swaying gently with every turn of the head. The design draws the eye along its length, creating an effect of effortless elegance.',
    price: 4200,
    category: 'Earrings',
    image: 'https://images.pexels.com/photos/7509257/pexels-photo-7509257.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    badge: 'Bestseller',
    material: 'Gold',
    gemstone: 'Diamond',
    rating: 4.9,
    reviews: 142,
  },
  {
    id: 4,
    name: 'Royal Diamond Bracelet',
    description: 'A diamond-encrusted bracelet of royal proportions.',
    longDescription: 'The Royal Diamond Bracelet is a continuous line of diamonds set in warm gold, creating an unbroken river of light around the wrist. Each stone is calibrated for identical fire and brilliance, then set in a flush mount for a seamless, modern profile.',
    price: 12500,
    category: 'Bracelets',
    image: 'https://images.pexels.com/photos/25881541/pexels-photo-25881541.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    badge: 'Limited',
    material: 'Gold',
    gemstone: 'Diamond',
    rating: 5.0,
    reviews: 58,
  },
  {
    id: 5,
    name: 'Eternité Band',
    description: 'An eternity band with channel-set diamonds.',
    longDescription: 'The Eternité Band is an eternity ring where diamonds run unbroken around the entire circumference. Channel-set in platinum, the stones are flush with the metal, creating a sleek, modern silhouette that pairs effortlessly with any ensemble.',
    price: 6800,
    category: 'Rings',
    image: 'https://images.pexels.com/photos/30541174/pexels-photo-30541174.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    material: 'Platinum',
    gemstone: 'Diamond',
    rating: 4.8,
    reviews: 76,
  },
  {
    id: 6,
    name: 'Lumière Chain',
    description: 'A gold and diamond chain with geometric links.',
    longDescription: 'The Lumière Chain reimagines the classic gold chain with geometric links, each accented by a single diamond. The result is a piece that feels both architectural and fluid, catching light at every angle as it moves.',
    price: 3900,
    category: 'Necklaces',
    image: 'https://images.pexels.com/photos/17555289/pexels-photo-17555289.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    badge: 'New',
    material: 'Gold',
    gemstone: 'Diamond',
    rating: 4.7,
    reviews: 61,
  },
  {
    id: 7,
    name: 'Aubade Studs',
    description: 'Diamond stud earrings with pavé-set brilliance.',
    longDescription: 'The Aubade Studs are a modern reinterpretation of the classic stud. Each earring is fully pavé-set with diamonds, catching light from every direction. The secure backing ensures comfort for all-day wear.',
    price: 3400,
    category: 'Earrings',
    image: 'https://images.pexels.com/photos/35961143/pexels-photo-35961143.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    material: 'Gold',
    gemstone: 'Diamond',
    rating: 4.8,
    reviews: 89,
  },
  {
    id: 8,
    name: 'Monarque Cuff',
    description: 'A sculptural diamond cuff of bold proportions.',
    longDescription: 'The Monarque Cuff is a sculptural statement piece. Its open cuff design is set with a constellation of diamonds across the top arc, tapering to a smooth, polished band. The cuff sits comfortably on the wrist while making an unmistakable impression.',
    price: 9800,
    category: 'Bracelets',
    image: 'https://images.pexels.com/photos/12194331/pexels-photo-12194331.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    badge: 'Limited',
    material: 'Gold',
    gemstone: 'Diamond',
    rating: 4.9,
    reviews: 42,
  },
  {
    id: 9,
    name: 'Florale Ring',
    description: 'A floral-inspired ring with gemstone petals.',
    longDescription: 'The Florale Ring draws inspiration from the natural world. Its design features diamond petals arranged around a central sapphire, creating a flower that appears to bloom from the finger. Each petal is individually set and polished.',
    price: 5200,
    category: 'Rings',
    image: 'https://images.pexels.com/photos/30541169/pexels-photo-30541169.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    badge: 'New',
    material: 'Silver',
    gemstone: 'Sapphire',
    rating: 4.7,
    reviews: 53,
  },
  {
    id: 10,
    name: 'Vesper Pendant',
    description: 'A gold pendant with intricate vintage detailing.',
    longDescription: 'The Vesper Pendant pays homage to the golden age of jewelry design. Its intricate filigree work is accentuated by a central emerald, all suspended from a fine gold chain. The piece feels like an heirloom from the moment it is worn.',
    price: 4500,
    category: 'Necklaces',
    image: 'https://images.pexels.com/photos/3019302/pexels-photo-3019302.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    material: 'Gold',
    gemstone: 'Emerald',
    rating: 4.8,
    reviews: 67,
  },
  {
    id: 11,
    name: 'Jardin Earrings',
    description: 'Emerald and diamond earrings with floral motifs.',
    longDescription: 'The Jardin Earrings combine the deep green of emeralds with the fire of diamonds in a floral composition. Each earring features a central emerald surrounded by diamond petals, creating a garden that blooms from the ear.',
    price: 6100,
    category: 'Earrings',
    image: 'https://images.pexels.com/photos/5370644/pexels-photo-5370644.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    badge: 'Bestseller',
    material: 'Gold',
    gemstone: 'Emerald',
    rating: 4.9,
    reviews: 71,
  },
  {
    id: 12,
    name: 'Diamant Tennis',
    description: 'A classic tennis bracelet with brilliant diamonds.',
    longDescription: 'The Diamant Tennis is the quintessential diamond bracelet. A continuous line of individually set brilliant-cut diamonds creates an unbroken circle of light. The clasp is concealed for a seamless look, and the design moves fluidly with the wrist.',
    price: 8200,
    category: 'Bracelets',
    image: 'https://images.pexels.com/photos/12194332/pexels-photo-12194332.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    material: 'Rose Gold',
    gemstone: 'Diamond',
    rating: 4.9,
    reviews: 105,
  },
];

export const collections = [
  {
    name: 'Eternal Rings',
    tagline: 'Symbols of enduring devotion',
    description: 'From solitaires to eternity bands, each ring is crafted to mark life\'s most significant moments.',
    image: 'https://images.pexels.com/photos/30541186/pexels-photo-30541186.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    category: 'Rings' as Category,
  },
  {
    name: 'Celestial Necklaces',
    tagline: 'Light that rests near the heart',
    description: 'Pendants and chains that channel starlight, designed to illuminate the neckline with quiet radiance.',
    image: 'https://images.pexels.com/photos/32988651/pexels-photo-32988651.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    category: 'Necklaces' as Category,
  },
  {
    name: 'Signature Earrings',
    tagline: 'Brilliance in every movement',
    description: 'Drops, hoops, and studs that catch light with every turn, framing the face with effortless elegance.',
    image: 'https://images.pexels.com/photos/7509257/pexels-photo-7509257.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    category: 'Earrings' as Category,
  },
  {
    name: 'Royal Bracelets',
    tagline: 'A circle of light on the wrist',
    description: 'Tennis bracelets and sculptural cuffs that wrap the wrist in a continuous stream of diamonds.',
    image: 'https://images.pexels.com/photos/25881541/pexels-photo-25881541.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    category: 'Bracelets' as Category,
  },
];

export const materials: { name: MaterialOption; color: string; hex: string }[] = [
  { name: 'Gold', color: 'from-champagne-400 to-champagne-600', hex: '#d4a858' },
  { name: 'Silver', color: 'from-gray-300 to-gray-500', hex: '#c0c0c8' },
  { name: 'Rose Gold', color: 'from-rose-300 to-rose-500', hex: '#e8a0a0' },
  { name: 'Platinum', color: 'from-slate-200 to-slate-400', hex: '#e5e4e2' },
];

export const gemstones: { name: GemstoneOption; color: string; hex: string }[] = [
  { name: 'Diamond', color: '#f5f8ff', hex: '#f5f8ff' },
  { name: 'Sapphire', color: '#4a6fa5', hex: '#4a6fa5' },
  { name: 'Emerald', color: '#3a8c5a', hex: '#3a8c5a' },
  { name: 'Ruby', color: '#b8334a', hex: '#b8334a' },
];
