import {FC, useEffect, useState} from "react";
import {useFeatured} from "../../../hooks/useFeatured";
import {Link} from "react-router-dom";
import './TopRatingProducts.scss';


export const TopRatingProducts: FC = () => {

    const [homeProducts, setHomeProducts] = useState([]);

    const [loadMoreCount, setLoadMoreCount] = useState(3);

    const {data}: any = useFeatured(loadMoreCount);

    useEffect(() => {

        if (data) {
            setHomeProducts(data);
        }

    }, [data, homeProducts, setHomeProducts]);


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
                            <Link
                                key={item.id}
                                to={`/products/${item.id}`}
                                className="link_to_product"
                            >
                                <div className="top_rating_product_item">

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
                            </Link>
                        )
                    })}
                </div>
            </div>

            <div className="loadmore_btn_div">
                <button
                    className="loadmore_btn"
                    onClick={(e: any) => setLoadMoreCount(loadMoreCount + 3)}
                >
                    LOAD MORE
                </button>
            </div>
        </div>
    )
}