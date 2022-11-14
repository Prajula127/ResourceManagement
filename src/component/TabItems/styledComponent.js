import styled from "styled-components";

export const Items=styled.li`
`
export const Button=styled.button`
background-color: ${(props)=> props.outline ? "#0B69FF" : "rgba(215, 223, 233, 0.24)"};
    border: 1px solid #D7DFE9;
    width: 80px;
    padding: 8px;
    cursor: pointer;
    font-size: 13px;
    font-weight: 500;
    font-family: "Roboto";
    color: ${(props)=> props.outline ?  "#ffffff":"#000000"};
    cursor: pointer;
`