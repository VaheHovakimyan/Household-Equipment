import {FC, useState} from "react";

interface It {
    item: any,
    onDeleteItem: any,
    arrayFromMethod: any,
    onChangeCountOrderOfBag: any
}

export const ShopItem: FC<It> = ({item, onDeleteItem, arrayFromMethod, onChangeCountOrderOfBag}) => {

    const [countItemBag, setCountItemBag] = useState(item.countOfOrder);

    console.log("ITEM", item);

    return (
        <div className="shop_bag_item_div">

            <div className="shop_bag_image_parameters">

                <img
                    src={item.image}
                    alt="shop_bag_image"
                    className="shop_bag_item_image"
                />

                <div className="shop_bag_item">

                    <div className="shop_bag_item_name_price_div">
                        <h2 className="shop_bag_item_name">{item.name}</h2>
                        <h4 className="shop_bag_item_price">{item.price}$</h4>
                    </div>

                    <select
                        className="shop_bag_count_select"
                        value={countItemBag}
                        onChange={(e) => {
                            const val = +e.target.value;
                            setCountItemBag(() => val);
                            console.log("::::COUNTItem Bag", val);
                            onChangeCountOrderOfBag(item, val);
                        }}
                    >
                        <option
                            value="0"
                            disabled={true}
                        >COUNT
                        </option>

                        {arrayFromMethod.map((value: number) => {
                            return (
                                <option
                                    key={value}
                                    value={value}
                                >{value}</option>
                            )
                        })}

                    </select>
                </div>
            </div>

            <div className="delete_btn_div">
                <img
                    src={`assets/icons/shopBag/delete.svg`}
                    alt="delete_icon"
                    className="delete_btn"
                    onClick={() => onDeleteItem(item.id)}
                />
            </div>
        </div>
    )
}