import { useEffect, useState } from 'react'
import Cards from '../components/Cards'
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
    <main className="page-container flex flex-col flex-gap-20">
      <h2 className="ta-center fs-24">Saved recipes</h2>
      <div>
        <Cards recipes={recipes} width="100%" />
      </div>
    </main>
  )
}

export default Bookmarks
