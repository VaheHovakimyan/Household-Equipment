import {FC} from "react";
import './CategoriesSidebarProducts.scss';
import {StoreCategoriesSidebar} from "./categoriesSidebar/StoreCategoriesSidebar";
import {StoreCategoriesProducts} from "./categoriesProducts/StoreCategoriesProducts";

export const CategoriesSidebarProducts: FC = () => {


    return (
        <div className="categories_sidebar_products">
            <StoreCategoriesSidebar/>
            <StoreCategoriesProducts/>
        </div>
    )
}