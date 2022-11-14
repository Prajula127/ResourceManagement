import styled from 'styled-components'

export const NavHeader=styled.nav`
display: flex;
justify-content: center;
border-bottom: 1px solid rgb(243, 243, 243);
`
export const NavContainer=styled.div`
display: flex;
align-items: center;
justify-content: space-between;
width: 90%;
max-width: 1110px;
padding-top: 10px;
padding-bottom: 10px;
`

export const NavContent=styled.div`
display: flex;
justify-content: center;
`

export const Logo=styled.img``

export const AddButton=styled.button`
padding: 8px;
    font-size: 12px;
    font-family: "Roboto";
    font-weight: 500;    
    color: #ffffff;
    background: #2DCA73;
    border-radius: 4px;
    border-width: 0px;
    cursor: pointer;
    margin-top: 6px;
    margin-right: 10px;
`

export const LogoutButton=styled.button`
background-color: transparent;
border-width: 0px;
cursor: pointer;
`

export const LogoutImage=styled.img`
width: 40px;
    height: 40px;
    border-radius: 20px;
`