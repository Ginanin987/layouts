import React from "react";
import ShopItem from "./ShopItem";

class ListView extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="shop-items">
            {this.props.items.map((element) => (
                <ShopItem item={element}/>
            ))}
            </div>
        )
    }
}

export default ListView