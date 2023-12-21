import {FC} from "react";
import './Conditions.scss';


export const Conditions: FC = () => {
    return (
        <div className="conditions_flex">
            <div className="conditions_div">

                <div className="condition">
                    <img
                        src={`/assets/icons/home/free_shipping.svg`}
                        alt="free_shipping_icon"
                        className="condition_icon"
                    />
                    <p className="condition_text">FREE SHIPPING</p>
                </div>

                <div className="condition">
                    <img
                        src={`/assets/icons/home/refund.svg`}
                        alt="free_shipping_icon"
                        className="condition_icon"
                    />
                    <p className="condition_text">100% REFUND</p>
                </div>

                <div className="condition">
                    <img
                        src={`/assets/icons/home/support.svg`}
                        alt="free_shipping_icon"
                        className="condition_icon"
                    />
                    <p className="condition_text">SUPPORT 24/7</p>
                </div>
            </div>
        </div>
    )
}