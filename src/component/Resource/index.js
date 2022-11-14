import {ListItems,CardContainer,Image,Icon,ListDetail,Title,Category,Link,Desc} from './styledComponent'

const Resource=props=>{
    const {resourceLists}=props
    const {title,iconUrl,link,description,category}=resourceLists

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
        </ListItems>
    )
}
export default Resource