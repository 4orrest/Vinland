type Params = {
    id: string
}

type SearchParams = {
    name: string
    price: number | null
    image: string
    id: string
    description: string | null
    perks: string
    unit_amount: number | null
}

export type SearchParamTypes = {
   params: Params,
   searchParams: SearchParams,
}


