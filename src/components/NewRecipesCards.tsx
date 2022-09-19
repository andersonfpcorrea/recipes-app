import { Link } from 'react-router-dom'
import { persons } from '../data/persons'
import FiveStars from './FiveStars'
import RecipeTime from './RecipeTime'

export interface NewRecCardsProps {
  meal: string
  image: string
  id: string
  index: number
}

function NewRecipesCards(props: NewRecCardsProps) {
  const { meal, image, id, index } = props
  return (
    <Link to={`/details/${id}`}>
      <div className="new-recipes pos-rel">
        <div className="new-recipes-left">
          <p className="fw-600 fs-15">{`${meal.slice(0, 19)}...`}</p>
          <FiveStars />
          <div className="flex flex-align flex-gap-06">
            <img
              src={persons[index].photoUrl}
              alt={persons[index].name}
              className="new-recipes__img--author"
            />
            <p className="fs-12 color-grey-dark-2">{`By ${persons[index].name}`}</p>
          </div>
        </div>
        <div className="flex flex-col flex-jc-end">
          <img src={image} alt={meal} className="new-recipes__img--meal" />
          <RecipeTime />
        </div>
      </div>
    </Link>
  )
}

export default NewRecipesCards
