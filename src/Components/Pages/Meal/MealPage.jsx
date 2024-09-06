import React, { useState, useEffect } from "react";
import MealComponent from "./MealComponent";
import MealIndexComponent from "./MealIndexComponent";
const MealPage = () => {
  const [url, setUrl] = useState(
    "https://www.themealdb.com/api/json/v1/1/search.php?f=a"
  );
  const [meal, setMeals] = useState();
  const [show, setShow] = useState(false);
  useEffect(() => {
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setMeals(data.meals);
        setShow(true);
      });
  }, []);
  return (
    <>
      <div className="main">
        <div className="header">
          <h1> Search Meal Recipes</h1>
        </div>
        <div className="searchBox">
          <input type="searchs" className="searchBar" />
        </div>
        <div className="mealContainer">
          {show ? <MealComponent data={meal} /> : "Not Found"}
        </div>
        <div className="indexContainer">
          <MealIndexComponent />
        </div>
      </div>
    </>
  );
};
export default MealPage;
