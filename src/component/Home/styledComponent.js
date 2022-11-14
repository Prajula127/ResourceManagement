import styled from 'styled-components'

export const AppContainer=styled.div`
display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;
    background-color: #F5F5F5;
`

export const Tabs=styled.ul`
padding-left: 0px;
    display: flex;
    list-style-type: none;
`

export const ListsContainer=styled.div`
width: 80%;
`
export const SearchContainer=styled.div`
background-color: #FFFFFF;
border: 1px solid #D7DFE9;
border-radius: 3px;
height: 40px;
width: 600px;
border-radius: 3px;
display: flex;
padding: 0px 16px 0px 16px;
`

export const Search=styled.input`
outline: none;
    border-width: 0px;
    font-size: 12px;
    font-family: "Roboto";
    color: rgba(126, 133, 142, 0.6);
    width: 100%;
`

export const ResourceListContainer=styled.ul`
padding-left: 0px;
    display: flex;
    flex-wrap: wrap;
`
export const ResultView=styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding-bottom: 64px;
margin-top: 48px;
@media screen and (min-width: 768px) {
      margin-left: 30px;
      width: 70%;
      padding-bottom: 0;
      margin-top: 20px;
    }
`
export const SearchImg=styled.img`
width: 250px;
height: 180px;
@media screen and (min-width: 768px) {
      width: 459px;
      height: 315px;
}
`
export const SearchHeading=styled.h1`
color: #171f46;
    font-family: 'Roboto';
    font-size: 20px;
    font-weight: 500;
    line-height: 1.3px;
    @media screen and (min-width: 768px) {
          margin-top: 32px;
          font-size: 24px;
        }
`
export const LoaderContainer=styled.div`
display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
`




