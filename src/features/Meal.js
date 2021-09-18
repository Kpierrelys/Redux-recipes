import { MEALS_API_KEY } from "./mealsSlice";
import { useEffect, useState } from "react";

const Meal = ({ meal, mealState }) => {
    const [image, setImage] = useState('');

    const loading = mealState.loading

    useEffect(() => {
        fetch(`https://api.spoonacular.com/recipes/${meal.id}/information?apiKey=${MEALS_API_KEY}&includeNutrition=false`)
            .then(response => response.json())
            .then(data => setImage(data.image))
            .catch(err => console.log(err.message))
    }, [meal.id]);
    return (
        <div>
            {loading ? (<div className="loader"></div>) :   
            (mealState.meals &&
                <div className='meal-card-flex'>
                <div className='meal-card'>
                    {loading ? <div class="loader"></div> : <img src={image} alt={meal.title} style={{width: "100%"}} />}
                    <div className='information'>
                        <h1>{meal.title}</h1>
                        <ul style={{margin: '24px 0'}}>
                            <li><b>Preperation Time:</b> {meal.readyInMinutes} minutes</li>
                            <li><b>servings:</b> {meal.servings}</li>
                        </ul>
                        <a className='link' href={meal.sourceUrl}><button className='recipe-link'>Go to Recipe</button></a>
                    </div>
                </div>
            </div>
            )}
        </div>
    )
}

export default Meal
