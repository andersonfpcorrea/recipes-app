import { useEffect, useState } from 'react'
import Cards from '../components/Cards'
import Footer from '../components/Footer'
import TopNavigationBar from '../components/TopNavigationBar'
import { getBookmarksFromLocalStrg } from '../utils/helpers'
import { RecipeType } from '../utils/interfaces'

function Bookmarks() {
  const [recipes, setRecipes] = useState<[RecipeType]>([
    {
      strMeal: '',
      strMealThumb: '',
      strCategory: '',
      strArea: '',
      idMeal: '',
    },
  ])
  useEffect(() => {
    setRecipes(getBookmarksFromLocalStrg())
  }, [])
  return (
    <main>
      <div className="page-container flex flex-col flex-gap-30 heigth-min-100vh">
        <TopNavigationBar
          withTitle={{ title: 'Saved recipes' }}
          condition={false}
        />
        <div className="bookmarked-container">
          {recipes.length === 1 && !recipes[0].strMeal ? (
            <p className="ta-center fs-16">🤔 You have no saved recipes 🤷</p>
          ) : (
            <Cards recipes={recipes} width="100%" onSavedList={true} />
          )}
        </div>
      </div>
      <div style={{ position: 'sticky', bottom: '0', width: '100%' }}>
        <Footer />
      </div>
    </main>
  )
}

export default Bookmarks
