import React, { useState } from "react";

interface Props {
  text: String;
  length: number;
}

const ExpandableText = ({ text, length }: Props) => {
  let [isCropped, setCropped] = useState(true);

  const crop = (text: String, length: number) => {
    return text.substring(0, length);
  };
  if (text.length <= length) return <p>{text}</p>;
  const displayText = isCropped ? crop(text, length) + "..." : text;

  return (
    <div>
      {displayText}
      <button onClick={() => setCropped(!isCropped)}>
        {isCropped ? "Expand!" : "Collapse!"}
      </button>
    </div>
  );
};

export default ExpandableText;
