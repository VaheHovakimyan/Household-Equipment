import {FC} from "react";


interface slideInterface {
    url: string
    name: string
    price: string
}

export const SliderItem: FC<slideInterface> = ({url, name, price}: slideInterface) => {

    console.log(name);

    return (
        <div className="slider_item">
            <img src={url} alt="slider_image" width={"200px"} height={"300px"} />
        </div>
    )
}