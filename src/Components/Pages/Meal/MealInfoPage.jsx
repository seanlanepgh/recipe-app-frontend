import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from '@tanstack/react-query';
import axios from "axios";
import Grid from '@mui/material/Grid2';

let videoId="";
const MealInfoPage=()=>{
    const[mealInfo,setMealInfo]=useState();
    const {mealId}=useParams();
    const postQuery = useQuery({
        queryKey: ['posts'],
        queryFn: async () => {
            let data = [];
            if (mealId !="") {
                try {
                    const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`);
                    console.log(response.data);
                    data = await response.data;
                    setMealInfo(data.meals[0])

                }catch (error) {
                    console.log(error);
                }
            }
            if(mealInfo){
                const videoURL= mealInfo.strYoutube;
                const str =videoURL.split("=");
                videoId= str[str.length-1];
            }
          return data;
        }
      });
    
      if (postQuery.isLoading) return <h1>Loading....</h1>;
      if (postQuery.isError) return <h1>Error loading data!!!</h1>
      console.log(postQuery.data);
    
    return(
        <>
            {postQuery.data.meals.map((mealInfo) => (
                 <div className="content">
                    <img src={mealInfo.strMealThumb} alt={mealInfo.strMeal} />
                    <div className="infoContent">
                        <h1>{mealInfo.strMeal}</h1>
                        <h2>{mealInfo.strArea} Food</h2>
                        <h3>Category: {mealInfo.strCategory}</h3>
                    </div>
                        <div className="mealDetails">
                                <div>
                                    <h2>Ingredients and Measurements</h2>
                                    <ul className="ingredients-list">
                                        {Object.keys(mealInfo)
                                            .filter(key => key.startsWith("strIngredient") && mealInfo[key])
                                            .map((key, index) => {
                                            
                                                const ingredientNum = key.slice(13); // Extract the number from the key
                                                const measureKey = `strMeasure${ingredientNum}`;
                                                return (
                                                    <li key={index}>
                                                        <span className="ingredient">{mealInfo[key]}</span>
                                                        <span className="measurement">{mealInfo[measureKey] || 'To taste'}</span>
                                                    </li>
                                                );
                                            })}
                                    </ul>
                                </div>
                                <div>
                                    <h2>Instructions</h2>
                                    <p>{mealInfo.strInstructions}</p>
                                </div>
                        </div>
                    </div>
            ))}
        </>
    )
}
export default MealInfoPage;