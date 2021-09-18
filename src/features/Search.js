import { setSearchCalorie } from "./searchSlice";
import { clearSearch } from "./searchSlice";
import { myCalories } from "./mealsSlice";

const Search = ({ calories, dispatch }) => {
    
    const userInput = (e) => {
        const calorie = e.target.value;
        dispatch(setSearchCalorie(calorie));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (event.keyCode === 13 || event.type === 'click') {
            if (!calories) {
                alert('number of calories needed')
            } else {
                dispatch(myCalories(calories))
                dispatch(clearSearch());
            }
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type='text' placeholder='Calories (e.g. 2000)' onKeyUp={handleSubmit} value={calories} onChange={userInput} />
                <i className="fas fa-search fa-xs"></i>
            </form>
            <div className='title' onClick={handleSubmit}>
                <h5>Get Daily Meal Plan</h5>
            </div>
        </div>
    )
}

export default Search