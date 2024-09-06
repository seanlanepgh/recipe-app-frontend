import React from "react";
const MealIndexComponent = ({mealIndex}) => {
  const capitalAlphabet = Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i));
  var index = 0;
  return (
    <>
      {capitalAlphabet.map((alphabetLetter) => (
        <div className="indexBox" key={index++} onClick={()=>mealIndex(alphabetLetter)}>
          <h3>{alphabetLetter}</h3>
        </div>
      ))}
    </>
  );
};
export default MealIndexComponent;
