import {useMutation} from "@tanstack/react-query";
import {OrdersInterface} from "../interfaces/interfaces";
import {ordersApi} from "../api/orders-api";


export const useOrders = (success: any, ...path: any) => {
    return useMutation({
        mutationKey: ["ordersMutation"],
        mutationFn: async (body: OrdersInterface) => {
            return await ordersApi(body);
        },
        onSuccess: () => success(...path)
    })
}