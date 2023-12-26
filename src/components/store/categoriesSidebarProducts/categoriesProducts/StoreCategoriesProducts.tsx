import {FC, useEffect, useState} from "react";
import './StoreCategoriesProducts.scss';
import {Link, useParams} from "react-router-dom";
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

    const isEmpty = filteredProducts?.length === 0;


    return (
        <article className="categories_products_article">

            <div className="store_category_products_div">

                {!isEmpty ? filteredProducts?.map((item: any, index: any) => {

                        const rate = item.rating / 5 * 100;

                        return (
                            <div className="categories_title_products_div" key={index}>

                                <div className="categories_title_div_column">

                                    <div className="categories_products_title_div">
                                        <h1 className="categories_products_title">{index === 0 ? `${item.category.name}` : null}</h1>
                                    </div>

                                    <div className="store_filter_div_flex">
                                        {index === 0 ?
                                            <div className="store_filter_div">
                                                <img src={`/assets/icons/store/filter_icon.svg`} alt="filter_icon"/>
                                                <p className="store_filter_text">FILTER & SORT</p>
                                            </div>
                                            : null}

                                    </div>

                                </div>

                                <div className="filtered_products_flex">

                                    <Link to={`/products/${item.id}`} className="link_to_product">
                                        <div
                                            className="filtered_products"
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
                                                backgroundImage: `linear-gradient(90deg, gold ${rate}%, rgba(0,0,0,0.2) ${rate}%)`,
                                                WebkitTextFillColor: "transparent",
                                                WebkitBackgroundClip: "text",
                                                backgroundClip: "text"
                                            }}>★★★★★</span>
                                            </meter>

                                            <p className="category_product_price">{item.price}$</p>

                                        </div>
                                    </Link>
                                </div>
                            </div>
                        )
                    }
                ) : <h1 style={{padding:"50px 0"}}>Choose category</h1>
                }

            </div>

        </article>
    )
}