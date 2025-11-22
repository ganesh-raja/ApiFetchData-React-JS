import ItemList from "./ItemList"

const Item = ({items}) => {
    return(
        <ul>
            {items.map(item =>
                <ItemList key={item.id} item={item}/>
            )}
        </ul>
    )
}

export default Item