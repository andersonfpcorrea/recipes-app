import { SyntheticEvent, useState } from 'react';
import { IoOptionsOutline } from 'react-icons/io5';
import { basicFilters } from '../data/mealsCategories';

interface propsType {
  filterIcon: boolean;
  filters: boolean;
}

function handleInput({ target }: SyntheticEvent, setter: Function) {
  const { value } = target as HTMLInputElement;
  setter(value);
}

function renderFilters(filters: string[], filter: string, setter: Function) {
  const markup = (filterName: string) => (
    <div className='flex flex-gap-02 '>
      <input
        type='radio'
        name='filters'
        id={filterName.split(' ').join().toLowerCase()}
        checked={filterName === filter}
        value={filterName}
        onChange={(e) => handleInput(e, setter)}
      />
      <label
        htmlFor={filterName.split(' ').join().toLowerCase()}
        className='fs-13'
        key={filterName}
      >
        {`${filterName}`}
      </label>
    </div>
  );

  return filters.map((filter) => markup(filter));
}

function SearchBar(props: propsType) {
  const [filter, setFilter] = useState('Name');
  const { filterIcon, filters } = props;
  return (
    <div className='search-bar'>
      <input
        type='text'
        id='search-input'
        placeholder='Search recipe'
        className='inputs search-bar-input'
      />
      {/* TODO: Delete or update the implementation of the filter icon: */}
      {filterIcon && <IoOptionsOutline className='search-bar-icon' />}

      {filters && (
        <div className='width-100percent bg-color-main pad-1 br-1'>
          <p className='fs-13 ta-center'>
            Please choose one filter for your search:
          </p>

          <div className='flex flex-jc-sb'>
            {renderFilters(basicFilters, filter, setFilter)}
          </div>
        </div>
      )}
    </div>
  );
}

export default SearchBar;
