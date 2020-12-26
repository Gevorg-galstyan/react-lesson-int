import React from 'react';
import Product from './class/Product';
import banana from "../assets/img/banana.jpg";

export default function Main() {
    return(
        <React.Fragment>
            <div>
                <img src={banana} alt="banana"/>
            </div> 
            <Product  name="banana" price={5} description="Delicious banana" />
        </React.Fragment>
    )   
}