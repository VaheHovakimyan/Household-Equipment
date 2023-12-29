import {useQuery} from "@tanstack/react-query";
import {getSliderApi} from "../api/slider-api";


export const useSlider = () => {
    return useQuery({
        queryKey: ["sliderQuery"] ,
        queryFn: async () => {
            return await getSliderApi();
        }
    })
}