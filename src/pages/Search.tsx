import SearchBar from '../components/SearchBar';
import Icons from '../assets/icons.svg';
import { useNavigate } from 'react-router-dom';
import Cards from '../components/Cards';
import { useEffect } from 'react';

function Search() {
  let navigate = useNavigate();

  const navigateBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    document.getElementById('search-input')?.focus();
  }, []);

  return (
    <main className="page-container">
      <section className="search">
        <div className="grid-6-cols">
          <svg className="search--top-left-arrow" onClick={navigateBack}>
            <use xlinkHref={`${Icons}#icon-arrow-left`} />
          </svg>
          <h3 className="ta-center fs-20 center-on-grid-6-cols">
            Search recipes
          </h3>
        </div>
        <SearchBar filterIcon={false} filters={true} />
      </section>
      <section className="results">
        <h4 className="fs-16">Recent Search</h4>
        <div>
          <Cards />
        </div>
      </section>
    </main>
  );
}

export default Search;
