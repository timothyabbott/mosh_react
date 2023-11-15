import React, { useEffect, useRef, useState } from "react";
import ProductList from "./components/ProductList";

const App = () => {
  const ref = useRef<HTMLInputElement>(null);
  const [category, setCategory] = useState("");

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
