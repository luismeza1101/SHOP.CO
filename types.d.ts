export type Type_Product = {
    id: string
    image: string
    name: string
    price: number
    discount?: number
    initial_price?: number
    description?: string
    colors?: Color_Product[]
}

export type Type_Comment = {
    stars: number
    name: string
    comment: string
    date? : string
}

export type Color_Product = `#${string}`

export type Type_Product_Cart = {
    id: string
    image: string
    name: string
    price: number
    size: string
    cant_product: number
    color: Color_Product
}