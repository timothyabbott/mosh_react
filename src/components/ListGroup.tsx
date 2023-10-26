function ListGroup() {
    const items = ['New York', 'London', 'Paris', 'Madrid']
    return (
        <>
            <h1>List</h1>
            <ul className="list-group">
                {/* this is JS, we must wrap it in braces 
                the key is needed so that react can keep track of the elements*/}
                {items.map(item => <li className="list-group-item" key={item}>{item}</li>)}

            </ul>
        </>
    )
}

export default ListGroup;