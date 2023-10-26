import { MouseEvent } from "react";

function ListGroup() {
    let items = ['New York', 'London', 'Paris', 'Madrid']
    const handleClick = (event:MouseEvent) => console.log(event) 
    

    return (
      <>
        <h1>List</h1>
        <ul className="list-group">
          {/* this works because JS will return the right most value in any logical and comparison */}
          {items.length === 0 && <p>No Item</p>}
          {/* this is JS, we must wrap it in braces 
                the key is needed so that react can keep track of the elements*/}
          {items.map((item, index) => (
            <li
              className="list-group-item"
            //   this works but we can also use an external function
            //   onClick={() => console.log(item, index)}
            onClick={handleClick}
              key={item}
            >
              {item}
            </li>
          ))}
        </ul>
      </>
    );
}

export default ListGroup;