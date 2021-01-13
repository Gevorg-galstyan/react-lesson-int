import React from "react";
import {Button, Modal} from "react-bootstrap";
import styles from "../../assets/css/style.module.css"

function approve(prop) {
    prop.approve(true)

}

function MyVerticallyCenteredModal(props) {
    return (
        <Modal className={styles.modal}
               {...props}
               size="lg"
               aria-labelledby="contained-modal-title-vcenter"
               centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    You definitely want to delete
                </Modal.Title>
            </Modal.Header>
            <Modal.Footer>
                <Button
                    variant="danger"
                    onClick={() => {
                        approve(props.approve)
                    }}
                >Yes</Button>
                <Button onClick={props.onHide}>Cancel</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default function DeleteToDoModal(props) {
    const [modalShow, setModalShow] = React.useState(false);

    return (
        <>
            <Button variant="primary" className={styles.delModal} onClick={() => setModalShow(true)}>
                X
            </Button>

            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                approve={props}
            />
        </>
    );
}