import { Link } from 'react-router-dom'
import { RecipeType, PropsType } from '../utils/interfaces.js'
import RateTag from './RateTag.js'

function Cards(props: PropsType) {
  const { recipes } = props

  const markup = (recipe: RecipeType) => {
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
          <div className="flex-align-end">
            <RateTag />
          </div>
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
