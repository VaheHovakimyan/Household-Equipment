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
    id?: any
}

export interface HomeCategoriesInterface {
    color:string;
    icon: string
    name:string
    __v?: any
    _id?:any
}