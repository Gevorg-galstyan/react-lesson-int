import React from "react";
import { Col, Row, Container } from "react-bootstrap";

export default function Dashboard (props){

    let prop = Object.values(props)
    return(
        <Container>
            <Row>
            {
            prop.map((el,index)=> <Col key={index}><div className='create'>{el}</div></Col>)
            }
                
            </Row>
        </Container>
    )
}