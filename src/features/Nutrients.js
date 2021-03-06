
const Nutrients = ({ meal }) => {
    const nutrients = meal.nutrients

    return (
        <div>
            {meal && <table>
                <tbody>
                    <tr>
                        <td>
                            <h4><b>Calories</b></h4> 
                        </td>
                        <td>
                            {nutrients.calories}
                        </td>
                    </tr>
                </tbody>
                <tbody>
                    <tr>
                        <td>
                            <h4><b>Carbs</b></h4> 
                        </td>
                        <td>
                            {nutrients.carbohydrates}
                        </td>
                    </tr>
                </tbody>
                <tbody>
                    <tr>
                        <td>
                            <h4><b>Fats</b></h4>
                        </td>
                        <td>
                            {nutrients.fat}
                        </td>
                    </tr>
                </tbody>
                <tbody>
                    <tr>
                        <td>
                            <h4><b>Protein</b></h4>
                        </td>
                        <td>
                            {nutrients.protein}
                        </td>
                    </tr>
                </tbody>
            </table>}
        </div>
    )
}

export default Nutrients
