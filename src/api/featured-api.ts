import {HomeProductsInterface} from "../interfaces/interfaces";

export const getFeaturedApi = async (loadMoreCount: any) => {

    try {
        const response = await fetch(`http://172.16.16.121:3000/api/v1/products/get/featured/${loadMoreCount}`);
        const json = await response.json();
        return json as HomeProductsInterface;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }

}