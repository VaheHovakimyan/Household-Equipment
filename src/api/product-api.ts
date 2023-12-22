import {topProductInterface} from "../interfaces/interfaces";

export const getProductApi = async () => {

    try {
        const response = await fetch("http://172.16.16.121:3000/api/v1/categories");
        const json = await response.json();
        console.log(json);
        return json as topProductInterface;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error; // Rethrow the error to handle it at a higher level
    }

}