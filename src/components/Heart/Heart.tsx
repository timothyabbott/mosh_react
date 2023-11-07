import React, { useState } from "react";
import { AiFillHeart } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";

interface Props {
  onClick: () => void;
}

const Heart = ({ onClick }: Props) => {
  const [liked, setLiked] = useState(false);

  const handleLikeClick = () => {
    setLiked(!liked);
    onClick();
  };
  return liked ? (
    <AiFillHeart onClick={handleLikeClick} />
  ) : (
    <AiOutlineHeart onClick={handleLikeClick} />
  );
};

export default Heart;
