import {FC, useState} from "react";
import './History.scss';
import {HistoryItem} from "./HistoryItem/HistoryItem";

export const History: FC = () => {

    const [history, setHistory] = useState(JSON.parse(localStorage.getItem("currentBag")!));

    return (
        <article className="history_article_flex">
            <h1> SHOP HISTORY</h1>
            <div className="history_items_div_flex">
            {history.map((product: any) => {
                return (
                    <HistoryItem historyItem={product} />
                )
            })}
            </div>
        </article>

    )
}