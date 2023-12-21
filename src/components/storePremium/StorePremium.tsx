import {FC} from "react";
import './StorePremium.scss';

export const StorePremium: FC = () => {
    return (
        <div className="store_premium_div_flex">
            <div className="store_premium_div">
                <h3 className="store_premium_title">Premium Member Exclusive</h3>
                <p className="store_premium_description">15% OFF EVERYTHING + EXTRA gift card & coupon Offers </p>
                <p className="store_premium_text">Not a member? Join now to shop.</p>
            </div>
        </div>
    )
}