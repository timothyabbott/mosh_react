import React, { useEffect, useRef, useState } from "react";
import ProductList from "./components/ProductList";

const connect = () => console.log("connecting");
const disconnect = () => console.log("disconnecting");

const App = () => {
  const ref = useRef<HTMLInputElement>(null);
  const [category, setCategory] = useState("");

  useEffect(() => {
    connect();
    // this is the cleanup code. If anything has been set, that needs to be undone / closed etc, this is the place to do it.
    return () => disconnect();
  });

  // useEffect could be named "afterRender"
  useEffect(() => {
    if (ref.current) ref.current.focus();
  });
  useEffect(() => {
    document.title = "whoop whoop!!";
  });

  return (
    <div>
      <select
        onChange={(event) => {
          setCategory(event.target.value);
        }}
        name=""
        id=""
        className="form-select"
      >
        <option value=""></option>
        <option value="Clothing">Clothing</option>
        <option value="HouseHold">HouseHold</option>
      </select>
      <ProductList category={category}></ProductList>
      <input ref={ref} type="text" className="form-control" />
    </div>
  );
};

export default App;
