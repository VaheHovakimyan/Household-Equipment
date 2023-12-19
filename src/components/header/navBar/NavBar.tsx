import {FC} from "react";
import './NavBar.scss';
import {Link, NavLink} from "react-router-dom";

export const NavBar: FC = () => {
    return (
        <nav>

            <div className="nav_flex">

                <div className="nav_flex_links">
                    <NavLink to="/" className="navlink">
                        <span className="navlink_style">HOME</span>
                    </NavLink>
                    <NavLink to="/store" className="navlink">
                        <span className="navlink_style">STORE</span>
                    </NavLink>
                    <NavLink to={"/"} className="navlink">
                        <span className="navlink_style">ACCESSORIES</span>
                    </NavLink>
                    <NavLink to={"/"} className="navlink">
                        <span className="navlink_style">BRAND</span>
                    </NavLink>
                    <NavLink to={"/"} className="navlink">
                        <span className="navlink_style">PAGES</span>
                    </NavLink>
                    <NavLink to={"/"} className="navlink">
                        <span className="navlink_style">ABOUT US</span>
                    </NavLink>
                    <NavLink to={"/"} className="navlink">
                        <span className="navlink_style">NEWS</span>
                    </NavLink>
                    <NavLink to={"/"} className="navlink">
                        <span className="navlink_style">CONTACT US </span>
                    </NavLink>
                </div>

            </div>
        </nav>
    )
}