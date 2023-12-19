import {FC} from "react";
import './Search.scss';


export const Search: FC = () => {
    return (
        <div className="search_div">
            {/*<input*/}
            {/*    type="text"*/}
            {/*    className="search_input"*/}
            {/*/>*/}

            <form className="nosubmit">
                <input className="nosubmit" type="search" placeholder="Search..."/>
            </form>
            <button className="search_button">Search</button>
        </div>
    )
}