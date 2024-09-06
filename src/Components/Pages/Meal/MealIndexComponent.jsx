import React from "react";
const MealIndexComponent = () => {
  const capitalAlphabet = Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i));
  var index = 0;
  return (
    <>
      {capitalAlphabet.map((letter) => (
        <div className="indexBox" key={index++}>
          <h3>{letter}</h3>
        </div>
      ))}
    </>
  );
};
export default MealIndexComponent;
