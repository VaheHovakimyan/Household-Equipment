import {FC} from "react";
import './Store.scss';
import {Search} from "../../components/search/Search";
import {StorePremium} from "../../components/store/storePremium/StorePremium";
import {CategoriesSidebarProducts} from "../../components/store/categoriesSidebarProducts/CategoriesSidebarProducts";


export const Store: FC = () => {
    return (
        <div>
            <Search/>
            <StorePremium />
            <CategoriesSidebarProducts />
        </div>
    )
}