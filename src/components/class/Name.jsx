import React, {Component} from "react";

export default class Name extends Component{

    render(){
        return(
            <div className='Name'>
                {this.props.val}
            </div>
            
        )
    }
}