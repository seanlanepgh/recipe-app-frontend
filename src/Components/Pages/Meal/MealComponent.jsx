import React from "react";
const MealComponent = ({data}) => {
    return(
        <>
            {
                (!data)? "Not Found": data.map(meal=>{
                    return(
                        <div className="card" key={meal.idMeal}>
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