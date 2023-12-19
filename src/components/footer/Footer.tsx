import {FC} from "react";
import './Footer.scss';


export const Footer: FC = () => {
    return (
        <footer className="footer">

            <div className="footer_flex">

                <div className="footer_contact_div">
                    <h2>BRAND NAME</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor.
                    </p>

                    <div className="footer_contact">
                        <p>121 king street, Melbourne 3000</p>
                        <p>+12 3 0000 0000</p>
                        <p>contact@brandemail.com</p>
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

                        <span>Your cart</span>
                        <span>Your orders</span>
                        <span>Compared items</span>
                        <span>Wishlist items</span>
                        <span>Shipping detail</span>
                    </div>

                    <div className="footer_mid_div">

                        <p className="footer_mid_div_title">MORE LINK</p>

                        <span>Blog</span>
                        <span>Gift Center</span>
                        <span>Buying Guides</span>
                        <span>New Arrivals</span>
                        <span>Clearance</span>
                    </div>

                    <div className="footer_promo_div">
                        <div className="footer_promo_top">
                            <p className="footer_promo_date">
                                14
                                <span className="footer_promo_date_month">
                                    May
                                </span>
                            </p>

                            <p className="footer_promo_description">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </p>
                            <p className="footer_promo_comment">3 comments</p>

                        </div>

                        <div className="footer_promo_bottom">
                            <p className="footer_promo_date">
                                15
                                <span className="footer_promo_date_month">
                                    July
                                </span>
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