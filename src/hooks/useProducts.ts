import {useQuery} from "@tanstack/react-query";
import {getProductApi} from "../api/product-api";

export const useProducts = () => {
    return useQuery({
        queryKey: ["postQuery"] ,
        queryFn: async () => {
           return await getProductApi();
        }
    })
}