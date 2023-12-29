import {FC} from "react";
import './History.scss';
import {HistoryItem} from "./HistoryItem/HistoryItem";
import {useHistory} from "../../hooks/useHistory";


export const History: FC = () => {

    const {data: history}: any = useHistory();

    return (
        <article className="history_article_flex">
            <h1>SHOP HISTORY</h1>
            <div className="history_items_div_flex">

                {history?.map((product: any) => {
                    // console.log("Product", product);
                    return (
                        <HistoryItem
                            key={Math.random()}
                            historyItem={product}
                        />
                    )
                })}
            </div>
        </article>

    )
}