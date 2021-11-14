import React from 'react'
import { BoxContainer, FormContainer, Input, MutedLink, SubmitButton,BoldLink } from "./common";


export default function Signup(props) {
    return (
      <BoxContainer>
        <FormContainer>
          <Input type="text" placeholder="Full Name" />
          <Input type="email" placeholder="Email" />
          <Input type="password" placeholder="Password" />
          <Input type="password" placeholder="Confirm Password" />
        </FormContainer>
        <br />
        <MutedLink href="#">Forget your password</MutedLink>
        <br />
        <SubmitButton type="submit">Signin</SubmitButton>
        <br />
        <MutedLink href="#">
          Don't have an accout? <BoldLink href="#">SignUp</BoldLink>
        </MutedLink>
      </BoxContainer>
    );
}
