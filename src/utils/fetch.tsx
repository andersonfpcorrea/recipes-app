import { ArrayOfObjects } from './helpers'

const searchMealsdb = {
  byName: (name: string) =>
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`,
  byFirstLetter: (letter: string) =>
    `https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`,
  byID: (id: string) =>
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`,
  getRandom: () => `https://www.themealdb.com/api/json/v1/1/random.php`,
  getAllCategoriesDetails: () =>
    `https://www.themealdb.com/api/json/v1/1/categories.php`,
  listAllCategories: () =>
    `https://www.themealdb.com/api/json/v1/1/list.php?c=list`,
  listAllAreas: () => `https://www.themealdb.com/api/json/v1/1/list.php?a=list`,
  listAllIngredients: () =>
    `https://www.themealdb.com/api/json/v1/1/list.php?i=list`,
  filterByMainIng: (ing: string) =>
    `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ing}`,
  filterByCategory: (category: string) =>
    `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`,
  filterByArea: (area: string) =>
    `https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`,
  /**
   * @param ing The string must have the following patter: "Lime.pgn", "Lime-small.png";
   * @returns
   */
  getIngredientImg: (ing: string) =>
    `https://www.themealdb.com/images/ingredients/${ing}`,
}

const fetchFromMealdb = async (url: string, signal?: AbortSignal) =>
  await fetch(url, { signal })
    .then((res) => res.json())
    .then((data: { meals: ArrayOfObjects }) => data.meals)
    .catch((err) =>
      console.log('Sonthing went wrong during fetching of data! 💣🤯:', err)
    )

const getMealsByBasicFilter = async (basicFilter: string, query: string) => {
  const NAME = 'Name'
  const FIRST_LETTER = 'First Letter'
  const MAIN_INGREDIENT = 'Main Ingredient'
  switch (basicFilter) {
    case NAME:
      return await fetchFromMealdb(searchMealsdb.byName(query))
    case FIRST_LETTER:
      return await fetchFromMealdb(searchMealsdb.byFirstLetter(query))
    case MAIN_INGREDIENT:
      return await fetchFromMealdb(searchMealsdb.filterByMainIng(query))
    default:
      return await fetchFromMealdb(searchMealsdb.byName(query))
  }
}

export const getMealsByCategory = async (
  category: string,
  signal?: AbortSignal
) => {
  return await fetchFromMealdb(searchMealsdb.filterByCategory(category), signal)
}

const getMealByID = async (id: string) => {
  return await fetchFromMealdb(searchMealsdb.byID(id))
}

export const getMealByArea = async (area: string) => {
  return await fetchFromMealdb(searchMealsdb.filterByArea(area))
}

export async function getMeals(
  basicFilter: string | null = null,
  category: string | null = null,
  query: string | null = null,
  id: string | null = null
) {
  if (basicFilter && query)
    return await getMealsByBasicFilter(basicFilter, query)
  if (category) return await getMealsByCategory(category)
  if (id) return await getMealByID(id)
}
