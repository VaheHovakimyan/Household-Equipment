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

    console.log("DATA", data);

    return (
        <div className="top_rating_main_div">

            <div className="top_rating_main_title_flex">
                <h2 className="top_rating_main_title">TOP RATING</h2>
            </div>


            <div className="top_rating_div_flex">

                <div className="top_rating_div">
                    {homeProducts.map((item: any) => {

                        const rate = item.rating / 5 * 100;

                        return (
                            <div key={item.id} className="top_rating_product_item">

                                <div className="top_rating_item_left_part">
                                    <img
                                        src={item.image}
                                        alt="top_product_image"
                                        className="top_rating_item_left_part_image"
                                    />
                                </div>

                                <div className="top_rating_item_right_part">
                                    <h3>{item.name}</h3>

                                    <meter
                                        className="average_rating"
                                        min="0"
                                        max="5"
                                        value={rate}
                                    >
                                            <span
                                                className="average_rating_span"
                                                style={{
                                                    background: `linear-gradient(90deg, gold ${rate}%, rgba(0,0,0,0.2) ${rate}%)`,
                                                    WebkitTextFillColor: "transparent",
                                                    WebkitBackgroundClip: "text"
                                                }}
                                            >★★★★★</span>

                                    </meter>


                                    <h2>{item.price}$</h2>
                                </div>

                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}