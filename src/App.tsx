import ListGroup from "./components/ListGroup"
function App() {
  let items = ['New York', 'London', 'Paris', 'Madrid']

  return <div><ListGroup items={items} heading='Cities' /></div>
}

export default App;