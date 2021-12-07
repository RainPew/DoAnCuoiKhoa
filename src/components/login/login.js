import React from 'react'
import { BoxContainer, FormContainer, Input, MutedLink, SubmitButton,BoldLink } from "./common";

export default function Login(props) {
    return (

        <BoxContainer>
            <FormContainer>
                <Input type="email" placeholder = "Tên Đăng Nhập" />
                <Input type="password" placeholder = "Mật Khẩu" />
            </FormContainer>
            <br/>
                <MutedLink href="#">Quên Mật Khẩu?</MutedLink>
                <br/>
                <SubmitButton href="/board" type="submit">Đăng Nhập</SubmitButton>
                <br/>
                <MutedLink href="#">Bạn Không có Tài Khoản? <BoldLink href="/signup">SignUp</BoldLink></MutedLink>
        </BoxContainer>
            
    )
}

