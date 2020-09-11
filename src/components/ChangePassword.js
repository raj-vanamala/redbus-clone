import React from 'react'
import { Container } from 'react-bootstrap'
import '../styles/ChangePassword.css'
import { FaCog } from 'react-icons/fa';
import { Formik,Form,Field,ErrorMessage } from 'formik'
import * as Yup from 'yup'
import TextError from './TextError'
import { Button } from '@material-ui/core';

const initialValues = {
    oldPassword : "",
    NewPassword : "",
    ConfirmNewPassword : ""
}

const onSubmit = values => console.log(values)

const validationSchema =  Yup.object({
    oldPassword : Yup.string().required('Required'),
    NewPassword : Yup.string().required('Required'),
    ConfirmNewPassword : Yup.string().required('Required')
})

export default function ChangePassword() {
    return (

        <Formik
                initialValues = {initialValues}
                validationSchema = {validationSchema}
                onSubmit = {onSubmit}
                >
            <Form>
                <h3><FaCog />Change Password</h3>
                <Container className = "Container-css">
                    <table style={{width:"100%"}}>
                        <tr>
                            <td><label htmlFor="email">email</label></td>
                            <td><strong>nagarajvanamala1@gmail.com</strong></td>
                        </tr>
                        <tr>
                            <td><label htmlFor="oldPassword">Enter Old Password</label></td>
                            <td><Field type="password" id="oldPassword" name="oldPassword" /></td>
                            <td><ErrorMessage name = "oldPassword" component = {TextError} /></td>
                        </tr>
                        <tr>
                            <td><label htmlFor="NewPassword">Enter New Password</label></td>
                            <td><Field type="password" id="NewPassword" name="NewPassword" /></td>
                            <td><ErrorMessage name = "NewPassword" component = {TextError} /></td>
                        </tr>
                        <tr>
                            <td><label htmlFor="ConfirmNewPassword">Confirm New Password</label></td>
                            <td><Field type="password" id="ConfirmNewPassword" name="ConfirmNewPassword" /></td>
                            <td><ErrorMessage name = "ConfirmNewPassword" component = {TextError} /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><Button variant="outlined" color="secondary" >Update</Button></td>
                        </tr>
                    </table>
                </Container>
            </Form>
        </Formik>
        
    )
}