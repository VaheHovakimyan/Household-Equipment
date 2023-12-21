import {FC} from "react";
import './NewsletterSignUp.scss';


export const NewsletterSignUp: FC = () => {
    return (
        <div className="newsletter_div_flex">
            <div className="newsletter_div">

                <div className="newsletter_text_div">
                    <h4 className="newsletter_description_title">SING UP FOR OUR NEWSLETTER</h4>
                    <p className="newsletter_description_text">Subscribe for the latest DEALS and promotions</p>
                </div>

                <div className="newsletter_input_btn">
                    <input
                        type='text'
                        placeholder="Enter your e-mail address"
                        className="newsletter_input"
                    />

                    <img
                        src={`assets/icons/home/email_icon.svg`}
                        alt="email_icon"
                        className="newsletter_email_icon"
                    />

                </div>

            </div>

        </div>
    )
}