import React from "react";

interface Props {
  buttonText: String;
  // the question mark makes the color property optional
  // the strings seperated by pipes validates props. The linter will give warnings, but no errors will appear.
  color?: "primary" | "secondary" | "danger";
  // means no params are taken, and there is no return value
  handleClick: () => void;
}
// primary is the default value of color
const Button = ({ buttonText, color = "primary", handleClick }: Props) => {
  return (
    <button className={"btn btn-" + color} onClick={handleClick}>
      {buttonText}
    </button>
  );
};

export default Button;
