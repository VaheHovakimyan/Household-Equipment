import {HomeCategoriesInterface} from "../interfaces/interfaces";

export const getHomeCategoriesApi = async () => {

    try {
        const response = await fetch("http://172.16.16.121:3000/api/v1/categories");
        const json = await response.json();
        console.log(json);
        return json as HomeCategoriesInterface;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }

}