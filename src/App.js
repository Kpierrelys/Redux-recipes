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
        {state.meal.length > 0 ? <Nutrients meal={state.meal} /> : null}
      </section>
      <section className='meals'>
        {state.meal.length > 0 ? (state.meal[0].meals.map(meal =>
        <Meal 
          key={meal.id}
          meal={meal}
        />
        )) : null}
      </section>
    </div>
  );
}

export default App;
