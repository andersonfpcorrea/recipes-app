import { Link } from 'react-router-dom'
import RateTag from './RateTag'
import Unbookmarked from './Unbookmarked'

export interface HomeCardsPropsType {
  image: string
  name: string
  id: string
  time?: string
  bookmark?: boolean
}

function HomeCards(props: HomeCardsPropsType) {
  const { image, name, id } = props
  return (
    <Link to={`/details/${id}`}>
      <div className="home-card pos-rel color-grey-dark-1">
        <div className="ta-center heigth-30 pos-rel flex flex-center">
          <img src={image} alt={name} className="home-card__img" />
        </div>
        <div className="home-card__tag heigth-0">
          <RateTag />
        </div>

        <div className="ta-center fw-600 heigth-50 flex flex-center">
          <p>{name.length > 30 ? `${name.slice(0, 30)}...` : name}</p>
        </div>
        <div className="flex flex-jc-sb flex-align pad-top-1">
          <div>
            <p className="color-grey-dark-2 fs-12">Time</p>
            <p className="fs-14 fw-600">15 min</p>
          </div>
          <Unbookmarked />
        </div>
      </div>
    </Link>
  )
}

export default HomeCards
