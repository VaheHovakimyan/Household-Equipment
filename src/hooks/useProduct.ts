import {useQuery} from "@tanstack/react-query";
import {getProductApi} from "../api/product-api";


export const useProduct = (id: string | undefined) => {
    return useQuery({
        queryKey: ["productQuery"] ,
        queryFn: async () => {
            return await getProductApi(id);
        }
    })
}