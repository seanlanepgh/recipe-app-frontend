import React from "react";
import { useNavigate } from "react-router-dom";
const MealComponent = ({data}) => {
    let navigate = useNavigate();
    return(
        <>
            {
                (!data)? "Not Found": data.map(meal=>{
                    return(
                        <div className="card" key={meal.idMeal} onClick={()=>{navigate(`/${meal.idMeal}`)}}>
                            <img src={meal.strMealThumb} alt={meal.strMeal} />
                            <h3>{meal.strMeal}</h3>
                        </div>
                    )
                })
            }
        </>
    )
}
export default MealComponent;