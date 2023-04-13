import { IoBasketOutline } from "react-icons/io5";

function Card() {
    return (
        <div className="flex-box">
            <div className="flex-element-top">
                <img className="flex-element-img" src="" />
            </div>
            <div className="flex-element-bottom">
                <p className="flex-element price">$</p>
                <button className="flex-element add-basket">
                    <IoBasketOutline className="add-basket-img"/>
                </button>
                <button className="flex-element add-favourite">🤍</button>
            </div>
        </div>
    );
}

export default Card;