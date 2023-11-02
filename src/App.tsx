import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import DismisableAlert from "./components/DismisableAlert";
import ListGroup from "./components/ListGroup";

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

  return (
    <>
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
