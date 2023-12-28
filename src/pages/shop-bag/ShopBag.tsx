import {FC, useEffect, useState} from "react";
import './ShopBag.scss';
import {ShopItem} from "./shopItem/ShopItem";


export const ShopBag: FC = () => {

    const [currentProductOfBag, setCurrentProductOfBag] = useState({});
    const [currentShopBag, setCurrentShopBag] = useState(JSON.parse(localStorage.getItem("currentBag")!));

    const [priceOfSum, setPriceOfSum] = useState(0);

    const [token, setToken] = useState(JSON.parse(localStorage.getItem("token")!));

    const shop_bag = JSON.parse(localStorage.getItem("currentBag")!);

    const combinedArray = shop_bag.reduce((acc: any, current: any) => {

        const existingItem = acc.find((item: any) => item.id === current.id);

        if (existingItem) {
            existingItem.countOfOrder += current.countOfOrder;
        } else {
            acc.push({...current});
        }

        return acc;
    }, []);

    localStorage.setItem("currentBag", JSON.stringify(combinedArray));

    const onChangeCountOrderOfBag = (shopItem: any, countItemBag: any) => {

        console.log("::::COUNT", countItemBag);

        const currentBag = JSON.parse(localStorage.getItem("currentBag")!);

        const readyBag = currentBag.map((item: any) => {
            if (shopItem.id === item.id) {
                return {
                    ...shopItem,
                    countOfOrder: +countItemBag
                }
            } else {
                return item;
            }
        });

        console.log("READY");

        console.log("READEY BAG BAG BAG BAG BAG BAG ", readyBag);

        localStorage.setItem("currentBag", JSON.stringify(readyBag));

        const updatedCountBag = JSON.parse(localStorage.getItem("currentBag")!);

        setCurrentShopBag(updatedCountBag);
    }


    const onDeleteItem = (id: string) => {

        const newItemsOfBag = shop_bag.filter((card: any) => card.id !== id)
        localStorage.setItem("currentBag", JSON.stringify(newItemsOfBag));

        const updatedArr = JSON.parse(localStorage.getItem("currentBag")!);
        setCurrentShopBag(updatedArr);
    }


    useEffect(() => {
        setPriceOfSum(() => {
            return currentShopBag.reduce((acc: any, current: any) => {
                return acc + (current.countOfOrder * current.price);
            }, 0)
        })
    }, [currentShopBag]);



    return (
        <article className="shop_bag_article">

            <h2 className="shop_bag_title">Shopping CART</h2>

            <div className="shop_bag_products_flex">
                <div className="shop_bag_products_left_part">
                    {currentShopBag?.map((item: any) => {

                        const arrayFromMethod = Array.from({length: item?.countInStock || 0}, (_, index) => index + 1);

                        return (
                            <ShopItem
                                onChangeCountOrderOfBag={onChangeCountOrderOfBag}
                                arrayFromMethod={arrayFromMethod}
                                onDeleteItem={onDeleteItem}
                                item={item}
                                key={item.id}
                            />
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
                            <button
                                className="shop_bag_checkout"
                                onClick={() => {
                                    console.log(token.token);
                                }}
                            >
                                Continue to checkout
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    )
}