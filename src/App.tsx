import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import DismisableAlert from "./components/DismisableAlert";
import ListGroup from "./components/ListGroup";
import Heart from "./components/Heart/Heart";
import Person from "./components/Person";
import ExpandableText from "./components/ExpandableText";
function App() {
  let items = ["New York", "London", "Paris", "Madrid"];

  // items = [];
  const handleSelectedItem = (item: string) => {
    console.log(item);
  };
  const handleButtonClick = () => {
    console.log("you clicked the button");
    setVisible(true);
  };
  let [visible, setVisible] = useState(false);
  const handleClose = () => {
    setVisible(false);
  };

  function handleLikeClicked(): void {
    console.log("clickety-click");
  }

  return (
    <>
      <ExpandableText length={10} text={items.join(" ")}></ExpandableText>
      <Person></Person>
      <Heart onClick={handleLikeClicked} />
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectedItem}
      />
      <Alert>
        <span>This is the Alert text </span>
      </Alert>
      <Button
        buttonText={"My Button"}
        color="secondary"
        handleClick={() => {
          handleButtonClick();
        }}
      />
      {visible && (
        <DismisableAlert alertText="look out!" onClose={handleClose} />
      )}
    </>
  );
}

export default App;
