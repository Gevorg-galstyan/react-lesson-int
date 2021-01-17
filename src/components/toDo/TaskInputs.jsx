import React, {Component} from "react";
import {Col} from "react-bootstrap";
import styles from "../../assets/css/style.module.css";
import {v4 as uuidv4} from "uuid";

export default class TaskInputs extends Component{
    state = {
        defaultName: '',
        defaultStartDate: new Date().toDateString(),
        defaultEndDate: '',
        defaultDescription: '',
    }
    addName = (e) => {
        this.setState({
            defaultName: e.target.value
        })
    };
    addEndDate = (e) => {
        this.setState({
            defaultEndDate: e.target.value
        })
    };

    addDescription = (e) => {
        this.setState({
            defaultDescription: e.target.value
        })
    };


    createToDo = () => {
        let {defaultName, defaultDescription, defaultEndDate} = this.state;
        let newTodo = {
            _id: uuidv4(),
            name: defaultName.trim(),
            endDate: defaultEndDate.trim(),
            description: defaultDescription.trim()
        }

        this.props.onAddTask(newTodo);

        this.setState({
            defaultName: '',
            defaultEndDate: '',
            defaultDescription: '',
        })
    }



    render() {
        let {defaultName, defaultDescription, defaultEndDate} = this.state;
        let selectedTasks = this.props.selectedTasks
        return(
            <>
                <Col md={4}>
                    <div><label htmlFor="" className={styles.active}>ToDo Name</label>
                        <input type="text"
                               onChange={this.addName}
                               value={defaultName}
                               disabled={selectedTasks.size}
                        />
                    </div>
                </Col>
                <Col md={4}>
                    <div><label htmlFor="">ToDo End Date</label>
                        <input type="date"
                               onChange={this.addEndDate}
                               value={defaultEndDate}
                               disabled={selectedTasks.size}
                        />
                    </div>
                </Col>
                <Col md={4}><label htmlFor="">ToDo Description</label>
                    <textarea
                        onChange={this.addDescription}
                        value={defaultDescription}
                        disabled={selectedTasks.size}
                    >
                                </textarea>
                </Col>
                <Col md={6}>
                    <button
                        className='createBtn'
                        disabled={selectedTasks.size}
                        onClick={this.createToDo}
                    >Add ToDo
                    </button>
                </Col>
            </>
        )
    }
}