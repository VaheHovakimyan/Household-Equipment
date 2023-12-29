import {OrdersAllInterface} from "../interfaces/interfaces";

export const getHistoryApi = async () => {

    const token = JSON.parse(localStorage.getItem("token")!);

    console.log(token.token);

    try {
        const response = await fetch(`http://172.16.16.121:3000/api/v1/orders/get/usersorders/${token.userID}`, {
            headers: {
                'Authorization': `Bearer ${token.token}`
            }
        });
        const json = await response.json();
        console.log("::::JSON", json);
        return json as any;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }

}