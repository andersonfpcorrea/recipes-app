import { IoOptionsOutline } from 'react-icons/io5';

interface propsType {
  filterIcon: boolean;
}

function SearchBar(props: propsType) {
  const { filterIcon } = props;
  return (
    <div className='search-bar'>
      <input
        type='text'
        id='search-input'
        placeholder='Search recipe'
        className='inputs search-bar-input'
      />
      {filterIcon && <IoOptionsOutline className='search-bar-icon' />}
    </div>
  );
}

export default SearchBar;
