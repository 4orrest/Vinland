import Image from "next/image"
import formatPrice from "@/util/PriceFormat"
import { ProductType } from '@/types/ProductType'
import Link from "next/link"

export default function Product({ 
    name, 
    image, 
    price, 
    id,
    unit_amount,
    description, 
    metadata,}: ProductType) {
        const { perks } = metadata

    return (
    <Link href={{pathname: `/product/${id}`, query: { name, image, price, id, description, perks }}}>   
        <div className="text-gray-700">
            <Image src={image} alt={name} width={800} height={800} className="w-full h-96 object-cover rounded-lg"/>
            
            <div className="font-medium py-2">
            <h1>{name}</h1>
            <h2 className="text-sm text-teal-700">{price !== null ? formatPrice(price) : "N/A"}</h2>
            </div>
        </div>
    </Link> 
    )
}