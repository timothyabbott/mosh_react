import { useState } from "react";
import "./ListGroup.css";
import styled from "styled-components";

// this is a react component representing the styles for a ul element
const List = styled.ul`
  list-style: none;
  padding: 0;
`;

// this is a react component representing the styles for a li element
const ListItem = styled.li<ListItemProps>`
  padding: 5px 0;
  background: ${(props) => (props.active ? "blue" : "none")};
`;

interface ListItemProps {
  // this defines the boolean is passed to the ListItem Component
  active: boolean;
}

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  // this is how we setup a componennt to have state.
  // selected index is the stateful value, and the setSelectedIndex is the function to update the state
  // -1 is the default value of the stateful value.
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <>
      <h1>{heading}</h1>
      <List className="list-group">
        {/* this works because JS will return the right most value in any logical and comparison */}
        {items.length === 0 && <p>No Item</p>}
        {/* this is JS, we must wrap it in braces 
                the key is needed so that react can keep track of the elements*/}
        {items.map((item, index) => (
          <ListItem
            active={index === selectedIndex}
            //   this works but we can also use an external function
            //   onClick={() => console.log(item, index)}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
            key={item}
          >
            {item}
          </ListItem>
        ))}
      </List>
    </>
  );
}

export default ListGroup;
