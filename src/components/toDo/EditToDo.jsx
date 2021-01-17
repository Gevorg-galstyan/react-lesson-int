import React, {Component} from "react";
import EditToDoModal from "../modals/EditToDoModal";

export default class EditToDo extends Component {
    state = {
        toDo: this.props.state.toDo
    }

    editToDo = () => {
        this.props.editTask(this.state)
    }

    inputValues = (inpType,val, id) => {
        const {toDo} = this.state

        const simToDo = toDo.filter(item => item._id === id);

        inpType === 'name' ? simToDo[0].name = val : simToDo[0].name = simToDo[0].name ;
        inpType === 'endDate' ? simToDo[0].endDate = new Date(val).toDateString() : simToDo[0].endDate = simToDo[0].endDate ;
        inpType === 'description' ? simToDo[0].description = val : simToDo[0].description = simToDo[0].description;


        const result = toDo.map(x => {
            const item = simToDo.find(({ _id }) => _id === x._id);
            return item ? item : x;
        });

        this.setState({
            toDo: result
        },() => {
            console.log(this.state);
        })

    }

    render() {
        // console.log(this.state)
        return(
            <>
                <EditToDoModal
                    state={this.props.state}
                    keyId={this.props.keyId}
                    onEdit={this.editToDo}
                    inputValue={this.inputValues}
                />
            </>
        )
    }

}