import {FC, useEffect, useState} from "react";
import './StoreCategoriesProducts.scss';
import {useParams} from "react-router-dom";
import {StoreCategoriesProductsTitle} from "./storeCategoriesProductsTitle/StoreCategoriesProductsTitle";
import {useHomeProducts} from "../../../../hooks/useHomeProducts";

export const StoreCategoriesProducts: FC = () => {

    const {id} = useParams();

    console.log("IDIDID", id);

    const [productsId, setProductsId] = useState<string>("");

    const {data: productsData}: any = useHomeProducts();

    useEffect(() => {
        if (productsData && productsData.length > 0) {
            setProductsId(productsData[0].name);
        }
    }, [productsData, setProductsId]);


    const filteredProducts = productsData && productsData.filter((item: any) => item.category._id === id);


    filteredProducts?.map((item: any) => console.log(item));

    const handleClick = () => {
        filteredProducts?.map((item: any) => console.log(item));
    }

    const isEmpty = filteredProducts?.length === 0;

    //////

    // const title = "haha";

    return (
        <article className="categories_products_article">

            <StoreCategoriesProductsTitle/>

            <div className="store_category_products_div">
                {!isEmpty ? filteredProducts?.map((item: any, index: any) => {

                        const rate = item.rating / 5 * 100;

                        return (

                            <div
                                key={index}
                                className="filtered_products"
                                onClick={handleClick}
                            >
                              
                                <img
                                    src={item.image}
                                    alt="category_product"
                                    className="categopy_product_image"
                                />

                                <p className="category_product_name">{item.name}</p>

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
                                        }}>★★★★★</span>
                                </meter>

                                <p className="category_product_price">{item.price}$</p>


                            </div>
                        )
                    }
                ) : <h1>Empty</h1>
                }

            </div>

        </article>
    )
}