import React from "react";
import ShopCard from "./ShopCard";

class CardView extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="shop-cards">
            {this.props.cards.map((element) => (
                <ShopCard card={element}/>
            ))}
            </div>
        )
    }
}

export default CardView