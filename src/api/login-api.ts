import {LoginInterface} from "../interfaces/interfaces";

export const loginApi = async (body: LoginInterface) => {

    try {
        const response = await fetch(
            `http://172.16.16.121:3000/api/v1/users/login`, {
                method: 'POST',
                body: JSON.stringify(body),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            });

        const json = await response.json();


        localStorage.setItem("token",  JSON.stringify(json));
        // return json as LoginInterface;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}
