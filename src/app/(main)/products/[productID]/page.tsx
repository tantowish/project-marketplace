import { prismaClient } from "@/lib/prisma";
import { redirect } from 'next/navigation'

interface Props {
    params: {
      productID: string;
    };
  }
  

export default async function page({params}: Props) {
    const productId = parseInt(params.productID, 10);

    if (isNaN(productId)) {
      redirect('/')
    }
  
    const product = await prismaClient.product.findUnique({
        where: {
          id: productId,
        }
      })
  return (
  <div className="w-full flex justify-center items-center">
    <div className="max-w-screen-xl w-full px-4">
      <div className="w-full">
        Product Detail Page
      </div>
    </div>
  </div>
  )
}