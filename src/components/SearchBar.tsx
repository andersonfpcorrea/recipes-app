import { IoOptionsOutline } from 'react-icons/io5';

function SearchBar() {
  return (
    <div className='search-bar'>
      <input
        type='text'
        placeholder='Search recipe'
        className='inputs search-bar-input'
      />
      <IoOptionsOutline className='search-bar-icon' />
    </div>
  );
}

export default SearchBar;
