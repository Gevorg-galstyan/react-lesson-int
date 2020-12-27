import React, {Component} from "react";

export default class Name extends Component{

    render(){
        return(
            <h2 className='Name'>
                {this.props.val}
            </h2>
            
        )
    }
}