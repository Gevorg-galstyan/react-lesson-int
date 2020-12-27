import React, { Component } from "react";
import Name from "./Name";
import Price from "./Price";
import Description from "./Description";


class Product extends Component {
    render() {
        const { name, price, description, img } = this.props;
        return (
            <div className="Product">
                <div>
                    <img src={img} alt="banana"  className="w-100" />
                </div>  
                <Name val={name} />
                <Price val={price} />
                <Description val={description} />
            </div>
        )
    }


}

export default Product;