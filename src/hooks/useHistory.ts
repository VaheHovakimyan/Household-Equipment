import {useQuery} from "@tanstack/react-query";
import {getHistoryApi} from "../api/history-api";


export const useHistory = () => {
    return useQuery({
        queryKey: ["historyQuery"],
        queryFn: () => {
            return getHistoryApi();
        }
    })
}