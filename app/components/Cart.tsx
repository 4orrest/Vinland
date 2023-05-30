'use client'

import Image from "next/image"
import { useCartStore } from '@/store'
import formatPrice from "@/util/PriceFormat"
import {IoAddCircle, IoRemoveCircle} from 'react-icons/io5'
import basket from '@/public/empty-cart.png'

export default function Cart(){
    const cartStore = useCartStore()
    console.log(cartStore.isOpen)
    return (
        <div onClick={() => cartStore.toggleCart()} className="fixed w-full h-screen left-0 top-0 bg-black/25">
            <div onClick={(e) => e.stopPropagation()} className="bg-white absolute right-0 top-0 w-1/4 h-screen p-12 overflow-y-scroll text-gray-700">
                <h1>Here's your shopping list 📃</h1>
                {cartStore.cart.map((item) => (
                    <div className="flex py-4 gap-4">
                    <Image className="rounded-md h-24" src={item.image} alt={item.name} width={120} height={120}/>
                        <div>
                            <h2>{item.name}</h2>
                            {/* UPDATE QUANTITY OF A PRODUCT */}
                            <div className="flex gap-2">
                            <h2>Quantity: {item.quantity}</h2>
                            <button onClick={() => cartStore.removeProduct({
                                 id: item.id, 
                                 image: item.image, 
                                 name: item.name, 
                                 price: item.price, 
                                 quantity: item.quantity,
                            })}><IoRemoveCircle /></button>
                            <button onClick={() => cartStore.addProduct({
                                id: item.id, 
                                image: item.image, 
                                name: item.name, 
                                price: item.price, 
                                quantity: item.quantity,})}><IoAddCircle /></button>
                            </div>
                            <p className="text-sm">{item.price && formatPrice(item.price)}</p>
                        </div>
                    </div>
                ))}
                {cartStore.cart.length > 0 && (
                <button className="py-2 mt-4 bg-teal-700 w-full rounded-md text-white">
                    Checkout
                </button>
                 )}
                 {!cartStore.cart.length && (
                    <div className="flex flex-col items-center gap-12 text-2xl font-medium pt-56 opacity-75">
                        <h1>Uhh..It's empty! 🥲</h1>
                        <Image src={basket} alt="empty cart" width={300} height={300}/>
                    </div>
                 )}
            </div>
        </div>
    )
}