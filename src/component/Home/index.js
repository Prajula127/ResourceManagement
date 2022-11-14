import { Component } from "react"
import Header from "../Header"
import TabItems from "../TabItems"
import Resource from "../Resource"
import {BiSearch} from "react-icons/bi"
import { TailSpin as Loader } from "react-loader-spinner"
import {AppContainer,Tabs,ListsContainer,SearchContainer,Search,ResourceListContainer,ResultView,SearchImg,SearchHeading,LoaderContainer} from './styledComponent'


import "./index.css"

const resourceUrl="https://media-content.ccbp.in/website/react-assignment/resources.json"

const tabs=[{
    id:"resource",
    tag:"Resource"
},
{
    id:"request",
    tag:"Request"
},
{
    id:"user",
    tag:"User"
},
]

class Home extends Component{
    state={resourceList:[],searchInput:'',isLoading:true,tabItem:tabs[0].id}
    
    componentDidMount(){
        this.getResourceList()
    }

getResourceList=async ()=>{
    try{
    const response=await fetch(resourceUrl)
    const data=await response.json()
    // console.log(data)
    const updateData=data.map(each=>({
        title:each.title,
        iconUrl:each.icon_url,
        link:each.link,
        description:each.description,
        category:each.category,
        tag:each.tag,
        id:each.id
}))
this.setState({resourceList:updateData,isLoading:false})
    }catch(error){
        alert(error.message)
    }
}

clickResources=id=>{
    this.setState({tabItem:id})
}

onSearchInput=event=>{
this.setState({searchInput:event.target.value,search:true})
}

enterSearch=event=>{
    if(event.key==="Enter"){
        this.getResourceList()
    }
}

loadingView=()=>(
        <LoaderContainer>
          <Loader type="ThreeDots" color="#0B69FF" height="50" width="50" />
        </LoaderContainer>
)

getFilterData=()=>{
const {tabItem,resourceList}=this.state
    const resFilter=resourceList.filter(each=>each.tag===tabItem)
    const findLength=resFilter.length>0 ? resFilter:resourceList
 return findLength
}

    render(){
        const {tabItem,searchInput,isLoading}=this.state
        const getFilter=this.getFilterData()
        const searchFilter=getFilter.filter(each=>each.title.toLowerCase().includes(searchInput.toLocaleLowerCase()))

        return(
            <>
            <Header/>
            {isLoading ? (this.loadingView()):(
            <AppContainer>
            <Tabs>
                {tabs.map(each=>            
                 <TabItems tabItem={each} key={each.id} resources={this.clickResources} changeResource={each.id===tabItem}/>
)}
            </Tabs>
            <ListsContainer>
<SearchContainer>
<BiSearch className="search-icon"/>
<Search type="search" value={searchInput} placeholder="Search" onChange={this.onSearchInput} onKeyDown={this.enterSearch}/>
</SearchContainer>
 {searchFilter.length>0 ? (
    <ResourceListContainer>
    {searchFilter.map(each=>(
     <Resource resourceLists={each} key={each.id}/>
     ))}
 </ResourceListContainer> 
 ): (
    <ResultView>
        <SearchImg
          src="https://res.cloudinary.com/dxjowybhg/image/upload/v1664014175/no-search-results_h5bt2t.png"
          alt="no results"
        />
        <SearchHeading>No Search Results</SearchHeading>
       
      </ResultView>
 )}          
            
             </ListsContainer>
            </AppContainer>   
            )
 }   

</>              )
    }
}
export default Home