import React, { useState } from "react";
import Card from "./Card";
import "../App.css";

const Grid = ({ numberofcards }) => {
  const [board, setboard] = useState(Array(numberofcards).fill(""));
  return (
    <div className="grid">
      {board.map((el, index) => (
        <Card player={""} key={index} />
      ))}
    </div>
  );
};

export default Grid;
