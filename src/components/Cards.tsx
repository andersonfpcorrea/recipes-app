import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  checkIfBookmarked,
  toggleFromLocalStorageBookmarks,
} from '../utils/helpers.js'
import { RecipeType, PropsType } from '../utils/interfaces.js'
import Bookmarked from './Bookmarked.js'
import RateTag from './RateTag.js'
import RecipeTime from './RecipeTime.js'

function Cards(props: PropsType) {
  const { recipes, width, onSavedList } = props

  const LessDetails = (recipe: RecipeType) => (
    <>
      <h4 className="cards-name--searchPage">{recipe.strMeal}</h4>
      <p className="cards-category--searchPage">{recipe.strCategory}</p>
    </>
  )

  const MoreDetails = (recipe: RecipeType) => {
    const [bookmark, setBookmark] = useState(checkIfBookmarked(recipe.idMeal))
    return (
      <>
        <div>
          <LessDetails {...recipe} />
        </div>
        <div className="flex flex-gap-04 color-white-1">
          <RecipeTime color="white" />
          <div
            onClick={(e) => {
              e.preventDefault()
              setBookmark((prev) => {
                toggleFromLocalStorageBookmarks(!prev, recipe)
                return !prev
              })
            }}
          >
            <Bookmarked bookmarked={bookmark} />
          </div>
        </div>
      </>
    )
  }

  const markup = (recipe: RecipeType) => {
    console.log(onSavedList)

    return (
      <Link to={`/details/${recipe.idMeal}`} key={recipe.idMeal}>
        <figure
          className="cards"
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(255, 255, 255, 0.1), rgba(0, 0, 0, 0.5)), url('${recipe.strMealThumb}')`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            [width ? 'width' : '']: width,
          }}
        >
          <div className="flex-align-end">
            <RateTag />
          </div>
          <div className={onSavedList ? 'flex flex-jc-sb' : ''}>
            {/* <h4 className="cards-name--searchPage">{recipe.strMeal}</h4>
            <p className="cards-category--searchPage">{recipe.strCategory}</p> */}
            {onSavedList ? (
              <MoreDetails {...recipe} />
            ) : (
              <LessDetails {...recipe} />
            )}
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
