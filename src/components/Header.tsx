import Icons from '../assets/icons.svg'; //icon-user
import SearchBar from './SearchBar';

function Header() {
  return (
    <header className='header width-100percent'>
      <div className='header--user'>
        <div className='header--user--text'>
          <h3>Hello, user</h3>
          <p>What are you cooking today?</p>
        </div>
        <svg>
          <use href={`${Icons}#icon-user`} />
        </svg>
      </div>
      <div className='header--search'>
        <SearchBar />
      </div>
    </header>
  );
}

export default Header;
