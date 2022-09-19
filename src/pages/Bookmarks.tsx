import { useEffect, useState } from 'react'
import Cards from '../components/Cards'
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
    <main className="page-container flex flex-col flex-gap-30 heigth-100pc">
      <TopNavigationBar
        withTitle={{ title: 'Saved recipes' }}
        condition={false}
      />
      <div className="bookmarked-container">
        {recipes.length === 1 && !recipes[0].strMeal ? (
          <p className="ta-center fs-18 fw-600">You have no saved recipes 🤷</p>
        ) : (
          <Cards recipes={recipes} width="100%" onSavedList={true} />
        )}
      </div>
    </main>
  )
}

export default Bookmarks
