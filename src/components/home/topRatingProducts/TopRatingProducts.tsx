import {FC, useEffect, useState} from "react";
import './TopRatingProducts.scss';
import {useHomeProducts} from "../../../hooks/useHomeProducts";


export const TopRatingProducts: FC = () => {
    const [homeProducts, setHomeProducts] = useState([]);

    const {data}: any = useHomeProducts();

    useEffect(() => {
        if (data) {
            setHomeProducts(data);
        }
    }, [data, homeProducts, setHomeProducts]);

    console.log(homeProducts);

    return (
        <div className="top_rating_main_div">

            <h2 className="top_rating_main_title">TOP RATING</h2>

            <div className="top_rating_div">
                {homeProducts.map((item: any) => {
                    return (
                        <div key={item.id}>
                            <h1>{item.id}    </h1>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}