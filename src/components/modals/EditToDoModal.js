import React from "react";
import {Button, Modal} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import styles from "../../assets/css/style.module.css";

function approve(prop) {
    prop.approve(true)
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
                aaa
            </Modal.Body>
            <Modal.Footer>
                <Button
                    variant="primary"
                    onClick={() => {
                        approve(props.approve)
                    }}
                >Edit</Button>
                <Button onClick={props.onHide}>Cancel</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default function DeleteToDoModal(props) {
    const [modalShow, setModalShow] = React.useState(false);

    return (
        <>
            <Button variant="danger" className={`${styles.delModal} ${styles.editModal}`} onClick={() => setModalShow(true)}>
                <FontAwesomeIcon icon={faEdit} />
            </Button>

            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                approve={props}
            />
        </>
    );
}