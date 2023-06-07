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
        <div>
            <Image src={image} alt={name} width={800} height={800} className="w-full h-86 object-cover rounded-lg"/>
            
            <div className="font-medium py-2">
            <h1>{name}</h1>
            <h2 className="text-sm text-primary">{price !== null ? formatPrice(price) : "N/A"}</h2>
            </div>
        </div>
    </Link> 
    )
}