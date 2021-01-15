import React, {Component} from "react";
import {Button, Col, Row} from "react-bootstrap";
import DeleteToDoModal from "../modals/DeleteToDoModal";
import EditToDoModal from "../modals/EditToDoModal";

export default class NewTask extends Component{
    render() {
        let {defaultStartDate, toDo, selectedTasks} = this.props.state;

        const component = toDo.map((key) => {
            return (
                <Col md={4} key={key._id}>
                    <div className="toDo-container">

                        <input type="checkbox" onChange={() => this.props.selectTask(key._id)}/>

                        <div className='toDo-name'><h2>Name : </h2> <h3>{key.name}</h3></div>
                        <div className='toDo-name'><h2>Start Date</h2><h3>{defaultStartDate}</h3></div>
                        <div className='toDo-name'>
                            <h2>End Date</h2><h3>{new Date(key.endDate).toDateString()}</h3>
                        </div>
                        <div className='toDo-desc'><h2>Description</h2><h3>{key.description}</h3></div>

                        <DeleteToDoModal approve={(param) => {
                            param && this.props.deleteTask(key._id)
                        }}/>

                        <EditToDoModal approve={(param) => {
                            param && this.props.deleteTask(key._id)
                        }}/>

                        <Button
                            variant="danger"
                            onClick={() => this.props.deleteTask(key._id)}
                            disabled={selectedTasks.size}
                        >
                            Delete</Button>
                    </div>
                </Col>
            )
        });

        return (
            <Row>
                {component}
            </Row>

        )
    }
}