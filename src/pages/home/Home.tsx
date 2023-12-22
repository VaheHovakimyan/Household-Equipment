import {FC} from "react";
import {Search} from "../../components/search/Search";
import {Conditions} from "../../components/home/conditions/Conditions";
import {HomeSlider} from "../../components/home/homeSlider/HomeSlider";
import {Bedsheet} from "../../components/home/bedsheet/Bedsheet";
import {NewsletterSignUp} from "../../components/home/newsletterSignUp/NewsletterSignUp";
import {CategoriesProducts} from "../../components/home/categoriesProducts/CategoriesProducts";
import './Home.scss';
import {TopRatingProducts} from "../../components/home/topRatingProducts/TopRatingProducts";


export const Home: FC = () => {

    return (
        <>
            <Search/>
            <Conditions/>
            <HomeSlider/>
            <CategoriesProducts />
            <Bedsheet/>
            <TopRatingProducts />
            <NewsletterSignUp/>
        </>
    )
}