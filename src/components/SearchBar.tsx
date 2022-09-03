import { SyntheticEvent, useContext, useState } from 'react';
import { IoOptionsOutline } from 'react-icons/io5';
import { AppContext } from '../context/AppProvider';
import { basicFilters } from '../data/mealsCategories';
import { getMeals } from '../utils/fetch';

interface propsType {
  filterIcon: boolean;
  filters: boolean;
}

function handleInput({ target }: SyntheticEvent, filterSetter: Function) {
  const { value } = target as HTMLInputElement;
  filterSetter(value);
}

async function handleSubmit(
  e: SyntheticEvent,
  querySetter: Function,
  query: string,
  filter: string,
  searchHistorySetter: Function
) {
  e.preventDefault();
  try {
    const meals = await getMeals(filter, null, query);
    console.log(meals);
    if (meals === null) throw new Error('Sorry! We could not find any recipes');
    searchHistorySetter(meals);
  } catch (err) {
    console.error('Something went wrong 💣💣💣', err);
  } finally {
    querySetter('');
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
  const { filterIcon, filters } = props;
  const [filter, setFilter] = useState('Name');
  const [query, setQuery] = useState('');
  const { setSearchHistory } = useContext(AppContext);
  return (
    <form
      className="search-bar"
      onSubmit={(e) =>
        handleSubmit(e, setQuery, query, filter, setSearchHistory)
      }
    >
      <input
        type="text"
        id="search-input"
        placeholder="Search recipe"
        className="inputs search-bar-input"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {/* TODO: Delete or update the implementation of the filter icon: */}
      {filterIcon && <IoOptionsOutline className="search-bar-icon" />}

      {filters && (
        <div className="width-100percent bg-color-main pad-1 br-1">
          <p className="fs-13 ta-center">
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
