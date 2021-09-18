import Search from './features/Search';
import Meal from './features/Meal';
import Nutrients from './features/Nutrients';

function App({ state, dispatch }) {
  return (
    <div>
      <section>
        <Search
          calories={state.search}
          dispatch={dispatch}
        />
      </section>
      <section>
        {state.myMeals.meals && <Nutrients meal={state.myMeals.meals} />}
      </section>
        {state.myMeals.meals ? <section className='meals'>
          {state.myMeals.meals.meals.map(meal =>
            <Meal
              key={meal.id} 
              mealState={state.myMeals}
              meal={meal}/>)} </section> : <div className="error">{state.myMeals.error}</div>
        }
    </div>
  );
}

export default App;
