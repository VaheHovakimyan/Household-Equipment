import {useQuery} from "@tanstack/react-query";
import {getFeaturedApi} from "../api/featured-api";


export const useFeatured = (loadMoreCount: any) => {
    return useQuery({
        queryKey: ["featuredQuery", loadMoreCount],
        queryFn: async () => {
            return await getFeaturedApi(loadMoreCount);
        }
    })
}