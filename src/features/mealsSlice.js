import axios from 'axios';

export const MEALS_API_KEY = '4f0db3440e3543fa8f73b94cffdaa83c';

const fetchMeals = () => {
    return {
        type: 'fetchMeals'
    }
}

const fetchMealsSuccess = (meals) => {
    return {
        type: 'fetchMeals/fetchMealsSuccess',
        payload: meals
    }
}

const fetchMealsFailure = (error) => {
    return {
        type: 'fetchMeals/fetchMealsFailure',
        payload: error
    }
}

const intialState = {
    loading: false,
    meals: '',
    error: ''
}

export const mealReducer = (meals = intialState, action) => {
    switch(action.type) {
        case 'fetchMeals': 
            return {
                ...meals,
                loading: true
            }
        case 'fetchMeals/fetchMealsSuccess':
            return {
                loading: false,
                meals: action.payload,
                error: ''
            }
        case 'fetchMeals/fetchMealsFailure':
            return {
                loading: false,
                meals: null,
                error: action.payload
            }
        default:
            return meals
    }
}


export const myCalories = (calories) => {
    return (dispatch) => {
        dispatch(fetchMeals())
        axios.get(`https://api.spoonacular.com/mealplanner/generate?apiKey=${MEALS_API_KEY}&timeFrame=day&targetCalories=${calories}`)
            .then(response => {
                const meals = response.data
                dispatch(fetchMealsSuccess(meals))
            })
            .catch(error => {
                dispatch(fetchMealsFailure('Error: ' + error.message))
            })
    }
}

