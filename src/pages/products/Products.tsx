import {FC, useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {useProduct} from "../../hooks/useProduct";
import './Products.scss';


export const Products: FC = () => {

    const navigate = useNavigate();
    const {id} = useParams();
    const [bool, setBool] = useState(false);
    const {data} = useProduct(id);

    const [count, setCount] = useState(0);

    const [currentProduct, setCurrentProduct] = useState({});

    const [currentProductArray, setCurrentProductArray] = useState<any[]>(JSON.parse(localStorage.getItem("currentBag")!));

    // console.log("CURCURCUR", currentProductArray);
    //
    //
    // console.log("JSON", JSON.parse(localStorage.getItem("currentBag")!));

    useEffect(() => {

        setBool(JSON.parse(localStorage.getItem("currentBag")!));

        console.log("BOOL", bool);

        if (currentProductArray === null) {
            setCurrentProductArray([]);
        }

    }, []);


    const arrayFromMethod = Array.from({length: data?.countInStock || 0}, (_, index) => index + 1);


    useEffect(() => {
        setCurrentProduct({
            ...data,
            countOfOrder: +count
        });
    }, [data, count]);

    
    const onAddToCart = () => {

        // console.log("COUNT", count)

        if (count !== 0) {

            // console.log("CURRENT PRODUCT", currentProduct);

            const product = [
                ...currentProductArray,
                currentProduct
            ]

            setCurrentProductArray(product);
            localStorage.setItem("currentBag", JSON.stringify(product));

            navigate("/shop-bag");
        }
    }

    return (
        <article className="product_article">

            <div className="products_left_part">

                <div className="products_left_part_images">
                    <img
                        src={data?.image}
                        alt="product_image"
                        className="product_image"
                    />
                    <img
                        src={data?.image}
                        alt="product_image"
                        className="product_image"
                    />
                </div>

                <div className="product_left_part_details_div">
                    <div className="product_left_part_details">

                        <p className="product_left_part_details_text">Details</p>
                        <p className="product_left_part_details_rich_desc">{data?.richDescription}</p>

                        <div className="product_left_part_static_details">
                            <p className="product_left_part_static_italic_text">Composition — Cotton 50%, Lyocell
                                50%</p>
                            <p className="product_left_part_static_art_no">Art. No. — 0643448004</p>
                        </div>

                    </div>
                </div>

            </div>

            <div className="product_right_part">

                <h3 className="product_name">{data?.name}</h3>
                <p className="product_price">{data?.price}$</p>
                <img
                    src={data?.image}
                    alt="product_small_image"
                    className="product_small_image"
                />

                <div className="product_location_div">
                    <img
                        src={`/assets/icons/products/location_icon.svg`}
                        alt="location_icon"
                    />
                    <p className="product_location_text">Not available in stores</p>
                </div>

                <div className="product_count_add_to_cart_btn_div">

                    <div className="product_count_div">
                        <select
                            className="product_count"
                            value={count}
                            onChange={
                                (e: any) => setCount(e.target.value)
                            }
                        >
                            <option
                                value="0"
                                disabled={true}
                            >COUNT
                            </option>

                            {arrayFromMethod.map((value: number) => {
                                return (
                                    <option
                                        key={value}
                                        value={value}
                                    >{value}</option>
                                )
                            })}

                        </select>
                    </div>

                    <div className="product_add_btn_div">

                        <button
                            className="products_add_btn"
                            onClick={onAddToCart}
                        >

                            ADD TO CART

                        </button>

                    </div>

                </div>
            </div>

        </article>
    )
}