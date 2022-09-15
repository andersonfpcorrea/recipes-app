import { persons } from '../data/persons'
import FiveStars from './FiveStars'

function NewRecipesCards() {
  return (
    <div className="new-recipes pos-rel">
      <div className="new-recipes-left">
        <p className="fw-600 fs-15">18max Recipe s...</p>
        <FiveStars />
        <div className="flex flex-align flex-gap-06">
          <img
            src={persons[0].photoUrl}
            alt={persons[0].name}
            className="new-recipes__img--author"
          />
          <p className="fs-12 color-grey-dark-2">By James Milner</p>
        </div>
      </div>
      <div className="flex flex-col flex-jc-end">
        <img
          src={persons[0].photoUrl}
          alt={persons[0].name}
          className="new-recipes__img--meal"
        />
        <p className="fs-12 color-grey-dark-2 heigth-30 flex flex-center">
          O 20 mins
        </p>
      </div>
    </div>
  )
}

export default NewRecipesCards
