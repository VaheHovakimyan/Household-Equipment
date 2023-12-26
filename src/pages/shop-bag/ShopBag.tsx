import {FC} from "react";
import './ShopBag.scss';


export const ShopBag: FC = () => {
    return (
        <article className="shop_bag_article">

                <h2 className="shop_bag_title">Shopping CART</h2>


            <div className="shop_bag_products_flex">
                <div className="shop_bag_products_left_part">

                </div>
                <div className="shop_bag_products_right_part">

                </div>
            </div>
        </article>
    )
}