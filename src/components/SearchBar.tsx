import { IoOptionsOutline } from 'react-icons/io5';
import { mealsCategories } from '../data/mealsCategories';

interface propsType {
  filterIcon: boolean;
  filters: boolean;
}

interface categoryObj {
  strCategory: string;
}

function Filters() {
  const markup = (category: string) => (
    <label htmlFor='name-radio' className='fs-14'>
      <input type='radio' name='filters' id='name-radio' />
      &nbsp;Name
    </label>
  );
  // return mealsCategories.map((category) => markup(category.strCategory));  CONTINUAR DAQUI
}

function SearchBar(props: propsType) {
  const { filterIcon, filters } = props;
  return (
    <div className='search-bar'>
      <input
        type='text'
        id='search-input'
        placeholder='Search recipe'
        className='inputs search-bar-input'
      />
      {filterIcon && <IoOptionsOutline className='search-bar-icon' />}
      {filters && (
        <div>
          <label htmlFor='name-radio' className='fs-14'>
            <input type='radio' name='filters' id='name-radio' />
            &nbsp;Name
          </label>
        </div>
      )}
    </div>
  );
}

export default SearchBar;
