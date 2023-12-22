import {FC} from "react";
import {Search} from "../../components/search/Search";
import {Conditions} from "../../components/home/conditions/Conditions";
import {HomeSlider} from "../../components/home/homeSlider/HomeSlider";
import {Bedsheet} from "../../components/home/bedsheet/Bedsheet";
import {NewsletterSignUp} from "../../components/home/newsletterSignUp/NewsletterSignUp";
import {CategoriesProducts} from "../../components/home/categoriesProducts/CategoriesProducts";
import './Home.scss';


export const Home: FC = () => {

    return (
        <div>
            <Search/>
            <Conditions/>
            <HomeSlider/>
            <CategoriesProducts />
            <Bedsheet/>
            <NewsletterSignUp/>
        </div>
    )
}