import {FC} from "react";
import './Footer.scss';


export const Footer: FC = () => {
    return (
        <footer className="footer">

            <div className="footer_flex">

                <div className="footer_contact_div">
                    <h2 className="footer_contact_title">BRAND NAME</h2>

                    <p className="footer_contact_mid_text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor.
                    </p>

                    <div className="footer_contact">
                        <p className="footer_contact_text">121 king street, Melbourne 3000</p>
                        <p className="footer_contact_text">+12 3 0000 0000</p>
                        <p className="footer_contact_text">contact@brandemail.com</p>
                    </div>

                    <div className="footer_social_icons">
                        <img
                            src={`/assets/icons/footer/facebook.svg`}
                            alt="facebook_icon"
                            className="footer_social_icon"
                        />
                        <img
                            src={`/assets/icons/footer/twitter.svg`}
                            alt="twitter_icon"
                            className="footer_social_icon"
                        />
                        <img
                            src={`/assets/icons/footer/instagram.svg`}
                            alt="instagram_icon"
                            className="footer_social_icon"
                        />
                        <img
                            src={`/assets/icons/footer/youtube.svg`}
                            alt="youtube_icon"
                            className="footer_social_icon"
                        />
                    </div>

                </div>

                <div className="footer_links_newsletter">

                    <div className="footer_mid_div">

                        <p className="footer_mid_div_title">SHOPPING</p>

                        <span className="footer_link">Your cart</span>
                        <span className="footer_link">Your orders</span>
                        <span className="footer_link">Compared items</span>
                        <span className="footer_link">Wishlist items</span>
                        <span className="footer_link">Shipping detail</span>
                    </div>

                    <div className="footer_mid_div">

                        <p className="footer_mid_div_title">MORE LINK</p>

                        <span className="footer_link">Blog</span>
                        <span className="footer_link">Gift Center</span>
                        <span className="footer_link">Buying Guides</span>
                        <span className="footer_link">New Arrivals</span>
                        <span className="footer_link">Clearance</span>
                    </div>

                    <div className="footer_promo_div">

                        <h2 className="footer_mid_div_title">PROMO UPDATE</h2>

                        <div className="footer_promo_top">
                            <p className="footer_promo_date">
                                14  
                                <span className="footer_promo_date_month"> May</span>
                            </p>

                            <p className="footer_promo_description">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </p>
                            <p className="footer_promo_comment">3 comments</p>

                        </div>

                        <div className="footer_promo_bottom">
                            <p className="footer_promo_date">
                                15
                                <span className="footer_promo_date_month"> July</span>
                            </p>

                            <p className="footer_promo_description">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </p>

                            <p className="footer_promo_comment">3 comments</p>


                        </div>
                    </div>
                </div>

            </div>

        </footer>
    )
}