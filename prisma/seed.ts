import { PrismaClient, Prisma } from "../app/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import "dotenv/config";

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL,
});

const prisma = new PrismaClient({
  adapter,
});

const products: Prisma.ProductCreateInput[] = [
  {
    name: "Wireless Mouse",
    sku: "WM-001",
    price: new Prisma.Decimal(29.99),
    quantity: 100,
    lowStock: 10,
  },
  {
    name: "Mechanical Keyboard",
    sku: "MK-002",
    price: new Prisma.Decimal(129.99),
    quantity: 50,
    lowStock: 5,
  },
  {
    name: "USB-C Cable",
    sku: "UC-003",
    price: new Prisma.Decimal(9.99),
    quantity: 200,
    lowStock: 25,
  },
  {
    name: "Laptop Stand",
    sku: "LS-004",
    price: new Prisma.Decimal(49.99),
    quantity: 30,
    lowStock: 5,
  },
  {
    name: "Bluetooth Keyboard",
    sku: "BK-005",
    price: new Prisma.Decimal(79.99),
    quantity: 40,
    lowStock: 8,
  },
  {
    name: "Gaming Mouse Pad",
    sku: "MP-006",
    price: new Prisma.Decimal(19.99),
    quantity: 150,
    lowStock: 20,
  },
  {
    name: "USB Hub",
    sku: "UH-007",
    price: new Prisma.Decimal(34.99),
    quantity: 60,
    lowStock: 10,
  },
  {
    name: "External Hard Drive 1TB",
    sku: "HD-008",
    price: new Prisma.Decimal(89.99),
    quantity: 25,
    lowStock: 5,
  },
  {
    name: "Webcam 1080p",
    sku: "WC-009",
    price: new Prisma.Decimal(59.99),
    quantity: 45,
    lowStock: 10,
  },
  {
    name: "Noise-Canceling Headset",
    sku: "HS-010",
    price: new Prisma.Decimal(149.99),
    quantity: 20,
    lowStock: 5,
  },
  {
    name: "Laptop Sleeve 15-inch",
    sku: "SL-011",
    price: new Prisma.Decimal(24.99),
    quantity: 80,
    lowStock: 15,
  },
  {
    name: "USB-A to USB-C Adapter",
    sku: "AD-012",
    price: new Prisma.Decimal(12.99),
    quantity: 180,
    lowStock: 30,
  },
  {
    name: "Monitor Stand",
    sku: "MS-013",
    price: new Prisma.Decimal(69.99),
    quantity: 35,
    lowStock: 7,
  },
  {
    name: "Wireless Charging Pad",
    sku: "WC-014",
    price: new Prisma.Decimal(39.99),
    quantity: 55,
    lowStock: 10,
  },
  {
    name: "Ergonomic Mouse",
    sku: "EM-015",
    price: new Prisma.Decimal(54.99),
    quantity: 45,
    lowStock: 8,
  },
  {
    name: "Desk Cable Organizer",
    sku: "CO-016",
    price: new Prisma.Decimal(14.99),
    quantity: 120,
    lowStock: 20,
  },
  {
    name: "Portable SSD 500GB",
    sku: "SSD-017",
    price: new Prisma.Decimal(99.99),
    quantity: 30,
    lowStock: 6,
  },
  {
    name: "HDMI Cable 6ft",
    sku: "HDMI-018",
    price: new Prisma.Decimal(11.99),
    quantity: 200,
    lowStock: 40,
  },
  {
    name: "Laptop Cooling Pad",
    sku: "CP-019",
    price: new Prisma.Decimal(44.99),
    quantity: 35,
    lowStock: 7,
  },
  {
    name: "Wireless Presenter Remote",
    sku: "PR-020",
    price: new Prisma.Decimal(27.99),
    quantity: 65,
    lowStock: 12,
  },
];

export async function main() {
  for (const p of products) {
    await prisma.product.create({ data: p });
  }
}

main();
