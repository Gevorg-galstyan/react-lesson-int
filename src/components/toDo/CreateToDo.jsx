import React, {Component} from "react";
import {Col, Row, Container, Button} from "react-bootstrap";
import NewTask from "./NewTask";
import TaskInputs from "./TaskInputs";

export default class CreateModalButton extends Component {

    constructor(props) {
        super(props);
        this.state = {
            toDo: [],
            selectedTasks: new Set(),
        };
    }


    addToDo = (newTodo) => {
        this.setState({
            toDo: [...this.state.toDo, newTodo],
            defaultName: '',
            defaultEndDate: '',
            defaultDescription: ''
        })
    }


    editTask = (newTodo) => {
        console.log(newTodo)
        console.log(this.state)

        this.setState({
            toDo: newTodo['toDo'],
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
        let { selectedTasks} = this.state;
        return (
            <>
                <div className="infoContainer">
                    <Container>
                        <Row>
                            <TaskInputs
                                selectedTasks={this.state.selectedTasks}
                                onAddTask = {this.addToDo}
                            />
                        </Row>
                    </Container>
                </div>

                <Container>
                    <NewTask
                        state={this.state}
                        deleteTask={this.deleteTask}
                        selectTask = {this.selectTask}
                        editTask = {this.editTask}
                    />
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