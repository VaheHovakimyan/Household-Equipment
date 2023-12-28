import {FC} from "react";
import {HistoryItemInterface}  from '../../../interfaces/interfaces';
import './HistoryItem.scss';



export const HistoryItem: FC<HistoryItemInterface> = ({historyItem}) => {
    return (
        <div className="history_item_flex">
            <h1>{historyItem.id}</h1>
        </div>
    )
}