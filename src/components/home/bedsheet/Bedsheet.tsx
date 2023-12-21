import {FC} from "react";
import './Bedsheet.scss';

export const Bedsheet: FC = () => {
    return (
        <div className="bedsheet_div">
            <div className="bedsheet_poster_div">
                <div className="bedsheet_elems">
                    <h2 className="bedsheet_title">BEDSHEET SETS</h2>
                    <div className="bedsheet_price">
                        <p className="bedsheet_new_price">$50.00</p>
                        <p className="bedsheet_old_price">
                            <del>$220.00</del>
                        </p>
                    </div>
                    <p className="bedsheet_description">
                        Lorem ipsum dolor sit amet, consectetur <br/>
                        adipiscing elit, sed do eiusmod tempor.
                    </p>
                    <button className="bedsheet_view_details_btn">
                        VIEW DETAILS
                    </button>
                </div>
            </div>
        </div>
    )
}