import {FC, useEffect, useState} from "react";
import './StoreCategoriesSidebar.scss';
import {useCategories} from "../../../../hooks/useCategories";
import {CategoriesInterface} from "../../../../interfaces/interfaces";
import {NavLink} from "react-router-dom";

export const StoreCategoriesSidebar: FC = () => {


    const [categories, setCategories] = useState([]);

    const {data}: any = useCategories();

    useEffect(() => {
        if (data) {
            setCategories(data);
        }
    }, [data, categories, setCategories]);

    return (
        <aside className="store_sidebar_aside">
            <div className="store_sidebar_div">

                <div className="categories_title_div">
                    <p className="categories_title">Categories</p>
                </div>

                <div className="categories_products_sidebar_flex">
                    {categories.map((item: CategoriesInterface) => {
                        return (
                            <div key={item._id} className="sidebar_category_name_div">
                                <NavLink
                                    to={`/store/${item._id}`}
                                    className={
                                        ({isActive}) =>
                                            isActive ?
                                                "sidebar_category_name_active" :
                                                "sidebar_category_name"
                                    }>
                                    {item.name}
                                </NavLink>
                            </div>
                        )
                    })}
                </div>

            </div>
        </aside>
    )
}