import { Component } from "react";
import Header from "../Header";
import {v4 as uuid4} from 'uuid'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
  
// import "./index.css"

import {AppContainer,FormDetail,Heading,InputContainer,InputLabel,InputField,Create} from './styledComponent'
import { css } from "styled-components";

class AddItem extends Component{
state={title:'',link:'',category:'',description:''}


submitDetails=async event =>{
    event.preventDefault()
    const{title,link,description,category}=this.state

    const newData={
      id:uuid4(),
      link:link,
      title:title,
      category:category,
      description:description,
    }
    const url="https://media-content.ccbp.in/website/react-assignment/resource.json"
    const options={
        method:'POST',
        body:JSON.stringify(newData)
    }
    const response=await fetch(url,options)
    const data=await response.json()

    console.log(data)
toast("Lorem ipsum dolor",{position:toast.POSITION.BOTTOM_CENTER,bodyClassName:css({backgroundColor:"green"})})
}

onItem=event=>{
    this.setState({title:event.target.value})
}

onLink=event=>{
    this.setState({link:event.target.value})
}

onResource=event=>{
    this.setState({category:event.target.value})
}

onDescription=event=>{
    this.setState({description:event.target.value})
}

render(){
    const {title,link,category,description}=this.state
    return(
        <>
        <Header/>
        <AppContainer>
         <FormDetail onSubmit={this.submitDetails}>
            <Heading>Item Details</Heading>
         <InputContainer>
            <InputLabel htmlFor="item">ITEM NAME</InputLabel>
            <InputField id="item" type="text" value={title} onChange={this.onItem}/>
            </InputContainer>
            <InputContainer>
            <InputLabel htmlFor="link">LINK</InputLabel>
            <InputField type="text" id="link" value={link} onChange={this.onLink}/>
            </InputContainer>
            <InputContainer>
            <InputLabel htmlFor="resource">Resource NAME</InputLabel>
            <InputField type="text" id="resource" value={category} onChange={this.onResource}/>
            </InputContainer>
            <InputContainer>
            <InputLabel htmlFor="description">ITEM NAME</InputLabel>
            <InputField rows="8" id="description" type="text" value={description} onChange={this.onDescription}/>
            </InputContainer>
            <Create type="submit">Create</Create>
         </FormDetail>
        </AppContainer>
        </>
    )
}
}
export default AddItem