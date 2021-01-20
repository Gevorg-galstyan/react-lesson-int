import React from "react";
import {Row, Col, Button, Modal, InputGroup, FormControl} from "react-bootstrap";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEdit} from '@fortawesome/free-solid-svg-icons'
import styles from "../../assets/css/style.module.css";
import {func} from "prop-types";

function approve(prop) {
    prop.approve(true)
}
function singleInput(inp, func, id){
    let inputType = inp.name, inputVal = inp.value;
    func.inputValue(inputType, inputVal, id)
}

function CreateEditInputs(props) {
    const id = props.itemId

    // console.log(props)

    const inputs = props.prop.filter(item => item._id === id)
    // console.log(inputs)
    return (
        <>
            <InputGroup className="mb-3">
                <label className={'w-100'}>TODO NAME</label>
                <FormControl
                    placeholder={inputs[0].name}
                    name={'name'}
                    onChange={(e) => singleInput(e.target, props.inputVals, inputs[0]._id)}
                />
            </InputGroup>
            <InputGroup className="mb-3">
                <label className={'w-100'}>TODO END DATE</label>
                <FormControl
                    type={"date"}
                    name={'endDate'}
                    placeholder={inputs[0].endDate}
                    onChange={(e) => singleInput(e.target, props.inputVals, inputs[0]._id)}
                />
            </InputGroup>
            <InputGroup  className="mb-3">
                <label className={'w-100'}>TODO DESCRIPTION</label>
                <FormControl
                    as={"textarea"}
                    name={'description'}
                    placeholder={inputs[0].description}
                    onChange={(e) => singleInput(e.target, props.inputVals,inputs[0]._id)}
                />
            </InputGroup>
        </>
    )
}


function MyVerticallyCenteredModal(props) {
    return (
        <Modal className={`${styles.modal}`}
               {...props}
               size="lg"
               aria-labelledby="contained-modal-title-vcenter"
               centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Fil the Fields and Press Edit
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Row className={"m-0"}>
                    <CreateEditInputs
                        prop={props.state.toDo}
                        itemId={props.keyid}
                        inputVals={props.approve}
                    />

                </Row>

            </Modal.Body>
            <Modal.Footer>
                <Button
                    variant="primary"
                    onClick={props.approve.onEdit}
                >
                    Edit</Button>
                <Button onClick={props.onHide}>Cancel</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default function EditToDoModal(props) {
    const [modalShow, setModalShow] = React.useState(false);

    return (
        <>
            <Button variant="danger" className={`${styles.delModal} ${styles.editModal}`}
                    onClick={() => setModalShow(true)}>
                <FontAwesomeIcon icon={faEdit}/>
            </Button>

            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                approve={props}
                state={props.state}
                keyid={props.keyId}
            />
        </>
    );
}