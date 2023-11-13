import React, { FormEvent } from "react";

const Form = () => {
  const handleSubmit = (event: FormEvent) => {
    // by default the page is posted to a server and so we get a full page reload. we don't want that in this case
    event.preventDefault();
    console.log("form sumbitted");
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input id="name" type="text" className="form-control" />
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input id="age" type="number" className="form-control" />
      </div>
      <button className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
};

export default Form;
