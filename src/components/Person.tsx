import React, { ReactNode, useState } from "react";

const Person = () => {
  const [person, setPerson] = useState({
    id: 1,
    player: {
      firstName: "Fred",
      secondName: "Fredrikson",
    },
  });
  const updatePerson = () => {
    setPerson({ ...person, player: { ...person.player, firstName: "Bob" } });
  };

  return (
    <>
      <div>{person.player.firstName}</div>
      <div>{person.player.secondName}</div>

      <button onClick={updatePerson}>click </button>
    </>
  );
};

export default Person;
