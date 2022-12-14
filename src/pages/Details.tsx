import { SyntheticEvent, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getMeals } from '../utils/fetch'
import {
  checkIfBookmarked,
  getFlag,
  mapObjValuesToArray,
  objForEach,
} from '../utils/helpers'
import {
  ObjectWithStrKeysAndStrNullValues,
  RecipeType,
} from '../utils/interfaces'
import { GiHotMeal } from 'react-icons/gi'
import Author from '../components/Author'
import TopNavigationBar from '../components/TopNavigationBar'
import { AnimatePresence, motion } from 'framer-motion'
import RateTag from '../components/RateTag'
import Bookmarked from '../components/Bookmarked'

interface IngredientsAndMeasures {
  ingredients: Array<string>
  measures: Array<string>
}

// TODO: Implement real reviews:
const reviews = Math.ceil(Math.random() * 100)

function Details() {
  const { id } = useParams()
  const [recipe, setRecipe] = useState<RecipeType>({
    strMeal: '',
    strMealThumb: '',
    strCategory: '',
    strArea: '',
    idMeal: '',
  })
  const [ingredients, setIngredients] = useState<IngredientsAndMeasures>({
    ingredients: [''],
    measures: [''],
  })
  const [activeTab, setActiveTab] = useState('Ingredients')
  const [loadVideo, setLoadVideo] = useState(false)
  const [steps, setSteps] = useState(0)
  const [backgroundFade, setBackgroundFade] = useState(false)
  const [flag, setFlag] = useState('')
  const [bookmark, setBookmark] = useState(false)

  async function getDetails() {
    const [details] = (await getMeals(null, null, null, id)) as [RecipeType]

    setRecipe(details)
    setBookmark(checkIfBookmarked(details.idMeal))
    setIngredients(getIngredientsList(details))
    setSteps(getRecipeSteps(details))
    setFlag(getFlag(details.strArea) as string)
  }

  function getIngredientsList(recipe: ObjectWithStrKeysAndStrNullValues) {
    const ingredients = objForEach(recipe, (key, value: string | null) =>
      Boolean(key.includes('strIngredient') && value)
    )
    const ingArray = mapObjValuesToArray(ingredients)
    const measures = objForEach(recipe, (key, value: string | null) =>
      Boolean(key.includes('strMeasure') && value)
    )
    const measuresArray = mapObjValuesToArray(measures)

    return {
      ingredients: ingArray,
      measures: measuresArray,
    }
  }

  function getRecipeSteps(recipe: ObjectWithStrKeysAndStrNullValues) {
    if (recipe.strInstructions)
      return recipe.strInstructions?.split('\r\n').length
    return 0
  }

  function renderIngredientsList(ing: IngredientsAndMeasures) {
    const { ingredients, measures } = ing
    const list = ingredients.map((ing, i) => (
      <li key={`${ing}${i}`} className="details-ing-li">
        <span className="details-ing-li--ing">{ing}</span>
        <span className="details-ing-li--measure">{measures[i]}</span>
      </li>
    ))
    return list
  }

  // TODO: Implement the "recipe progress track" using local state and localStorage;
  function handleCheckbox(e: SyntheticEvent) {
    const tgt = e.target as HTMLInputElement
    tgt
      .closest('.details-procedures-li')
      ?.querySelector('.details-proc-li--body')
      ?.classList.toggle('td-lt')
  }

  function renderProceduresList(ing: ObjectWithStrKeysAndStrNullValues) {
    const { strInstructions } = ing
    const instructions = strInstructions?.split('\r\n')

    const list = instructions?.map((inst: string, i: number) => (
      <li key={i} className="details-procedures-li">
        <div className="flex flex-jc-sb flex-align">
          <p className="details-proc-li--heading">{`Step ${i + 1}`}</p>
          <div className="flex flex-center flex-gap-04 fstyle-i">
            <label className="fs-11 color-grey-dark-1">
              Check as completed
            </label>
            <input type="checkbox" onChange={handleCheckbox} />
          </div>
        </div>
        <p className="details-proc-li--body">{inst}</p>
      </li>
    ))
    return list
  }

  function renderTags(recipe: ObjectWithStrKeysAndStrNullValues) {
    const tags = recipe.strTags?.split(',')
    const markup = tags?.map((tag: string) => (
      <p key={tag} className="details-tags">
        {tag.toUpperCase()}
      </p>
    ))
    return markup
  }

  function handleTabs() {
    setActiveTab((prev) => {
      if (prev === 'Ingredients') return 'Procedures'
      return 'Ingredients'
    })
  }

  function RenderImgOrVideo() {
    if (activeTab === 'Ingredients')
      return (
        <div
          className="details-img flex "
          style={{ backgroundImage: `url('${recipe.strMealThumb}')` }}
        >
          <div className="flex flex-col flex-jc-sb flex-a-end">
            {flag ? (
              <img
                src={flag}
                alt={recipe.strMeal}
                className="details-img__flag"
              />
            ) : (
              <p></p>
            )}
            <div className="flex flex-gap-10 flex-align">
              <RateTag />
              <div onClick={() => setBookmark((prev) => !prev)}>
                <Bookmarked recipe={recipe} bookmarked={bookmark} />
              </div>
            </div>
          </div>
        </div>
      )
    if (!loadVideo)
      return (
        <div
          className="details-img details-img--fake-player flex pos-rel"
          style={{ backgroundImage: `url('${recipe.strMealThumb}')` }}
          onClick={() => setLoadVideo(true)}
        ></div>
      )
    else
      return (
        <div className="details-img">
          <iframe
            className="details-video"
            width="560"
            height="100%"
            src={`https://www.youtube.com/embed/${
              recipe.strYoutube?.split('=').at(1) as string
            }`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      )
  }

  function RenderIngredientsOrProcedures() {
    if (activeTab === 'Ingredients')
      return (
        <ul className="details-ing-ul ">
          {ingredients.ingredients && renderIngredientsList(ingredients)}
        </ul>
      )
    return <ul className="details-ing-ul ">{renderProceduresList(recipe)}</ul>
  }

  function backgroundHandler() {
    setBackgroundFade((prev) => !prev)
  }

  useEffect(() => {
    void getDetails()
  }, [])

  return (
    <section
      className="page-container flex flex-col flex-gap-20 component-fix-100"
      onClick={() => {
        if (backgroundFade) setBackgroundFade(false)
      }}
    >
      <div className="flex flex-col flex-gap-06">
        <TopNavigationBar
          backgroundHandler={backgroundHandler}
          condition={backgroundFade}
        />
        <RenderImgOrVideo />
        <div className="flex flex-gap-06">
          {recipe.strTags ? renderTags(recipe) : <p className="heigth-19"></p>}
        </div>
        <div className="details-title">
          <p className="details-title--heading">{recipe.strMeal}</p>
          <p className="details-title--reviews">{`(${reviews} Reviews)`}</p>
        </div>
        <Author />
      </div>
      <div className="flex flex-col flex-gap-14 component-scroll-y">
        <div className="details-tabs" onClick={handleTabs}>
          <div>
            <button
              key="Ingredients"
              type="button"
              className="details-tabs__links"
            >
              Ingredients
            </button>
            {activeTab === 'Ingredients' ? (
              <motion.div
                className="details-tabs__links--active"
                layoutId="underline"
              />
            ) : null}
          </div>
          <div>
            <button
              key="Procedures"
              type="button"
              className="details-tabs__links"
            >
              Procedures
            </button>
            {activeTab === 'Procedures' ? (
              <motion.div
                className="details-tabs__links--active"
                layoutId="underline"
              />
            ) : null}
          </div>
        </div>
        <div className="flex flex-jc-sb color-grey-dark-1">
          <div className="flex flex-gap-08">
            <GiHotMeal className="details-meal-icon" />
            <span className="fs-12"> 1 serve</span>
          </div>
          {activeTab === 'Ingredients' ? (
            <p className="fs-12">{ingredients.ingredients.length} items</p>
          ) : (
            <p className="fs-12">{steps} steps</p>
          )}
        </div>
        <div className="component-scroll-y">
          <AnimatePresence exitBeforeEnter>
            <motion.div
              key={activeTab}
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <RenderIngredientsOrProcedures />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}

export default Details
