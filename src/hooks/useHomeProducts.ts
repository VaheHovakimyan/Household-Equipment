import {useQuery} from "@tanstack/react-query";
import {getHomeProductsApi} from "../api/homeProducts-api";



export const useHomeProducts = () => {
    return useQuery({
        queryKey: ["productsHomeQuery"] ,
        queryFn: async () => {
            return await getHomeProductsApi();
        }
    })
}