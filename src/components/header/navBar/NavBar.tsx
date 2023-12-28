import {FC} from "react";
import './NavBar.scss';
import {Link, NavLink} from "react-router-dom";

export const NavBar: FC = () => {
    return (
        <nav>

            <div className="nav_flex">

                <div className="nav_flex_links">
                    <NavLink
                        to="/"
                        className={
                            ({isActive}) =>
                                isActive ? "navlink_active" : "navlink"
                        }>
                        HOME
                    </NavLink>
                    <NavLink
                        to="/store"
                        className={
                            ({isActive}) =>
                                isActive ? "navlink_active" : "navlink"
                        }
                    >
                        STORE
                    </NavLink>
                    <NavLink to={"/"} className="navlink">
                        ACCESSORIES
                    </NavLink>
                    <NavLink to={"/"} className="navlink">
                        BRAND
                    </NavLink>
                    <NavLink to={"/"} className="navlink">
                        PAGES
                    </NavLink>
                    <NavLink to={"/"} className="navlink">
                        ABOUT US
                    </NavLink>
                    <NavLink to={"/"} className="navlink">
                        NEWS
                    </NavLink>
                    <NavLink to={"/"} className="navlink">
                        CONTACT US
                    </NavLink>
                </div>

            </div>
        </nav>
    )
}