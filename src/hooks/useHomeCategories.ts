import {useQuery} from "@tanstack/react-query";
import {getHomeCategoriesApi} from "../api/homeCategories-api";


export const useHomeCategories = () => {
    return useQuery({
        queryKey: ["categoriesHomeQuery"] ,
        queryFn: async () => {
           return await getHomeCategoriesApi();
        }
    })
}