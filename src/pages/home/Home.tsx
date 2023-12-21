import {FC} from "react";
import './Home.scss';
import {Search} from "../../components/search/Search";
import {Conditions} from "../../components/home/conditions/Conditions";
import {HomeSlider} from "../../components/home/homeSlider/HomeSlider";
import {Bedsheet} from "../../components/home/bedsheet/Bedsheet";
import {NewsletterSignUp} from "../../components/home/newsletterSignUp/NewsletterSignUp";


export const Home: FC = () => {

    return (
        <div>
            <Search/>
            <Conditions/>
            <HomeSlider/>
            <Bedsheet/>
            <NewsletterSignUp/>
        </div>
    )
}