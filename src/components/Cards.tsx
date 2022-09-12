import { Link } from 'react-router-dom'
import { RecipeType, PropsType } from '../utils/interfaces.js'
import { getFlag } from '../utils/helpers'

function Cards(props: PropsType) {
  const { recipes } = props

  const markup = (recipe: RecipeType) => {
    const flag = getFlag(recipe.strArea)
    return (
      <Link to={`/details/${recipe.idMeal}`} key={recipe.idMeal}>
        <figure
          className="cards"
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(255, 255, 255, 0.1), rgba(0, 0, 0, 0.5)), url('${recipe.strMealThumb}')`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
          }}
        >
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
    )
  }

  const renderCards = (recipes: [RecipeType]) =>
    recipes.map((recipe) => markup(recipe))

  return <>{renderCards(recipes as [RecipeType])}</>
}

export default Cards
