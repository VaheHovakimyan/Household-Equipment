import {FC} from "react";
import './Header.scss';
import {NavBar} from "./navBar/NavBar";
import {HeaderLogoElements} from "./headerLogoElements/HeaderLogoElements";


export const Header: FC = () => {
    return (
        <header className="header">
            <div className="header_flex">
                <HeaderLogoElements/>
                <NavBar/>
            </div>
        </header>
    )
}