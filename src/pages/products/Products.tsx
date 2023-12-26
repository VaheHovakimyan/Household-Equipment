import {FC} from "react";
import {useParams} from "react-router-dom";
import {useProduct} from "../../hooks/useProduct";
import './Products.scss';


export const Products: FC = () => {

    const {id} = useParams();

    const {data} = useProduct(id);

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
                        <select className="product_count">
                            <option>COUNT</option>

                            {/*<option>1</option>*/}
                            {/*<option>2</option>*/}
                            {/*<option>3</option>*/}
                            {/*<option>4</option>*/}
                            {/*<option>5</option>*/}
                            {/*<option>6</option>*/}
                            {/*<option>7</option>*/}
                            {/*<option>8</option>*/}
                            {/*<option>9</option>*/}
                            {/*<option>10</option>*/}

                        </select>
                    </div>

                    <div className="product_add_btn_div">
                        <button className="products_add_btn">ADD TO CART</button>
                    </div>

                </div>
            </div>
        </article>
    )
}