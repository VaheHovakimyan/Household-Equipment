import {useQuery} from "@tanstack/react-query";
import {getCategoriesApi} from "../api/categories-api";


export const useCategories = () => {
    return useQuery({
        queryKey: ["categoriesQuery"] ,
        queryFn: async () => {
           return await getCategoriesApi();
        }
    })
}