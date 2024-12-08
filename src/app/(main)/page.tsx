import ProductCard from "@/components/product-card";
import { prismaClient } from "@/lib/prisma";
  
export default async function Home() {
  const products = await prismaClient.product.findMany({
    include: {
      shop: true
    }
  })
  return (
    <div className="w-full flex flex-wrap justify-center items-center">
      <div className="max-w-screen-xl w-full px-4">
        <div className="w-full flex flex-wrap justify-center items-center bg-slate-300 h-56 rounded-xl">
          <p className="text-slate-600 text-4xl">Banner</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 py-8">
          {products.map(product => ( 
            <ProductCard key={product.id} product={product} shop={product.shop}/>
          ))}
        </div>
      </div>
    </div>
  );
}
