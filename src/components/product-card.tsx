import { Product, Shop } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";

export default function ProductCard({product, shop} : {product: Product, shop: Shop}) {
  return (
    <Link href={`/products/${product.id}`} className="bg-white shadow-md rounded-xl">
        <div className="">
            <Image src={product.image} width={400} height={400} alt="banner" className="w-full h-full rounded-t-xl" />
        </div>
        <div className="px-2 py-3 flex flex-col gap-1">
            <h2 className="text-lg">
                {product.name.length > 35 ? `${product.name.substring(0, 32)} ...` : product.name}
            </h2>
            <p className="font-semibold text-2xl">
                Rp{product.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}
            </p>           
            <p>{shop.name}</p>
        </div>
    </Link>
  )
}


// https://images.tokopedia.net/img/cache/700/VqbcmM/2022/1/10/daf4b8da-1519-4943-bbd4-602e44dd3f9b.jpg.webp?ect=4g