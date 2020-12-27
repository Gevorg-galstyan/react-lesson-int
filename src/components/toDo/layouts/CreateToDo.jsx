import React, { Component } from "react";
import { Col, Row, Container } from "react-bootstrap";
import Dashboard from "../Dashboard";

export default class CreateModalButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name : 'a',
            startDate : 's',
            endDate : 'd',
            description : 'f'
        }
    }

    addName = (e) => {
        console.log(e.target.value)
    }
    
    addStartDate = (e) => {
        console.log(e.target.value)
    }
    
    addEndDate = (e) => {
        console.log(e.target.value)
    }
    
    addDescription = (e) => {
        console.log(e.target.value)
    }

    render() {
        let {name, startDate, endDate, description} = this.state;
        return (
            <>
                <div className="infoContainer">
                    <Container>
                        <Row>
                            <Col md={4}>
                                <div><label htmlFor="">ToDo Name</label> <input type="text" onChange={this.addName} /></div>
                            </Col>
                            <Col md={4}>
                                <div><label htmlFor="">ToDo Start Date</label><input type="date" onChange={this.addStartDate}/></div>
                            </Col>
                            <Col md={4}>
                                <div><label htmlFor="">ToDo End Date</label><input type="date" onChange={this.addEndDate} /></div>
                            </Col>
                            <Col md={6}><label htmlFor="">ToDo Description</label><textarea onChange={this.addDescription} ></textarea></Col>
                            <Col md={6}><button className='createBtn'>Add ToDo</button></Col>
                        </Row>
                    </Container>
                </div>
                <Dashboard name={name} startDate={startDate} endDate={endDate} description={description} />
            </>
        )
    }

}