import { Link } from 'react-router-dom';
import { countries } from '../data/countries.js';
import { RecipeType, RecipesType, PropsType } from '../utils/interfaces.js';
import unknownIcon from '../assets/unknownIcon.jpeg';

function Cards(props: PropsType) {
  const { recipes } = props;
  console.log(recipes);

  const markup = (recipe: RecipeType) => {
    const flag = countries.find((el) => el.demonyms.eng.f === recipe.strArea)
      ?.flags.svg;
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
          {/* <p className="flex-align-end">bandeira</p> */}
          {flag ? (
            <img
              src={flag}
              alt={recipe.strMeal}
              className={`cards-img--searchPage`}
            />
          ) : (
            <p className="flex-align-end color-white-1">?</p>
          )}
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
