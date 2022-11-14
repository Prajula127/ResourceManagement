import {Items,Button} from './styledComponent'

const TabItems=props=>{
const {resources,changeResource,tabItem}=props
const {tag,id}=tabItem
const onResources=()=>{
    resources(id)
    console.log(id)
}

return(
   
        <Items>
            <Button outline={changeResource} type="button" onClick={onResources}>{tag}</Button>
        </Items>
        
)
}
export default TabItems