
import { users } from "./user-seeder";
import { categories } from "./category-seeder";
import { shops } from "./shop-seeder";
import { products } from "./product-seeder";
import { prismaClient } from "../../src/lib/prisma";
import { category_mapping } from "./category-mapping-seeder";

async function main() {
    await prismaClient.user.createMany({
        data: users
    })
    await prismaClient.category.createMany({
        data: categories
    })
    await prismaClient.shop.createMany({
        data: shops
    })
    await prismaClient.product.createMany({
        data: products
    })
    await prismaClient.categoryMapping.createMany({
        data: category_mapping
    })
}

main()
    .catch((e) => {
        console.error(e)
        process.exit(1)
    })
    .finally(async () => {
        await prismaClient.$disconnect()
    })