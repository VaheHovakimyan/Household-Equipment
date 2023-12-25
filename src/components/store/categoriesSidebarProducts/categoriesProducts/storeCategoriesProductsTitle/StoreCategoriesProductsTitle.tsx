import {FC} from "react";
import {useCategories} from "../../../../../hooks/useCategories";
import {CategoriesTitle} from "../../../../../interfaces/interfaces";
// import {useCategoriesById} from "../../../../../hooks/useCategoriesById";


export const StoreCategoriesProductsTitle: FC = () => {


    // const title = productsData.filter((item: any) => item.category._id === id)
    
    // const category_name = useCategoriesById(id);
    //
    // console.log("CATEGORY NAME", category_name);

    return (
        <>
            <div className="categories_products_title_div">
                <h1 className="categories_products_title">Bedroom</h1>
            </div>

            <div className="store_filter_div">
                <img src={`/assets/icons/store/filter_icon.svg`} alt="filter_icon"/>
                <p className="store_filter_text">FILTER & SORT</p>
            </div>
        </>
    )
}