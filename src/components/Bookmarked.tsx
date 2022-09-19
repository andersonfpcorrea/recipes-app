import Icons from '../assets/icons.svg'
import {
  removeRecipeFromLocalStorage,
  setRecipeToLocalStorage,
} from '../utils/helpers'
import { RecipeType } from '../utils/interfaces'

interface BookmarkedProps {
  recipe?: RecipeType
  bookmarked: boolean
}

const updateLocalStorage = (action: boolean, recipe: RecipeType) => {
  if (action) return setRecipeToLocalStorage(recipe)
  removeRecipeFromLocalStorage(recipe)
}

function Bookmarked(props: BookmarkedProps) {
  const { bookmarked, recipe } = props
  if (recipe) updateLocalStorage(bookmarked, recipe)

  return (
    <button type="button" className="bookmark-btn">
      <svg>
        <use xlinkHref={`${Icons}#icon-bookmark${bookmarked ? '-fill' : ''}`} />
      </svg>
    </button>
  )
}

export default Bookmarked
