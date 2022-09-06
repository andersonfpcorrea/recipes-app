import { Link } from 'react-router-dom';
// import { countries } from '../data/countries.js';
import { RecipeType, RecipesType, PropsType } from '../utils/interfaces.js';

function Cards(props: PropsType) {
  const { recipes } = props;
  const markup = (recipe: RecipeType) => {
    return (
      <Link to="/details" key={recipe.idMeal}>
        <figure
          className="cards"
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(255, 255, 255, 0.1), rgba(0, 0, 0, 0.5)), url('${recipe.strMealThumb}')`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
          }}
        >
          <div>
            <h4 className="cards-name--searchPage">{recipe.strMeal}</h4>
            <p className="cards-category--searchPage">{recipe.strCategory}</p>
          </div>
        </figure>
      </Link>
    );
  };

  const renderCards = (recipes: RecipesType | []) =>
    recipes.map((recipe) => markup(recipe));

  return <>{renderCards(recipes)}</>;
}

export default Cards;
