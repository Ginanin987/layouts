import React from "react";

class ShopCard extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div class="shop-card">
                <div className="shop-card__title">{this.props.card.name}</div>
                <div className="shop-card__subtitle">{this.props.card.color}</div>
                <img src={this.props.card.img} className="shop-card__image"/>
                <div className="shop-card__info">
                    <div className="shop-card__price">${this.props.card.price}</div>
                    <button className="shop-card__button">Add to cart</button>
                </div>
            </div>
        )
    }
}

export default ShopCard