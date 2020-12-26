import React, {Component} from "react";

export default class Description extends Component{

    render(){
        return(
            <div className='Description'>
                {this.props.val}
            </div>
        )
    }
}