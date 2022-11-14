import {ListItems,CardContainer,Image,Icon,ListDetail,Title,Category,Link,Desc,Delete} from './styledComponent'
import {RiDeleteBinLine} from 'react-icons/ri'

const Resource=props=>{
    const {resourceLists,deleteItems}=props
    const {title,iconUrl,link,description,category,id}=resourceLists

     const deleteItem=()=>{
           deleteItems(id)
     }

    return(
        <ListItems>
            <CardContainer>
                <Image>
                <Icon alt={title} src={iconUrl}/>
                </Image>
                <ListDetail>
                    <Title>{title}</Title>
                    <Category>{category}</Category>
                </ListDetail>
            </CardContainer>
            <Link href={link} target="_blank" rel="noreferrer">{link}</Link>
            <Desc>{description}</Desc>
            <Delete type="button" onClick={deleteItem}><RiDeleteBinLine/></Delete>
        </ListItems>
    )
}
export default Resource