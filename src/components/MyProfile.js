import React from 'react'
import '../styles/MyProfile.css'
import { Button } from '@material-ui/core';
import { Formik,Form,Field,ErrorMessage } from 'formik'
import * as Yup from 'yup'
import TextError from './TextError'


const initialValues = {
    name : "",
    dateOfBirth : "",
    gender : "",
    email : "",
    mobile : ""
}

const onSubmit = values => console.log(values)

const validationSchema =  Yup.object({
    name : Yup.string().required('Required'),
    dateOfBirth : Yup.string().required('Required'),
    gender : Yup.string().required('Required'),
    email : Yup.string().email('Invalid Email Format').required('Required'),
    mobile : Yup.string().required('Required'),
})

export default function MyProfile() {
    return (
        <div style={{margin: "20px 0px 0px 20px"}}>
            <h1>My Profile</h1>
            <div className="MyProfileContainerCss">
                <div><Button variant="outlined" color="secondary" style={{position : "absolute",right : "0",marginTop : "10px",marginRight:"20px"}}>Update</Button></div>
                <br/><br/>
                <div>
                    <Formik
                    initialValues = {initialValues}
                    validationSchema = {validationSchema}
                    onSubmit = {onSubmit}
                    >
                        <Form>
                            <div style = {{margin : "20px"}}>
                            <div style={{display:"flex"}}>
                                <div>
                                    <div><label className = "profileFontCss" htmlFor="name">YOUR NAME</label></div>
                                    <div style={{width:"300px"}}><Field className="profileFormCss" placeholder="Name" style={{height : "50px",border : "#d84f57",backgroundColor:"#d84f57",color:"white"}} type="text" id="name" name="name" autoComplete="off"></Field></div>
                                    <div><ErrorMessage name = "name" component = {TextError} /></div>
                                </div>
                                <div>
                                    <div><label className = "profileFontCss" htmlFor="dateOfBirth">DATE OF BIRTH</label></div>
                                    <div><Field placeholder="Date Of Birth" style={{height : "50px"}} type="date" id="dateOfBirth" name="dateOfBirth"></Field></div>
                                    <div><ErrorMessage name = "dateOfBirth" component = {TextError} /></div>
                                </div>
                            </div>
                            <div style={{marginTop:"10px"}}>
                                    <div><label className = "profileFontCss" htmlFor="gender">GENDER</label></div>
                                    <div style={{display:"flex"}}>
                                        <div style={{marginRight:"30px"}}><label style={{marginRight:"10px"}} className = "profileFontCss" for="male">Male</label><Field type="radio" id="male" name="gender" value="male"></Field></div>
                                        <div><label style={{marginRight:"10px"}} className = "profileFontCss" for="female">Female</label><Field type="radio" id="female" name="gender" value="female"></Field></div>
                                    </div>
                            </div>
                            <hr/>
                            <div style={{display:"flex"}}>
                                <div>
                                    <div><label className = "profileFontCss" htmlFor="email">EMAIL</label></div>
                                    <div style={{width:"300px"}}><Field className="profileFormCss" placeholder="Email" style={{height : "50px",border : "#d84f57",backgroundColor:"#d84f57",color:"white"}} type="email" id="email" name="email" autoComplete="off"></Field></div>
                                    <div><ErrorMessage name = "email" component = {TextError} /></div>
                                </div>
                                <div>
                                    <div><label className = "profileFontCss" htmlFor="mobile">MOBILE</label></div>
                                    <div style={{width:"300px"}}><Field className="profileFormCss" placeholder="Mobile" style={{height : "50px",border : "#d84f57",backgroundColor:"#d84f57",color:"white"}} type="text" id="mobile" name="mobile" autoComplete="off"></Field></div>
                                    <div><ErrorMessage name = "mobile" component = {TextError} /></div>
                                </div>
                            </div>
                        
                            </div>
                        </Form>
                    </Formik>
                </div>
            </div>
        </div>
    )
}