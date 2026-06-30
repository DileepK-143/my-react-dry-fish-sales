require("dotenv").config();

const connectDB = require("./config/database");
const Product = require("./models/Product");

const products = [

  // ===========================
  // PRAWNS
  // ===========================

  {
    name: "Jumbo Dry Prawns",
    category: "prawns",
    price: 1200,
    image: "/images/jumbo-prawns.jpeg",
    stock: 100,
    description: "Premium quality Jumbo Dry Prawns sourced from Kakinada coast."
  },

  {
    name: "Medium Dry Prawns",
    category: "prawns",
    price: 800,
    image: "/images/medium-prawns.jpeg",
    stock: 100,
    description: "Fresh medium size dry prawns."
  },

  {
    name: "Small Dry Prawns",
    category: "prawns",
    price: 500,
    image: "/images/small-prawns.jpeg",
    stock: 100,
    description: "Traditional sun dried small prawns."
  },

  {
    name: "Tiger Dry Prawns",
    category: "prawns",
    price: 1500,
    image: "/images/tiger-prawns.jpeg",
    stock: 100,
    description: "Premium Tiger Dry Prawns."
  },

  {
    name: "Rock Dry Prawns",
    category: "prawns",
    price: 700,
    image: "/images/rock-prawns.jpeg",
    stock: 100,
    description: "Rock variety dry prawns."
  },

  {
    name: "River Dry Prawns",
    category: "prawns",
    price: 650,
    image: "/images/river-prawns.jpeg",
    stock: 100,
    description: "Freshwater river dry prawns."
  },

  {
    name: "Black Tiger Dry Prawns",
    category: "prawns",
    price: 1600,
    image: "/images/black-tiger-prawns.jpeg",
    stock: 100,
    description: "Premium Black Tiger Dry Prawns."
  },

  {
    name: "Baby Dry Prawns",
    category: "prawns",
    price: 450,
    image: "/images/baby-prawns.jpeg",
    stock: 100,
    description: "Baby size premium dry prawns."
  },

  {
    name: "Sun-Dried Prawns",
    category: "prawns",
    price: 600,
    image: "/images/sun-dried-prawns.jpeg",
    stock: 100,
    description: "Traditional naturally sun dried prawns."
  },

  {
    name: "Spicy Dry Prawns",
    category: "prawns",
    price: 850,
    image: "/images/spicy-prawns.jpeg",
    stock: 100,
    description: "Ready-to-cook spicy dry prawns."
  },

  {
    name: "Large Coastal Prawns",
    category: "prawns",
    price: 1100,
    image: "/images/large-coastal-prawns.jpeg",
    stock: 100,
    description: "Large coastal premium prawns."
  },

  {
    name: "Organic Dry Prawns",
    category: "prawns",
    price: 1400,
    image: "/images/organic-prawns.jpeg",
    stock: 100,
    description: "Organic naturally dried prawns."
  },

  {
    name: "Golden Dry Prawns",
    category: "prawns",
    price: 1300,
    image: "/images/golden-prawns.jpeg",
    stock: 100,
    description: "Golden premium export quality prawns."
  },

  {
    name: "Desi Dry Prawns",
    category: "prawns",
    price: 750,
    image: "/images/desi-prawns.jpeg",
    stock: 100,
    description: "Traditional local desi dry prawns."
  },
    // ===========================
  // FISH
  // ===========================

  {
    name: "Ribbon Fish",
    category: "fish",
    price: 500,
    image: "/images/ribbon-fish.jpeg",
    stock: 100,
    description: "Premium quality Ribbon Fish from Kakinada coast."
  },

  {
    name: "Anchovies",
    category: "fish",
    price: 400,
    image: "/images/anchovies.jpeg",
    stock: 100,
    description: "Fresh sun dried Anchovies."
  },

  {
    name: "Bombay Duck",
    category: "fish",
    price: 450,
    image: "/images/bombay-duck.jpeg",
    stock: 100,
    description: "Traditional Bombay Duck dry fish."
  },

  {
    name: "Mackerel Fish",
    category: "fish",
    price: 550,
    image: "/images/mackerel.jpeg",
    stock: 100,
    description: "Premium dried Mackerel Fish."
  },

  {
    name: "Tuna Dry Fish",
    category: "fish",
    price: 650,
    image: "/images/tuna.jpeg",
    stock: 100,
    description: "Fresh premium Tuna dry fish."
  },

  {
    name: "Sardines",
    category: "fish",
    price: 350,
    image: "/images/sardines.jpeg",
    stock: 100,
    description: "Traditional Sardines."
  },

  {
    name: "King Fish",
    category: "fish",
    price: 750,
    image: "/images/kingfish.jpeg",
    stock: 100,
    description: "Premium King Fish."
  },

  {
    name: "Croaker Fish",
    category: "fish",
    price: 600,
    image: "/images/croaker.jpeg",
    stock: 100,
    description: "High quality Croaker Fish."
  },

  {
    name: "Seer Fish",
    category: "fish",
    price: 850,
    image: "/images/seer.jpeg",
    stock: 100,
    description: "Premium Seer Fish."
  },

  {
    name: "Silver Belly Fish",
    category: "fish",
    price: 450,
    image: "/images/silver-belly.jpeg",
    stock: 100,
    description: "Fresh Silver Belly Fish."
  },

  {
    name: "Cat Fish",
    category: "fish",
    price: 500,
    image: "/images/cat-fish.jpeg",
    stock: 100,
    description: "Premium Cat Fish."
  },

  {
    name: "Threadfin Fish",
    category: "fish",
    price: 700,
    image: "/images/threadfin-fish.jpeg",
    stock: 100,
    description: "Premium Threadfin Fish."
  },

  {
    name: "Shark Dry Fish",
    category: "fish",
    price: 900,
    image: "/images/shark.jpeg",
    stock: 100,
    description: "Premium Shark Dry Fish."
  },

  {
    name: "Barracuda Fish",
    category: "fish",
    price: 800,
    image: "/images/barracuda.jpeg",
    stock: 100,
    description: "Fresh Barracuda Fish."
  },

  {
    name: "Leather Jacket Fish",
    category: "fish",
    price: 550,
    image: "/images/leather-jacket.jpeg",
    stock: 100,
    description: "Premium Leather Jacket Fish."
  },

  {
    name: "Dry Eel Fish",
    category: "fish",
    price: 950,
    image: "/images/eel-fish.jpeg",
    stock: 100,
    description: "Premium quality Dry Eel Fish."
  },
    // ===========================
  // CRABS
  // ===========================

  {
    name: "Blue Crab",
    category: "crab",
    price: 700,
    image: "/images/blue-crab.jpeg",
    stock: 100,
    description: "Premium Blue Crab dried using traditional methods."
  },

  {
    name: "Mud Crab",
    category: "crab",
    price: 1200,
    image: "/images/mud-crab.jpeg",
    stock: 100,
    description: "Fresh premium Mud Crab."
  },

  {
    name: "Sea Crab",
    category: "crab",
    price: 1000,
    image: "/images/sea-crab.jpeg",
    stock: 100,
    description: "Premium Sea Crab from Kakinada coast."
  },

  {
    name: "Red Crab",
    category: "crab",
    price: 900,
    image: "/images/red-crab.jpeg",
    stock: 100,
    description: "High quality Red Crab."
  },

  {
    name: "Dry Crab Legs",
    category: "crab",
    price: 850,
    image: "/images/crab-legs.jpeg",
    stock: 100,
    description: "Premium dried Crab Legs."
  },

  {
    name: "Dry Crab Meat",
    category: "crab",
    price: 950,
    image: "/images/crab-meat.jpeg",
    stock: 100,
    description: "Ready-to-cook premium Dry Crab Meat."
  },

  // ===========================
  // SHELLFISH
  // ===========================

  {
    name: "Dry Clams",
    category: "shellfish",
    price: 500,
    image: "/images/clams.jpeg",
    stock: 100,
    description: "Fresh premium Dry Clams."
  },

  {
    name: "Dry Mussels",
    category: "shellfish",
    price: 650,
    image: "/images/mussels.jpeg",
    stock: 100,
    description: "Premium dried Mussels."
  },

  {
    name: "Dry Oysters",
    category: "shellfish",
    price: 900,
    image: "/images/oysters.jpeg",
    stock: 100,
    description: "Premium Dry Oysters."
  },

  {
    name: "Dry Scallops",
    category: "shellfish",
    price: 1200,
    image: "/images/scallops.jpeg",
    stock: 100,
    description: "High quality Dry Scallops."
  },

  {
    name: "Sea Shell Mix",
    category: "shellfish",
    price: 700,
    image: "/images/shell-mix.jpeg",
    stock: 100,
    description: "Mixed premium shellfish collection."
  },

  {
    name: "Premium Shellfish",
    category: "shellfish",
    price: 1400,
    image: "/images/premium-shellfish.jpeg",
    stock: 100,
    description: "Export quality Premium Shellfish."
  },
    // ===========================
  // SQUID & OCTOPUS
  // ===========================

  {
    name: "Dry Squid Rings",
    category: "squids",
    price: 800,
    image: "/images/squid-rings.jpeg",
    stock: 100,
    description: "Premium quality Dry Squid Rings."
  },

  {
    name: "Whole Dry Squid",
    category: "squids",
    price: 900,
    image: "/images/whole-squid.jpeg",
    stock: 100,
    description: "Whole sun dried premium squid."
  },

  {
    name: "Mini Squid",
    category: "squids",
    price: 700,
    image: "/images/mini-squid.jpeg",
    stock: 100,
    description: "Fresh premium Mini Squid."
  },

  {
    name: "Premium Octopus",
    category: "squids",
    price: 1300,
    image: "/images/octopus.jpeg",
    stock: 100,
    description: "Premium dried octopus."
  },

  {
    name: "Salted Squid",
    category: "squids",
    price: 850,
    image: "/images/salted-squid.jpeg",
    stock: 100,
    description: "Traditional salted squid."
  },

  {
    name: "Large Octopus",
    category: "squids",
    price: 1500,
    image: "/images/large-octopus.jpeg",
    stock: 100,
    description: "Large premium octopus."
  }

];

const seedDatabase = async () => {
  try {
    await connectDB();

    console.log("🗑 Deleting old products...");
    await Product.deleteMany();

    console.log("📦 Inserting products...");
    await Product.insertMany(products);

    console.log(`✅ ${products.length} Products Inserted Successfully`);

    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

seedDatabase();