import { useState } from "react";

interface Props{
    items:string[];
    heading:string;
}

function ListGroup({items,heading}:Props) {
    // this is how we setup a componennt to have state. 
    // selected index is the stateful value, and the setSelectedIndex is the function to update the state
    // -1 is the default value of the stateful value.
    const [selectedIndex, setSelectedIndex] = useState(-1)
    
    return (
      <>
        <h1>{heading}</h1>
        <ul className="list-group">
          {/* this works because JS will return the right most value in any logical and comparison */}
          {items.length === 0 && <p>No Item</p>}
          {/* this is JS, we must wrap it in braces 
                the key is needed so that react can keep track of the elements*/}
          {items.map((item, index) => (
            <li
              className={
                selectedIndex === index
                  ? "list-group-item active"
                  : "list-group-item"
              }
              //   this works but we can also use an external function
              //   onClick={() => console.log(item, index)}
              onClick={() => setSelectedIndex(index)}
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