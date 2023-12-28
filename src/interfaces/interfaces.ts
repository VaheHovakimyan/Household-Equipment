export interface SliderItemInterface {
    id: number,
    src: string
}

export interface HomeProductsInterface {
    richDescription: string,
    image: string,
    images: any[],
    brand: string,
    price: number,
    rating: string,
    numReviews: number,
    isFeatured: boolean,
    _id?: any,
    name: string,
    description: string,
    category: any,
    countInStock: number,
    dateCreated: string,
    __v?: any,
    id?: any,
}

export interface CategoriesInterface {
    color: string;
    icon: string
    name: string
    __v?: any
    _id?: any
}

export interface OrderProduct {
    richDescription: string,
    image: string,
    images: any[],
    brand: string,
    price: number,
    rating: string,
    numReviews: number,
    isFeatured: boolean,
    _id?: any,
    name: string,
    description: string,
    category: any,
    countInStock: number,
    dateCreated: string,
    __v?: any,
    id?: any,
    countOfOrder?: any
}

export interface HistoryItemInterface {
    historyItem: OrderProduct
}


export interface RegisterInterface {
    name: string,
    email: string,
    password: any,
    phone: string,
    street: string,
    apartment: string,
    zip: string,
    city: string,
    country: string
}

export interface LoginInterface {
    email: string,
    password: string
}