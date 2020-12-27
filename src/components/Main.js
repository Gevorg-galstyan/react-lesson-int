import React from 'react';
import Product from './class/Product';
import banana from "../assets/img/banana.jpg";
import apple from "../assets/img/apple.jpg";

export default function Main() {
    return(
        <div className="d-flex">
            <Product img={banana} name="banana" price={5} description="Delicious banana" />
            <Product img={apple} name="Apple" price={10} description="Green apple Dzmrnuk))" />
        </div>
    )   
}