import { FC, useEffect, useState } from "react";
import './TopRatingProducts.scss';
import { useHomeProducts } from "../../../hooks/useHomeProducts";
import first_image from '../../../test/first.png';


const homeProducts = [
    {
        id: 0,
        name: "Bedroom",
        rating: 4.5,
        price: 30
    },
    {
        id: 1,
        name: "Bedroom",
        rating: 4.5,
        price: 30
    },
    {
        id: 2,
        name: "Bedroom",
        rating: 4.5,
        price: 30
    },
    {
        id: 3,
        src: "/public/assets/test/first.png",
        name: "Bedroom",
        rating: 4.5,
        price: 30
    },
    {
        id: 0,
        name: "Bedroom",
        rating: 4.5,
        price: 30
    },
    {
        id: 1,
        name: "Bedroom",
        rating: 4.5,
        price: 30
    },
    {
        id: 2,
        name: "Bedroom",
        rating: 4.5,
        price: 30
    },
    {
        id: 3,
        src: "/public/assets/test/first.png",
        name: "Bedroom",
        rating: 4.5,
        price: 30
    },
    {
        id: 0,
        name: "Bedroom",
        rating: 4.5,
        price: 30
    }
]

export const TopRatingProducts: FC = () => {
    // const [homeProducts, setHomeProducts] = useState([]);

    // const {data}: any = useHomeProducts();

    // useEffect(() => {
    //     if (data) {
    //         setHomeProducts(data);
    //     }
    // }, [data, homeProducts, setHomeProducts]);

    // console.log(homeProducts);

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
                                        src={first_image}
                                        alt="first_image"
                                        className="top_rating_item_left_part_image"
                                    />
                                </div>

                                <div className="top_rating_item_right_part">
                                    <h3>{item.name}</h3>

                                    <meter
                                        className="average_rating"
                                        min="0"
                                        max="5"
                                        value="4.3"
                                        title="4.3 out of 5 stars">
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