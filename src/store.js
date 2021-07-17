import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import { searchReducer } from "./features/searchSlice";
import { mealReducer } from "./features/mealsSlice";

import thunk from 'redux-thunk';


const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


export const store = createStore(combineReducers({
    search: searchReducer,
    meal: mealReducer
}),
    composeEnhancer(applyMiddleware(thunk))
);