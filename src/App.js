import Search from './features/Search';
import Meal from './features/Meal';
import Nutrients from './features/Nutrients';

function App({ state, dispatch }) {
  return (
    <div>
      <section>
        <Search
          meal={state.meal}
          calories={state.search}
          dispatch={dispatch}
        />
      </section>
      <section>
        {state.meal && <Nutrients meal={state.meal} />}
      </section>
      <section className='meals'>
        {state.meal && (state.meal.meals.map(meal =>
        <Meal 
          key={meal.id}
          meal={meal}
        />
        ))}
      </section>
    </div>
  );
}

export default App;
