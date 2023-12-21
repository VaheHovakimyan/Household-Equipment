import {FC} from "react";
import './Store.scss';
import {Search} from "../../components/search/Search";
import {StorePremium} from "../../components/storePremium/StorePremium";

export const Store: FC = () => {
    return (
        <div>
            <Search/>
            <StorePremium />
        </div>
    )
}