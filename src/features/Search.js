import { setSearchCalorie } from "./searchSlice";
import { addMeal } from "./mealsSlice";
import { clearSearch } from "./searchSlice";

const Search = ({ calories, dispatch }) => {
    
    const userInput = (e) => {
        const calorie = e.target.value;
        dispatch(setSearchCalorie(calorie));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!calories) {
            alert('number of calories needed')
        } else {
            dispatch(addMeal(calories));
            dispatch(clearSearch());
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type='text' placeholder='Calories (e.g. 2000)' value={calories} onChange={userInput} />
                <i className="fas fa-search fa-xs"></i>
            </form>
            <div className='title' onClick={handleSubmit}>
                <h5>Get Daily Meal Plan</h5>
            </div>
        </div>
    )
}

export default Search