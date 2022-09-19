import SearchBar from '../components/SearchBar'
import Cards from '../components/Cards'
import { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppProvider'
import { getSearchFromLocalStorage } from '../utils/helpers'
import TopNavigationBar from '../components/TopNavigationBar'

function Search() {
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

  const renderResults = () => {
    if (searchResultState?.length > 0)
      return <Cards recipes={searchResultState} />
    if (searchPageMessage)
      return <p className="ta-center">{searchPageMessage}</p>
    return <p className="ta-center">Nothing here 🤔. Give it a try 👍</p>
  }

  return (
    <main className="page-container">
      <section className="search">
        <TopNavigationBar
          withTitle={{ title: 'Search recipes' }}
          condition={false}
        />
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
              ? `${searchResultState?.length} results`
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
