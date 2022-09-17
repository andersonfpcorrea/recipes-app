import SearchBar from '../components/SearchBar'
import Icons from '../assets/icons.svg'
import { useNavigate } from 'react-router-dom'
import Cards from '../components/Cards'
import { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppProvider'
import { getSearchFromLocalStorage } from '../utils/helpers'

function Search() {
  const navigate = useNavigate()
  const {
    searchResultState,
    setSearchResultState,
    searchPageMessage,
    setSearchPageMessage,
  } = useContext(AppContext)
  const [fromLocal, setFromLocal] = useState(true)
  const [showNumberOfResults, setShowNumberOfResults] = useState(false)

  useEffect(() => {
    document.getElementById('search-input')?.focus()
    getSearchFromLocalStorage(setSearchResultState)
    setFromLocal(true)
    setSearchPageMessage('')
  }, [])

  const navigateBack = () => {
    navigate(-1)
  }

  const renderResults = () => {
    if (searchResultState.length > 0)
      return <Cards recipes={searchResultState} />
    if (searchPageMessage)
      return <p className="ta-center">{searchPageMessage}</p>
    return <p className="ta-center">Nothing here 🤔. Give it a try 👍</p>
  }

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
        <SearchBar
          filterIcon={false}
          filters={true}
          callbacksSearchPage={{ setFromLocal, setShowNumberOfResults }}
        />
      </section>
      <section className="results">
        <div className="flex flex-jc-sb flex-align">
          <h4 className="fs-18">
            {fromLocal ? 'Recent Search' : 'Search results'}
          </h4>
          <p className="fs-12 color-grey-dark-2">
            {!fromLocal || showNumberOfResults
              ? `${searchResultState.length} results`
              : null}
          </p>
        </div>
        <div className="flex flex-center flex-wrap flex-gap-10">
          {renderResults()}
        </div>
      </section>
    </main>
  )
}

export default Search
