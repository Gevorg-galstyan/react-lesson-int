import React, {Component} from "react";
import {Col, Row, Container, Button, Modal} from "react-bootstrap";
import DeleteToDoModal from "../modals/DeleteToDoModal";
import styles from '../../assets/css/style.module.css';

export default class CreateModalButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            toDo: {},
            defaultName: '',
            defaultStartDate: '',
            defaultEndDate: '',
            defaultDescription: '',

        };
    }

    addName = (e) => {
        this.setState({
            defaultName: e.target.value
        })
    };

    addStartDate = (e) => {
        this.setState({
            defaultStartDate: e.target.value
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

    addToDo = () => {
        let {defaultName, defaultDescription, defaultStartDate, defaultEndDate} = this.state;
        let newTodo = {
            [defaultName]: {
                name: defaultName.trim(),
                startDate: defaultStartDate.trim(),
                endDate: defaultEndDate.trim(),
                description: defaultDescription.trim()
            }
        }

        this.setState({
            toDo: {...this.state.toDo, ...newTodo},

            defaultName: '',
            defaultStartDate: '',
            defaultEndDate: '',
            defaultDescription: ''
        })
    }

    render() {
        let {defaultName, defaultStartDate, defaultEndDate, defaultDescription, toDo} = this.state;

        const component = Object.keys(toDo).map((key, index) => {
            return (
                <Col md={4} key={index}>
                    <div className="toDo-container">
                        <div className='toDo-name'><h2>Name : </h2> <h3>{toDo[key].name}</h3></div>
                        <div className='toDo-name'><h2>Start Date</h2> <h3>{toDo[key].startDate}</h3></div>
                        <div className='toDo-name'><h2>End Date</h2><h3>{toDo[key].endDate}</h3></div>
                        <div className='toDo-desc'><h2>Description</h2><h3>{toDo[key].description}</h3></div>
                        <DeleteToDoModal />
                    </div>
                </Col>
            )
        });

        return (
            <>

                <div className="infoContainer">
                    <Container>
                        <Row>
                            <Col md={4}>
                                <div><label htmlFor="" className={styles.active}>ToDo Name</label>
                                    <input type="text"
                                           onChange={this.addName}
                                           value={defaultName}/>
                                </div>
                            </Col>
                            <Col md={4}>
                                <div><label htmlFor="">ToDo Start Date</label>
                                    <input type="date"
                                           onChange={this.addStartDate}
                                           value={defaultStartDate}/>
                                </div>
                            </Col>
                            <Col md={4}>
                                <div><label htmlFor="">ToDo End Date</label>
                                    <input type="date"
                                           onChange={this.addEndDate}
                                           value={defaultEndDate}/>
                                </div>
                            </Col>
                            <Col md={6}><label htmlFor="">ToDo Description</label>
                                <textarea
                                    onChange={this.addDescription}
                                    value={defaultDescription}>
                                </textarea>
                            </Col>
                            <Col md={6}>
                                <button className='createBtn' onClick={this.addToDo}>Add ToDo</button>
                            </Col>
                        </Row>
                    </Container>
                </div>


                <Container>
                    <Row>
                        {component}
                    </Row>
                </Container>


            </>
        )
    }
}