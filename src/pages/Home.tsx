import { useEffect, useState } from 'react'
import CategoriesScroll from '../components/CategoriesScroll'
import HomeCards from '../components/HomeCards'
import { getMealsByCategory } from '../utils/fetch'

export interface RecipesByCategory {
  strMeal: string
  strMealThumb: string
  idMeal: string
  [keys: string]: unknown
}

function Home() {
  const [recipes, setRecipes] = useState<[RecipesByCategory]>([
    {
      strMeal: '',
      strMealThumb: '',
      idMeal: '',
    },
  ])
  useEffect(() => {
    getMealsByCategory('Beef')
      .then((data) => setRecipes(data as [RecipesByCategory]))
      .catch((err) =>
        console.error('Somethin wrong during fetching mealsdb by category')
      )
  }, [])

  return (
    <section className="home">
      <CategoriesScroll />
      <div className="flex flex-gap-12 hor-scroll home-cards-container">
        {recipes.map((recipe) => (
          <HomeCards
            key={recipe.idMeal}
            image={recipe.strMealThumb}
            name={recipe.strMeal}
            id={recipe.idMeal}
          />
        ))}
      </div>
    </section>
  )
}

export default Home
