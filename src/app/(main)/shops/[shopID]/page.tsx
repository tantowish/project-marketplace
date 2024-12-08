import { prismaClient } from '@/lib/prisma';
import { redirect } from 'next/navigation';
import React from 'react'

interface Props {
    params: {
      shopID: string;
    };
  }
export default async function page({params}: Props) {
    const shopID = parseInt(params.shopID, 10);

    if (isNaN(shopID)) {
      redirect('/')
    }
  
    const shop = await prismaClient.shop.findUnique({
        where: {
          id: shopID,
        }
      })
  return (
    <div>Shop Detail</div>
  )
}