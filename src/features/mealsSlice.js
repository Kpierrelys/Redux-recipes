import axios from 'axios';

export const MEALS_API_KEY = '4f0db3440e3543fa8f73b94cffdaa83c';

const initialState = '';

export const mealReducer = (meals = initialState, action) => {
    switch(action.type) {
        case 'meal/addMeal': 
            return action.payload;
        default:
            return meals;
    }
}


export const addMeal = (calories) => async (dispatch, getState) => {
    const { data } = await axios.get(`https://api.spoonacular.com/mealplanner/generate?apiKey=${MEALS_API_KEY}&timeFrame=day&targetCalories=${calories}`);
    console.log(data);
    dispatch({
      type: 'meal/addMeal',
      payload: data
    });
}