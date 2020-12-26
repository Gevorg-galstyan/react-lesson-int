import React, { Component } from "react";

export default class Price extends Component {
   
    render() {
        return (
            <div className='Price'>
                {this.props.price}
            </div>
        )
    }
}