import SearchBar from '../components/SearchBar';
import Icons from '../assets/icons.svg';
import { useNavigate } from 'react-router-dom';
import Cards from '../components/Cards';
import { useContext, useEffect, useState } from 'react';
import { AppContext } from '../context/AppProvider';

function Search() {
  let navigate = useNavigate();
  const { searchPageState, setSearchPageState } = useContext(AppContext);
  const [fromLocal, setFromLocal] = useState(true);

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
          <h3 className="ta-center fs-24 center-on-grid-6-cols">
            Search recipes
          </h3>
        </div>
        <SearchBar filterIcon={false} filters={true} />
      </section>
      <section className="results">
        <h4 className="fs-18">
          {fromLocal ? 'Recent Search' : 'Search results'}
        </h4>
        <div className="flex flex-center flex-wrap flex-gap-10">
          {searchPageState?.lastSearch ? (
            <Cards recipes={searchPageState.lastSearch} />
          ) : (
            <p>No results 🤔. Give it a try 👍</p>
          )}
        </div>
      </section>
    </main>
  );
}

export default Search;
