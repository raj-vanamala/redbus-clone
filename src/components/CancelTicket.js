import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import '../styles/CancelTicket.css'
import { FaEnvelope, FaTicketAlt } from 'react-icons/fa';
import { Formik,Form,Field,ErrorMessage } from 'formik'
import * as Yup from 'yup'
import TextError from './TextError'
import { Button } from '@material-ui/core';

const initialValues = {
    ticketNumber  : "",
    email : ""
}

const onSubmit = values => console.log(values)

const validationSchema =  Yup.object({
    ticketNumber : Yup.string().required('Required'),
    email : Yup.string().email('Invalid Email Format').required('Required'),
})

export default function CancelTicket() {
    return (
        
                <Formik
                initialValues = {initialValues}
                validationSchema = {validationSchema}
                onSubmit = {onSubmit}
                >
                    <Form>
                        <Container className = "cancelTicketShadowCss">
                            <h3 className = "h3Css">Cancel Your Ticket</h3>
                            <Row className="form-css">
                                <Col lg={6}>
                                    <div>
                                    <FaTicketAlt />
                                    <Field type="text" id="ticketNumber" name="ticketNumber" placeholder="Enter Ticket Number"
                                    />
                                    <ErrorMessage name = "ticketNumber" component = {TextError} />
                                    </div>
                                </Col>
                                <Col lg={6}>
                                        <FaEnvelope />
                                        <Field type="email" id="email" name="email"  placeholder="Enter Email"
                                        />
                                        <ErrorMessage name="email" component = {TextError} />
                                </Col>
                                <Col lg={6}>
                                </Col>
                                <Col lg={6} >
                                    <Button variant="outlined" color="secondary" style = {{float : "right",marginRight:"35px",marginTop : "10px",marginBottom : "10px"}}>
                                        SELECT PASSENGERS
                                    </Button>
                                </Col>
                            </Row>
                        </Container>
                    </Form>
                </Formik>
    )
}