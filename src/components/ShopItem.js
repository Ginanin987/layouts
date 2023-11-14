import React from "react";

class ShopItem extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div class="shop-item">
                <img src={this.props.item.img} className="shop-item__image"/>
                <div className="shop-card__title">{this.props.item.name}</div>
                <div className="shop-card__subtitle">{this.props.item.color}</div>
                    <div className="shop-card__price">${this.props.item.price}</div>
                    <button className="shop-card__button">Add to cart</button>
            </div>
        )
    }
}

export default ShopItem