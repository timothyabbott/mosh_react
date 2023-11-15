import React, { useEffect, useRef } from "react";

const App = () => {
  const ref = useRef<HTMLInputElement>(null);

  // useEffect could be named "afterRender"
  useEffect(() => {
    if (ref.current) ref.current.focus();
  });
  useEffect(() => {
    document.title = "whoop whoop!!";
  });

  return (
    <div>
      <input ref={ref} type="text" className="form-control" />
    </div>
  );
};

export default App;
