import React, { Component } from "react";

export default class Price extends Component {
   constructor(props){
       super(props);

       this.state = {
            val : this.props.val,
            currency : "֏",
            defaultCurrency : "$",
            exchangeRate : 500,
            bool: true
       }
   }
   changeCurency = () => {
        this.setState({    
            bool: !this.state.bool
        })
   }
    render() {
        let {val, currency, defaultCurrency, exchangeRate, bool} = this.state
        return (
            <>
            <div className='Price'>
                {bool ? val : val * exchangeRate}
                <span> { bool ? defaultCurrency : currency  }</span>
            </div>
            <div>
                <button 
                onClick={this.changeCurency}
                >Exchange to { bool ? currency : defaultCurrency }</button>
            </div>
            </>
        )
    }
}