import {FC, useEffect, useState} from "react";
import {useProducts} from "../../../hooks/useProducts";
import './CategoriesProducts.scss';

export const CategoriesProducts: FC = () => {

    const [topProduct, setTopProduct] = useState([]);

    const {data}: any = useProducts();

    useEffect(() => {
        if (data) {
            setTopProduct(data);
        }
    }, [data, topProduct, setTopProduct]);


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

                    <img src={`/assets/images/home/vase.png`} alt="product_right_part_image" />
                    <p className="product_static_text">
                        LARGE TERRACOTA VASE
                    </p>

                </div>

            </div>

            <div className="topProduct_div_flex">
                <div className="topProduct_div">
                    {topProduct.map((item: any) => {
                        console.log(item);
                        return (
                            <div
                                key={item.id}
                                className="product_div"
                            >
                                <img
                                    src={item.icon}
                                    alt="product_category_image"
                                    className="product_category_image"
                                />
                                <p className="product_category_name">{item.name}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}