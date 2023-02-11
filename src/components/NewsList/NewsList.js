import NewsEl from "../NewsEl/NewsEl"
import elements from "./NewsList.styled"

const { List } = elements

const NewsList = ({ contents, query }) => {
    let contentsNeeded = contents
    if (query) {
        contentsNeeded = contents.filter(({ title }) => title.toLowerCase().includes(query))
    }

    const items = contentsNeeded.map((itemData) => {
        return <NewsEl key={itemData.id} info={itemData} />
    })

    return (
        <List>
            {items}
        </List>
    )
}

export default NewsList