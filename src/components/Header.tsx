import { Link } from 'react-router-dom'
import Icons from '../assets/icons.svg' //icon-user
import SearchBar from './SearchBar'

function Header() {
  return (
    <header className="header width-100percent">
      <div className="header--user">
        <div className="header--user--text">
          <p className="fs-24 fw-600">Hello, user</p>
          <p className="color-grey-dark-2 fs-13">What are you cooking today?</p>
        </div>
        <svg className="header--user--img">
          <use href={`${Icons}#icon-user`} />
        </svg>
      </div>
      <div className="header--search">
        <Link to="/search">
          <SearchBar filterIcon={false} filters={false} />
        </Link>
      </div>
    </header>
  )
}

export default Header
