import {HomeProductsInterface} from "../interfaces/interfaces";

export const getProductApi = async (id: string | undefined) => {

    console.log(id);

    try {
        const response = await fetch(`http://172.16.16.121:3000/api/v1/products/${id}`);
        const json = await response.json();
        console.log(json);
        return json as HomeProductsInterface;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;

    }

}