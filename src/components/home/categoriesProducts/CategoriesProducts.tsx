import {FC, useEffect, useState} from "react";
import {useCategories} from "../../../hooks/useCategories";
import './CategoriesProducts.scss';
import {Link, NavLink} from "react-router-dom";


export const CategoriesProducts: FC = () => {

    const [categories, setCategories] = useState([]);

    const {data}: any = useCategories();

    useEffect(() => {
        if (data) {
            setCategories(data);
        }
    }, [data, categories, setCategories]);


    return (
        <div>
            <div className="product_static_div">

                <div className="product_static_div_left_part">

                    <img src={`/assets/images/home/chair.png`} alt="product_left_part_image"/>
                    <p className="product_static_text">
                        INY VINTAGE CHAIR
                    </p>

                </div>

                <div className="product_static_div_right_part">

                    <img src={`/assets/images/home/vase.png`} alt="product_right_part_image"/>
                    <p className="product_static_text">
                        LARGE TERRACOTA <br/> VASE
                    </p>

                </div>

            </div>

            <article className="article_div_flex">
                <div className="topProduct_div_flex">
                    <div className="topProduct_div">
                        {categories.map((item: any) => {


                            return (
                                <div
                                    key={item._id}
                                    className="product_div"
                                >
                                    <Link to={`store/${item._id}`} className="product_category_link">
                                        <img
                                            src={item.icon}
                                            alt="product_category_image"
                                            className="product_category_image"
                                        />
                                        <p className="product_category_name">{item.name}</p>
                                    </Link>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </article>
        </div>
    )
}