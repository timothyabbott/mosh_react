import React, { FormEvent, useRef, useState } from "react";

const Form = () => {
  const [person, setPerson] = useState({
    name: "",
    age: "",
  });

  const handleSubmit = (event: FormEvent) => {
    // by default the page is posted to a server and so we get a full page reload. we don't want that in this case
    event.preventDefault();
    console.log(person);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          // A potential downside of this approach is that each key press wil trigger a re-render.
          onChange={(event) => {
            setPerson({ ...person, name: event.target.value });
          }}
          //   setting the value of the input to be the same of the state means that the react state will eb the single source of truth for the value of the input
          value={person.name}
          id="name"
          type="text"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input
          onChange={(event) => {
            setPerson({
              ...person,
              age: parseInt(event.target.value),
            });
          }}
          value={person.age}
          id="age"
          type="number"
          className="form-control"
        />
      </div>
      <button className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
};

export default Form;
