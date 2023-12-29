import {FC} from "react";
import './HistoryItem.scss';
import {HistoryItemInterface} from "../../../interfaces/interfaces";


export const HistoryItem: FC<HistoryItemInterface> = (historyItem: any) => {

    const item = historyItem.historyItem?.orderItems;

    return (
        <>
            {item.map((orderItem: any) => {
                return (
                    <div className="history_item_flex" key={orderItem?._id || Math.random()}>
                        <div className="history_item">
                            <img
                                src={orderItem?.product.image}
                                alt="history_image"
                                width="80px"
                                height="80px"
                            />
                            <h3 className="history_item_name">{orderItem?.product.name}</h3>
                            <p className="history_item_name">Quantity: {orderItem?.quantity}</p>
                            <h3 className="history_item_name">{orderItem?.product.name}</h3>
                            <h3 className="history_item_name">{orderItem?.product.name}</h3>
                        </div>
                    </div>
                )
            })}
        </>
    )
}