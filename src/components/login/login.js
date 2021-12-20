import React, { Component } from 'react'
import { BoxContainer, FormContainer, Input, MutedLink, SubmitButton,BoldLink } from "./common";


 export default class login extends Component {
     render() {
         return (
             
        <BoxContainer>   
                <Input type="email" placeholder = "Tên Đăng Nhập" />
                <br />
                <Input type="password" placeholder = "Mật Khẩu" />
            <br/>
                <MutedLink href="#">Quên Mật Khẩu?</MutedLink>
                <br/>
                <SubmitButton href="/board" type="submit">Đăng Nhập</SubmitButton>
                <br/>
                <MutedLink href="#">Bạn Không có Tài Khoản? <BoldLink href="/signup">Đăng Ký</BoldLink></MutedLink>
        </BoxContainer>
             
         )
     }
 }
 