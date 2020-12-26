import React, {Component} from "react";
import Name from "./Name";
import Price from "./Price";
import Description from "./Description";



class Product extends Component{
    render(){
        return(
            <div className="Product">
                <Name name="banana"/>
                <Price price={5000} />
                <Description description="Delicious banana" />
            </div>
        )
    }
        
    
}

export default Product;