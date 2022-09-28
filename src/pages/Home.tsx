import { useEffect, useState } from 'react'
import CategoriesScroll from '../components/CategoriesScroll'
import Footer from '../components/Footer'
import Header from '../components/Header'
import HomeCards from '../components/HomeCards'
import NewRecipesCards from '../components/NewRecipesCards'
import { getMealByArea, getMealsByCategory } from '../utils/fetch'

export interface RecipesByCategory {
  strMeal: string
  strMealThumb: string
  idMeal: string
  [keys: string]: unknown
}

const recipesInitialState = {
  strMeal: '',
  strMealThumb: '',
  idMeal: '',
}

function Home() {
  const [recipes, setRecipes] = useState<[RecipesByCategory]>([
    recipesInitialState,
  ])
  const [category, setCategory] = useState('Beef')
  const [newRecipes, setNewRecipes] = useState<[RecipesByCategory]>([
    recipesInitialState,
  ])

  useEffect(() => {
    const controller = new AbortController()
    const signal = controller.signal
    getMealsByCategory(category, signal)
      .then((data) => setRecipes(data as [RecipesByCategory]))
      .catch((err: Error) =>
        console.error(
          `Somethin wrong during fetching mealsdb by category: ${err.message}`
        )
      )
    return () => controller.abort()
  }, [category])

  useEffect(() => {
    getMealByArea('Unknown')
      .then((resp) => setNewRecipes(resp as [RecipesByCategory]))
      .catch((err: Error) => console.error(err.message))
  }, [])

  return (
    <div className="page-container-with-footer">
      <div>
        <Header />
        <section className="home">
          <CategoriesScroll onClick={setCategory} />
          <div className="flex flex-gap-12 hor-scroll home-cards-container">
            {recipes?.map((recipe) => (
              <HomeCards
                key={recipe.idMeal}
                image={recipe.strMealThumb}
                name={recipe.strMeal}
                id={recipe.idMeal}
                recipe={recipe}
              />
            ))}
          </div>
          <div className="flex flex-col ">
            <h3 className="fs-18 pad-left-2 fw-600">New Recipes</h3>
            <div className="new-recipes-container">
              {newRecipes?.map((recipe, i) => (
                <NewRecipesCards
                  meal={recipe.strMeal}
                  image={recipe.strMealThumb}
                  id={recipe.idMeal}
                  index={i}
                  key={`${recipe.strMeal.slice(0, 5)}`}
                />
              ))}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  )
}

export default Home
