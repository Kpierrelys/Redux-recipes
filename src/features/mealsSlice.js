import axios from 'axios';

export const MEALS_API_KEY = '4f0db3440e3543fa8f73b94cffdaa83c';

const initialState = [];

export const mealReducer = (meals = initialState, action) => {
    switch(action.type) {
        case 'meal/addMeal': 
            return [...meals, action.payload];
        default:
            return meals;
    }
}


export const addMeal = (calories) => async (dispatch, getState) => {
    const { data } = await axios.get(`https://api.spoonacular.com/mealplanner/generate?apiKey=${MEALS_API_KEY}&timeFrame=day&targerCalories=${calories}`);
    console.log(data);
    dispatch({
      type: 'meal/addMeal',
      payload: data
    });
}

export const addPhoto = (meal_id) => async (dispatch, getState) => {
    const { data } = await axios.get(` https://api.spoonacular.com/recipes/${meal_id.id}/information?includeNutrition=false`);
    console.log(data);
    dispatch({
        type: 'meal/addPhoto',
        payload: data
    })
}