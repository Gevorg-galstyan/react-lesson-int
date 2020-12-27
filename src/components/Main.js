import React from 'react';
import Product from './class/Product';
import banana from "../assets/img/banana.jpg";
import apple from "../assets/img/apple.jpg";



export default function Main() {
    let fruits = [
        {
            img: banana,
            name: "banana",
            price: 5,
            description: "Delicious banana"
        },

        {
            img: apple,
            name: "Apple",
            price: 10,
            description: "Apple Dzmrnuk))"
        },
    ]
    let products = fruits.map((el, index) => {
        return <Product key={index} img={el.img} name={el.name} price={el.price} description={el.description} />
    })
    return (
        <div className="d-flex">

            {products}

        </div>
    )
}