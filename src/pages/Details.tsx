import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMeals } from '../utils/fetch';
import { mapObjValuesToArray, objForEach } from '../utils/helpers';
import { ObjForEach } from '../utils/interfaces';
import { GiHotMeal } from 'react-icons/gi';

interface IngredientsAndMeasures {
  ingredients: Array<string>;
  measures: Array<string>;
}

function Details() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState<ObjForEach>({});
  const [ingredients, setIngredients] = useState<IngredientsAndMeasures>({
    ingredients: [''],
    measures: [''],
  });

  async function getDetails() {
    const [details] = await getMeals(null, null, null, id);
    setRecipe(details);
    setIngredients(getIngredientsList(details));
  }

  function getIngredientsList(recipe: ObjForEach) {
    const ingredients = objForEach(
      recipe,
      (key, value) => key.includes('strIngredient') && value
    );
    const ingArray = mapObjValuesToArray(ingredients);
    const measures = objForEach(
      recipe,
      (key, value) => key.includes('strMeasure') && value
    );
    const measuresArray = mapObjValuesToArray(measures);

    return {
      ingredients: ingArray,
      measures: measuresArray,
    };
  }

  function renderIngredientsList(ing: IngredientsAndMeasures) {
    const { ingredients, measures } = ing;
    const list = ingredients.map((ing, i) => (
      <li key={ing}>
        <span>{ing}</span>
        <span>{measures[i]}</span>
      </li>
    ));
    return list;
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
        <div
          style={{ backgroundColor: 'orangered' }}
          className="flex flex-jc-sb"
        >
          <div className="flex flex-gap-04">
            <GiHotMeal />
            <span> 1 serve</span>
          </div>
          <p>{ingredients.ingredients.length} items</p>
        </div>
        <div>
          <ul>
            {ingredients.ingredients && renderIngredientsList(ingredients)}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Details;
