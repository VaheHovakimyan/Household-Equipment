import {FC} from "react";
import './HeaderLogoElements.scss';


export const HeaderLogoElements: FC = () => {
    return (
        <div className="header_logo_elems_flex">
            <div className="header_logo_elems">
                <div className="header_logo_div">
                    <img
                        src={`/assets/icons/header/logo.png`}
                        alt="header_logo"
                        className="header_logo"
                    />
                    <h1 className="brand_name_heading">BRAND NAME</h1>
                </div>
                <div className="header_elems">
                    <img
                        src={`/assets/icons/header/account.svg`}
                        alt="account_icon"
                        className="header_elem_icon"
                    />
                    <img
                        src={`/assets/icons/header/shop_basket.png`}
                        alt="account_icon"
                        className="header_elem_icon"
                    />
                    <img
                        src={`/assets/icons/header/burger.svg`}
                        alt="account_icon"
                        className="header_elem_icon"
                    />
                </div>
            </div>
        </div>
    )
}