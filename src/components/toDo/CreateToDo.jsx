import React, {Component} from "react";
import {Col, Row, Container, Button} from "react-bootstrap";
import DeleteToDoModal from "../modals/DeleteToDoModal";
import styles from '../../assets/css/style.module.css';
import {v4 as uuidv4} from 'uuid';

export default class CreateModalButton extends Component {

    constructor(props) {
        super(props);
        this.state = {
            toDo: [],
            selectedTasks: new Set(),
            defaultName: '',
            defaultStartDate: new Date().toDateString(),
            defaultEndDate: '',
            defaultDescription: '',
        };
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

    addToDo = () => {
        let {defaultName, defaultDescription, defaultEndDate} = this.state;
        let newTodo = {
            _id: uuidv4(),
            name: defaultName.trim(),
            endDate: defaultEndDate.trim(),
            description: defaultDescription.trim()
        }
        this.setState({
            toDo: [...this.state.toDo, newTodo],
            defaultName: '',
            defaultEndDate: '',
            defaultDescription: ''
        })
    }

    deleteTask = (id) => {
        const toDo = this.state.toDo;
        const newToDo = toDo.filter((i) => i._id !== id)

        this.setState({
            toDo: newToDo
        })
    }

    selectTask = (id) => {
        const selectedTasks = new Set(this.state.selectedTasks);

        selectedTasks.has(id) ? selectedTasks.delete(id) : selectedTasks.add(id)

        this.setState({
            selectedTasks
        })
    }

    deleteSelectedTasks = () => {
        const {selectedTasks, toDo} = this.state;

        const newTasks = toDo.filter((task) => !selectedTasks.has(task._id))
        this.setState({
            selectedTasks: new Set(),
            toDo: newTasks
        })
    }

    render() {
        let {defaultName, defaultStartDate, defaultEndDate, defaultDescription, toDo, selectedTasks} = this.state;

        const component = toDo.map((key, index) => {
            return (
                <Col md={4} key={key._id}>
                    <div className="toDo-container">

                        <input type="checkbox" onChange={() => this.selectTask(key._id)}/>

                        <div className='toDo-name'><h2>Name : </h2> <h3>{key.name}</h3></div>
                        <div className='toDo-name'><h2>Start Date</h2><h3>{defaultStartDate}</h3></div>
                        <div className='toDo-name'>
                            <h2>End Date</h2><h3>{new Date(key.endDate).toDateString()}</h3>
                        </div>
                        <div className='toDo-desc'><h2>Description</h2><h3>{key.description}</h3></div>

                        <DeleteToDoModal/>

                        <Button
                            variant="danger"
                            onClick={() => this.deleteTask(key._id)}
                            disabled={selectedTasks.size}
                        >
                            Delete</Button>
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
                                    onClick={this.addToDo}
                                    disabled={selectedTasks.size}
                                >Add ToDo
                                </button>
                            </Col>
                        </Row>
                    </Container>
                </div>


                <Container>
                    <Row>
                        {component}
                    </Row>
                    <Row>
                        <Col className="text-center mt-3">
                            <Button variant={"danger"} disabled={!selectedTasks.size}
                                    onClick={this.deleteSelectedTasks}>Delete Selected Tasks</Button>
                        </Col>
                    </Row>
                </Container>


            </>
        )
    }
}