'use client'

import { useCartStore } from "@/store"
import { AddCartType } from "@/types/AddCartType"
import { useState } from 'react'

export default function AddCart({name, id, image, price, quantity}: AddCartType) {
    const cartStore = useCartStore()
        cartStore.addProduct
    return(
        <>
        <button onClick={() => cartStore.addProduct({id, image, price, quantity, name})} className="my-12 text-white py-2 px-6 font-medium rounded-md bg-teal-700">Add to cart</button>
        </>
    )
}