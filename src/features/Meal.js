import { MEALS_API_KEY } from "./mealsSlice";
import { useEffect, useState } from "react";

const Meal = ({ meal }) => {
    console.log(meal);
    const [image, setImage] = useState('');

    useEffect(() => {
        fetch(`https://api.spoonacular.com/recipes/${meal.id}/information?apiKey=${MEALS_API_KEY}&includeNutrition=false`)
            .then(response => response.json())
            .then(data => setImage(data.image))
            .catch(err => console.log(err.message))
    }, [meal.id])

    return (
        <div>
            {meal && <div className='meal-card-flex'>
                <div className='meal-card'>
                    {<img src={image} alt={meal.title} style={{width: "100%"}} />}
                    <div className='information'>
                        <h1>{meal.title}</h1>
                        <ul style={{margin: '24px 0'}}>
                            <li>Preperation Time: {meal.readyInMinutes} minutes</li>
                            <li>servings: {meal.servings}</li>
                        </ul>
                        <a className='link' href={meal.sourceUrl}><button className='recipe-link'>Go to     Recipe</button></a>
                    </div>
                </div>
            </div>}
        </div>
    )
}

export default Meal
