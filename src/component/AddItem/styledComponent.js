import styled from "styled-components";

export const AppContainer=styled.div`
display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;
    background-color: #F5F5F5;
`
export const FormDetail=styled.form`
display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    border-radius: 8px;
    width: 100%;
    max-width: 350px;
    @media screen and (min-width: 992px) {
      width: 350px;
      flex-shrink: 0;
      padding: 30px;
    }
`
export const Heading=styled.h1`
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 32px;

color: #171F46;
`
export const InputContainer=styled.div`
display: flex;
flex-direction: column;
margin-top: 20px;
width: 100%;
`
export const InputLabel=styled.label`
margin-bottom: 0px;
font-family: 'Roboto';
font-weight: bold;
font-size: 12px;
line-height: 16px;
color: #475569;
`
export const InputField=styled.input`
font-size: 14px;
    height: 30px;
    border: 1px solid #d7dfe9;
    background-color: #ffffff;
    color: #64748b;
    border-radius: 2px;
    margin-top: 5px;
    padding: 8px 15px 8px 15px;
    outline: none;
`
export const Create=styled.button`
padding: 8px 20px;

width: 93px;
height: 40px;
background-color: #0B69FF;
border-radius: 4px;
border-width: 0px;
font-style: normal;
font-weight: 600;
font-size: 14px;
margin-top: 20px;
color: #FFFFFF;
cursor: pointer;
`