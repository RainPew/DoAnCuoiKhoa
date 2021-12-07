import styled from "styled-components";

export const BoxContainer = styled.div`
    width:100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top:0px; 
`;

export const FormContainer = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    box-shadow: 0px 0px 2.5px rgba(15,15,15, 0.19);

`;

export const MutedLink = styled.a`
    font-size: 12px;
    color: rgb(200,200,200, 0.8);
    font-weight: 500;
    text-decoration: none;
    text-align: center;
`;

export const BoldLink = styled.a`
  font-size: 12px;
  color: rgba(0 178 238);
  font-weight: 500;
  text-decoration: none;
`;

export const Input = styled.input`
  width: 100%;
  height: 42px;
  outline: none;
  border: 1px solid rgba(200, 200, 200, 0.3);
  padding: 0px 10px;
  border-bottom: 1.4px solid transparent;
  transition: all 300ms ease-in-out;

  &::placeholder {
    color: rgba(200, 200, 200, 1);
  }
  &:not(:last-of-type) {
    border-bottom: 1.5px solid rgba(200, 200, 200, 0.4);
  }

  &:focus {
    outline: none;
    border-bottom: 2px solid rgb(0 178 238);
  }
`;

export const SubmitButton = styled.a`
  width: 100%;
  padding: 11px 40%;
  color: #ffff;
  font-size: 12px;
  font-weigth: 600;
  border: none;
  text-decoration: none;
  border-radius: 100px 100px 100px 100px;
  cursor: pointer;
  transition: all, 240ms ease-in-out;

  background: rgb(0 178 238);
  background: linear-gradient(
    58deg,
    rgba(0 178 238) 20%,
    rgba(100, 149, 237) 100%
  );

  &:hover {
    filter: brightness(1.03);
  }
`;  
