import {FC, useEffect, useState} from "react";
import './ShopBag.scss';


export const ShopBag: FC = () => {

    const [countItemBag, setCountItemBag] = useState(0);

    const [currentProductOfBag, setCurrentProductOfBag] = useState({});
    const [currentShopBag, setCurrentShopBag] = useState(JSON.parse(localStorage.getItem("currentBag")!));

    const [priceOfSum, setPriceOfSum] = useState(0);

    const shop_bag = JSON.parse(localStorage.getItem("currentBag")!);


    // useEffect(() => {
    //     setCurrentProductOfBag({
    //         ...data,
    //         countOfOrder: +countItemBag
    //     });
    // }, [data, countItemBag]);

    return (
        <article className="shop_bag_article">

            <h2 className="shop_bag_title">Shopping CART</h2>

            <div className="shop_bag_products_flex">
                <div className="shop_bag_products_left_part">
                    {shop_bag?.map((item: any) => {

                        const arrayFromMethod = Array.from({length: item?.countInStock || 0}, (_, index) => index + 1);

                        return (
                            <div className="shop_bag_item_div" key={item.id}>

                                <div className="shop_bag_image_parameters">

                                    <img
                                        src={item.image}
                                        alt="shop_bag_image"
                                        className="shop_bag_item_image"
                                    />

                                    <div className="shop_bag_item">

                                        <div className="shop_bag_item_name_price_div">
                                            <h2 className="shop_bag_item_name">{item.name}</h2>
                                            <h4 className="shop_bag_item_price">{item.price}$</h4>
                                        </div>

                                        <select
                                            className="shop_bag_count_select"
                                            value={item?.countOfOrder}
                                            onChange={
                                                (e: any) => setCountItemBag(e.target.value)
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
                                </div>

                                <div className="delete_btn_div">
                                    <img
                                        src={`assets/icons/shopBag/delete.svg`}
                                        alt="delete_icon"
                                        className="delete_btn"
                                    />
                                </div>
                            </div>
                        )
                    })}

                    <div className="total_sum_div">
                        <p className="total_sum_title">Total</p>
                        <p className="total_sum">{priceOfSum} $</p>
                    </div>

                </div>

                <div className="shop_bag_products_right_part_flex">
                    <div className="shop_bag_products_right_part">

                        <div className="shop_bag_checkout_elements">
                            <div className="shop_bag_order_value_shipping_div">

                                <div className="shop_bag_price_value_div">
                                    <p className="shop_bag_order_shipping_name_value">Order value:</p>
                                    <p className="shop_bag_order_shipping_name_value">{priceOfSum}$</p>
                                </div>

                                <div className="shop_bag_price_value_div">
                                    <p className="shop_bag_order_shipping_name_value">Shipping:</p>
                                    <p className="shop_bag_order_shipping_name_value">0.0$</p>
                                </div>

                            </div>

                            <div className="shop_bag_order_total_div">
                                <p className="shop_bag_order_shipping_name_value">Order value:</p>
                                <p className="shop_bag_order_shipping_name_value">{priceOfSum}$</p>
                            </div>

                        </div>

                        <div className="shop_bag_checkout_div">
                            <button className="shop_bag_checkout">
                                Continue to checkout
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    )
}