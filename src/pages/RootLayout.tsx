import {FC} from "react";
import {Outlet} from "react-router-dom";
import {Header} from "../components/header/Header";
import {WebsiteEnd} from "../components/websiteEnd/WebsiteEnd";
import {Footer} from "../components/footer/Footer";


export const RootLayout: FC = () => {
    return (
        <>

            <Header/>

            <Outlet/>

            <Footer/>
            <WebsiteEnd/>

        </>
    )
}