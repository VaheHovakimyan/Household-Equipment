import {OrdersInterface} from "../interfaces/interfaces";

export const ordersApi = async (body: OrdersInterface) => {

    const token = JSON.parse(localStorage.getItem("token")!);

    try {
        const response = await fetch(
            `http://172.16.16.121:3000/api/v1/orders`, {
                method: 'POST',
                body: JSON.stringify(body),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                    'Authorization': `Bearer ${token.token}`
                },
            });

        const json = await response.json();

        return json as OrdersInterface;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}