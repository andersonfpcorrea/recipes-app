import { SyntheticEvent, useContext, useState } from 'react';
import { IoOptionsOutline } from 'react-icons/io5';
import { AppContext } from '../context/AppProvider';
import { basicFilters } from '../data/mealsCategories';
import { getMeals } from '../utils/fetch';
import { setSearchOnLocalStorage } from '../utils/helpers';

interface propsType {
  filterIcon: boolean;
  filters: boolean;
  callbacksSearchPage: CallBacksSearchPage;
}

type CallBacksSearchPage = {
  setFromLocal: Function;
  setShowNumberOfResults: Function;
};

function handleInput({ target }: SyntheticEvent, filterSetter: Function) {
  const { value } = target as HTMLInputElement;
  filterSetter(value);
}

async function handleSubmit(
  e: SyntheticEvent,
  searchInputSetter: Function,
  query: string,
  filter: string,
  searchResultStateSetter: Function,
  searchMessageStateSetter: Function,
  callbacksSearchPage?: CallBacksSearchPage
) {
  e.preventDefault();
  callbacksSearchPage?.setFromLocal(false);
  callbacksSearchPage?.setShowNumberOfResults(true);
  try {
    const cleanedQuery =
      filter === 'First Letter' ? query.trim().at(0) : query.trim();
    const meals = await getMeals(filter, null, cleanedQuery);
    if (meals === null) {
      searchResultStateSetter([]);
      return searchMessageStateSetter(
        'Sorry! We could not find any recipes 🤔. Please try again.'
      );
    }
    searchResultStateSetter(meals);
    setSearchOnLocalStorage(meals);
    searchMessageStateSetter('');
  } catch (err) {
    console.error('Something went wrong 💣💣💣', err);
  } finally {
    searchInputSetter('');
  }
}

function renderFilters(
  filters: string[],
  filter: string,
  filterSetter: Function
) {
  const markup = (filterName: string) => (
    <div className="flex flex-gap-02" key={filterName}>
      <input
        type="radio"
        name="filters"
        id={filterName.split(' ').join().toLowerCase()}
        checked={filterName === filter}
        value={filterName}
        onChange={(e) => handleInput(e, filterSetter)}
      />
      <label
        htmlFor={filterName.split(' ').join().toLowerCase()}
        className="fs-13"
      >
        {`${filterName}`}
      </label>
    </div>
  );

  return filters.map((filter) => markup(filter));
}

function SearchBar(props: propsType) {
  const { filterIcon, filters, callbacksSearchPage } = props;
  const [filter, setFilter] = useState('Name');
  const [searchInput, setSearchInput] = useState('');
  const { setSearchResultState, setSearchPageMessage } = useContext(AppContext);

  return (
    <form
      className="search-bar"
      onSubmit={(e) =>
        handleSubmit(
          e,
          setSearchInput,
          searchInput,
          filter,
          setSearchResultState,
          setSearchPageMessage,
          callbacksSearchPage
        )
      }
    >
      <input
        type="text"
        id="search-input"
        placeholder="Search recipe"
        className="inputs search-bar-input"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />
      {/* TODO: Delete or update the implementation of the filter icon: */}
      {filterIcon && <IoOptionsOutline className="search-bar-icon" />}

      {filters && (
        <div className="width-100percent bg-color-main pad-1 br-1">
          <p className="fs-13 ta-center fw-600">
            Please choose one filter for your search:
          </p>

          <div className="flex flex-jc-sb">
            {renderFilters(basicFilters, filter, setFilter)}
          </div>
        </div>
      )}
    </form>
  );
}

export default SearchBar;
