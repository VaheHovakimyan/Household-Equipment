import {RegisterInterface} from "../interfaces/interfaces";

export const registerApi = async (body: RegisterInterface) => {

    const bodyValue = {
        ...body,
        isAdmin: true
    }

    try {
        const response = await fetch(
            `http://172.16.16.121:3000/api/v1/users/register`, {
                method: 'POST',
                body: JSON.stringify(bodyValue),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            });
        const json = await response.json();

        console.log(json);
        return json as RegisterInterface;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;

    }
}