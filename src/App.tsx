import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup";
function App() {
  let items = ["New York", "London", "Paris", "Madrid"];
  items = [];
  const handleSelectedItem = (item: string) => {
    console.log(item);
  };

  return (
    <>
      <div>
        <ListGroup
          items={items}
          heading="Cities"
          onSelectItem={handleSelectedItem}
        />
      </div>
      <div>
        <Alert>
          <span>This is the Alert text </span>
        </Alert>
      </div>
    </>
  );
}

export default App;
