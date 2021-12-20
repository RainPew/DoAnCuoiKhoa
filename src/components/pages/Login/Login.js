import React, { Component } from 'react';
import "../Css/Style.css";
import {Form, Formik , Field } from "formik"
import { Input, Space, Button } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { Axios } from 'axios';

export default class Login extends Component {
    render() {
        return (
            <div>
                <div className="wrap-login">
                <div className="layout-login">
                    <Formik 
                        initialValues = {{
                            email: "",
                            password: "",
                        }}
                        onSubmit = {(values) => {
                           
                        }}
                        render={({handleChange})=>(

                    <Form className="login-form text-center py-5 mx-auto">
                        <div>
                            <h2 style={{ fontWeight: "bold" }}>PMS</h2>
                        </div>
                        <Space direction="vertical" className="py-2" style={{ minWidth: 250, outlineColor: "rgb(17,155,168)" }}>
                            <Field className="form-login" type="email" placeholder="email" prefix={<UserOutlined  />} name="email" onChange={handleChange}/>
                            <Field className="form-login" type="password" placeholder="Mật Khẩu" prefix={<LockOutlined />} name="password" onChange={handleChange} />
                        </Space>
                        <div className="btn-login py-2">
                            <a href="/board" type="submit" className="btn btn-1">Đăng Nhập</a>
                        </div>
                        <div className="mt-3">
                            <span>Bạn không có tài khoản? <a href="/register">Đăng Ký</a> </span>
                        </div>
                        <div style={{position:'absolute', bottom:'20px', left:'40%'}}> 
                            <p>Đăng Nhập Với:</p>
                            <Button shape="circle" style={{width:'40px',height:'40px',borderRadius:'50%',color:'white',backgroundColor:'rgb(56,88,154)'}} className="mr-2">
                                <i class="fab fa-facebook-f"></i>
                            </Button>
                            <Button shape="circle" style={{width:'40px',height:'40px',borderRadius:'50%',color:'white',backgroundColor:'rgb(29,161,242)'}} className="ml-2">
                                <i class="fab fa-twitter"></i>
                            </Button>
                        </div>
                    </Form>
                        )}
                    />
                </div>
            </div>
            </div>
        )
    }
}
