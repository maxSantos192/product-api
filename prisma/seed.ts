import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const electronics = await prisma.category.create({
    data: {
      name: 'Eletronicos',
    },
  });

  const clothing = await prisma.category.create({
    data: {
      name: 'Roupas',
    },
  });

  const furniture = await prisma.category.create({
    data: {
      name: 'Móveis',
    },
  });

  const smartphones = await prisma.category.create({
    data: {
      name: 'Celulares',
      parentId: electronics.id,
    },
  });

  const laptops = await prisma.category.create({
    data: {
      name: 'Notebooks',
      parentId: electronics.id,
    },
  });

  const shirts = await prisma.category.create({
    data: {
      name: 'Camisas',
      parentId: clothing.id,
    },
  });

  const tables = await prisma.category.create({
    data: {
      name: 'Mesas',
      parentId: furniture.id,
    },
  });

  await prisma.product.create({
    data: {
      name: 'iPhone 14 Pro',
      qty: 50,
      price: 999.99,
      photo: 'https://example.com/iphone14.jpg',
      categories: {
        connect: [{ id: smartphones.id }],
      },
    },
  });

  await prisma.product.create({
    data: {
      name: 'MacBook Pro 16"',
      qty: 30,
      price: 2499.99,
      photo: 'https://example.com/macbook.jpg',
      categories: {
        connect: [{ id: laptops.id }],
      },
    },
  });

  await prisma.product.create({
    data: {
      name: 'Camisa Nike',
      qty: 100,
      price: 19.99,
      photo: 'https://example.com/tshirt.jpg',
      categories: {
        connect: [{ id: shirts.id }],
      },
    },
  });

  await prisma.product.create({
    data: {
      name: 'Mesa de Jantar',
      qty: 15,
      price: 349.99,
      photo: 'https://example.com/table.jpg',
      categories: {
        connect: [{ id: tables.id }],
      },
    },
  });

  console.log('Database has been seeded');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => {
    prisma.$disconnect();
  });
