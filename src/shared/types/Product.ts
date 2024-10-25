export interface Product {
    id: number,
    title: string,
    price: number,
    description: string | undefined
    category: string
    image: string | undefined,
    rating: {
        rate: number,
        count: number
    }
}
