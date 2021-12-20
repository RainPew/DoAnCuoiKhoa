import React, { Component } from 'react'
import { Formik, Form , Field, ErrorMessage } from 'formik';
import { Input, Space, Button } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import Axios  from 'axios';
import * as yup from "yup";

const signupUserSchema = yup.object().shape({
    email: yup.string().required("*Email không được để trống!").email("*Phải là 1 email"),
    password: yup.string().required("*Mật Khẩu không được để trống!"),
    fullname: yup.string().required("*Tên không được để trống!")
})

// http://167.99.78.93:4009
export default class Register extends Component {
    _handleSubmit = values => {
        Axios({
          method: "POST",
          url: "http://167.99.78.93:4009/v1/auth/register",
          data: values,
        })
          .then((res) => {
            console.log(res);
          })
          .catch((err) => {
            console.log(err);
          }); 
        console.log(values);
    }
    render() {
        return (
            <div>
                 <div className="wrap-login">
                <div className="layout-login">
                    <Formik 
                    initialValues={{
                        email:"",
                        password:"",
                        fullname:"",  
                        role: "616436e4ebd1b1d9f2539770",
                        level:"61a250e49e77d6d17b0b8e47",
                        nextLevel:"61a258d82522f4dcf44a971c"
                         
                    }}
                    validationSchema={signupUserSchema}
                    onSubmit={this._handleSubmit}
                    render={(formikProps) => (
                    <Form className="login-form text-center py-5 mx-auto">
                        <div>
                            <h2 style={{ fontWeight: "bold" }}>PMS</h2>
                        </div>
                        <Space direction="vertical" className="py-2" style={{ minWidth: 250, outlineColor: "rgb(17,155,168)" }}>

                            <Field className="form-login" type="name" placeholder="Tên" prefix={<UserOutlined />} name="fullname" onChange={formikProps.handleChange}/>
                             <ErrorMessage name="fullname">
                                 {msg => <div className="alert alert-danger">{msg}</div>}
                             </ErrorMessage>
                            <Field className="form-login" type="email" placeholder="email" prefix={<UserOutlined />} name="email" onChange={formikProps.handleChange}/> 
                            <ErrorMessage name="email">
                                {msg => <div className="alert alert-danger">{msg}</div>}
                            </ErrorMessage>
                            <Field className="form-login" type="password" placeholder="password" prefix={<UserOutlined />} name="password" onChange={formikProps.handleChange}/>
                            <ErrorMessage name="password">
                                {msg => <div className="alert alert-danger">{msg}</div>}
                            </ErrorMessage>  

                        </Space>
                        <div className="btn-login py-2">
                            <button type="submit" className="btn btn-1">Đăng Ký</button>
                        </div>
                        <div style={{position:'absolute', bottom:'20px', left:'40%'}}> 
                            <p>Đăng Nhập Với:</p>
                            <Button shape="circle" style={{width:'40px',height:'40px',borderRadius:'50%',color:'white',backgroundColor:'rgb(56,88,154)'}} className="mr-2">
                                <i className="fab fa-facebook-f"></i>
                            </Button>
                            <Button shape="circle" style={{width:'40px',height:'40px',borderRadius:'50%',color:'white',backgroundColor:'rgb(29,161,242)'}} className="ml-2">
                                <i className="fab fa-twitter"></i>
                            </Button>
                        </div>
                    </Form>
                    )} />
                </div>
            </div>
            </div>
        )
    }
}
