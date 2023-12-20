import {FC} from "react";
import './Search.scss';


export const Search: FC = () => {
    return (
        <div className="search_div">

            <div className="search-container">
                <i className="search-icon fas fa-search"></i>
                <input type="text" className="search-input"/>
            </div>

            <button className="search_button">Search</button>
        </div>
    )
}