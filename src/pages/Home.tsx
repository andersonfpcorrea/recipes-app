import React, { LegacyRef, useEffect, useRef, useState } from 'react'
import CategoriesScroll from '../components/CategoriesScroll'
import Footer from '../components/Footer'
import Header from '../components/Header'
import HomeCards from '../components/HomeCards'
import NewRecipesCards from '../components/NewRecipesCards'
import { getMealByArea, getMealsByCategory } from '../utils/fetch'
import { AiFillLeftCircle, AiFillRightCircle } from 'react-icons/ai'

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

  const step = 10
  const refScrollDiv0 = useRef({
    scrollLeft: 0,
  })
  const refScrollDiv1 = useRef({
    scrollLeft: 0,
  })
  const refScrollDiv2 = useRef({
    scrollLeft: 0,
  })
  const isScrollRef = useRef(false)

  const setMove = (action: boolean) => (isScrollRef.current = action)

  const moveScroll = (
    side: string,
    ref: React.MutableRefObject<{ scrollLeft: number }>
  ) => {
    if (isScrollRef.current) {
      if (side === 'left') ref.current.scrollLeft += step
      else ref.current.scrollLeft -= step
      requestAnimationFrame(() => moveScroll(side, ref))
    }
  }

  useEffect(() => {
    getMealsByCategory(category)
      .then((data) => setRecipes(data as [RecipesByCategory]))
      .catch((err: Error) =>
        console.error(
          `Somethin wrong during fetching mealsdb by category: ${err.message}`
        )
      )
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
        <section className="home pos-rel">
          <div
            ref={refScrollDiv0 as LegacyRef<HTMLDivElement>}
            className="flex flex-gap-02 categories-scroll"
          >
            <div
              className="scroll-el scroll-el--left scroll-el--categ"
              onMouseDown={() => {
                setMove(true)
                moveScroll('left', refScrollDiv0)
              }}
              onMouseUp={() => setMove(false)}
            >
              <AiFillLeftCircle />
            </div>
            <CategoriesScroll onClick={setCategory} />
            <div
              className="scroll-el scroll-el--right scroll-el--categ"
              onMouseDown={() => {
                setMove(true)
                moveScroll('right', refScrollDiv0)
              }}
              onMouseUp={() => setMove(false)}
            >
              <AiFillRightCircle />
            </div>
          </div>
          <div
            className="flex flex-gap-12 hor-scroll home-cards-container"
            ref={refScrollDiv1 as LegacyRef<HTMLDivElement>}
          >
            <div
              className="scroll-el scroll-el--left"
              onMouseDown={() => {
                setMove(true)
                moveScroll('left', refScrollDiv1)
              }}
              onMouseUp={() => setMove(false)}
            >
              <AiFillLeftCircle />
            </div>
            {recipes?.map((recipe) => (
              <HomeCards
                key={recipe.idMeal}
                image={recipe.strMealThumb}
                name={recipe.strMeal}
                id={recipe.idMeal}
                recipe={recipe}
              />
            ))}
            <div
              className="scroll-el scroll-el--right"
              onMouseDown={() => {
                setMove(true)
                moveScroll('right', refScrollDiv1)
              }}
              onMouseUp={() => setMove(false)}
            >
              <AiFillRightCircle />
            </div>
          </div>
          <div className="flex flex-col pos-rel">
            <h3 className="fs-18 pad-left-2 fw-600">New Recipes</h3>
            <div
              className="new-recipes-container "
              ref={refScrollDiv2 as LegacyRef<HTMLDivElement>}
            >
              <div
                className="scroll-el scroll-el--left scroll-el--lower"
                onMouseDown={() => {
                  setMove(true)
                  moveScroll('left', refScrollDiv2)
                }}
                onMouseUp={() => setMove(false)}
              >
                <AiFillLeftCircle />
              </div>
              {newRecipes?.map((recipe, i) => (
                <NewRecipesCards
                  meal={recipe.strMeal}
                  image={recipe.strMealThumb}
                  id={recipe.idMeal}
                  index={i}
                  key={`${recipe.strMeal.slice(0, 5)}`}
                />
              ))}
              <div
                className="scroll-el scroll-el--right scroll-el--lower"
                onMouseDown={() => {
                  setMove(true)
                  moveScroll('right', refScrollDiv2)
                }}
                onMouseUp={() => setMove(false)}
              >
                <AiFillRightCircle />
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  )
}

export default Home
