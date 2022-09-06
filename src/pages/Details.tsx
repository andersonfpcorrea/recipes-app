import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMeals } from '../utils/fetch';

function Details() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState({
    strMealThumb: '',
    strMeal: '',
  });

  async function getDetails() {
    const [details] = await getMeals(null, null, null, id);
    setRecipe(details);
    console.log(details);
  }

  function renderIngredientsList() {
    return <p>teste</p>;
  }

  useEffect(() => {
    getDetails();
  }, []);

  return (
    <section>
      <div>
        <nav>TOP BAR (NAVIGATION AND MENU)</nav>
        <img src={recipe.strMealThumb} alt={recipe.strMeal} />
        <div style={{ backgroundColor: 'orangered' }}>
          <p>{recipe.strMeal}</p>
          <p>(0 Reviews)</p>
        </div>
        <div>TAGS HERE</div>
        <div>
          <button type="button">Ingredients</button>
          <button type="button">Procedures</button>
        </div>
      </div>
      <div>
        <div style={{ backgroundColor: 'orangered' }}>
          <p>1 serve</p>
          <p>10 items</p>
        </div>
        <div>{recipe && renderIngredientsList()}</div>
      </div>
    </section>
  );
}

export default Details;
