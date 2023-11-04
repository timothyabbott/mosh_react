import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import DismisableAlert from "./components/DismisableAlert";
import ListGroup from "./components/ListGroup";
// in order to import this component, the react-icons library needs to be installed.
import { BsFillCalendarFill } from "react-icons/bs";

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
      <div>
        {/* as this is a react component, we can Just use the component in tags 
      We can also send props*/}
        <BsFillCalendarFill title="this is the title" size="40" color="red" />
      </div>
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
