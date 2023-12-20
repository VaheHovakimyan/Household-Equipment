import {FC} from "react";
import './Home.scss';
import {Search} from "../../components/search/Search";
import {Conditions} from "../../components/conditions/Conditions";
import {HomeSlider} from "../../components/homeSlider/HomeSlider";
import {Bedsheet} from "../../components/bedsheet/Bedsheet";


export const Home: FC = () => {

    return (
        <div>
            <Search/>
            <Conditions/>
            <HomeSlider/>
            <Bedsheet/>
        </div>
    )
}