import React from 'react'
import { BoxContainer, FormContainer, Input, MutedLink, SubmitButton,BoldLink } from "./common";

export default function Login(props) {
    return (

        <BoxContainer>
            <FormContainer>
                <Input type="email" placeholder = "Email" />
                <Input type="password" placeholder = "Password" />
            </FormContainer>
            <br/>
                <MutedLink href="#">Forget your password</MutedLink>
                <br/>
                <SubmitButton href="/board" type="submit">Signin</SubmitButton>
                <br/>
                <MutedLink href="#">Don't have an accout? <BoldLink href="/signup">SignUp</BoldLink></MutedLink>
        </BoxContainer>
            
    )
}

