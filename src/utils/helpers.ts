import {
  PredicateFunction,
  ObjForEach,
  ObjectWithStrKeysAndStrNullValues,
  RecipeType,
} from './interfaces'
import { countries } from '../data/countries'
import { Dispatch } from 'react'
import { RecipesByCategory } from '../pages/Home'

export type ArrayOfObjects = [Record<string, unknown>]

export const setSearchOnLocalStorage = (value: ArrayOfObjects) => {
  localStorage.setItem('search', JSON.stringify(value))
}

export const getSearchFromLocalStorage = (
  setter: Dispatch<[ObjectWithStrKeysAndStrNullValues] | []>
) => {
  const json = localStorage.getItem('search')
  const data =
    json && json !== 'undefined'
      ? (JSON.parse(json) as [ObjectWithStrKeysAndStrNullValues])
      : ([] as [])
  data && setter(data)
}

export const getBookmarksFromLocalStrg = () => {
  const defaultReturn = [
    {
      strMeal: '',
      strMealThumb: '',
      strCategory: '',
      strArea: '',
      idMeal: '',
    },
  ] as [RecipeType]
  const data = localStorage.getItem('bookmarks')
  if (!data) return defaultReturn
  return JSON.parse(data) as [RecipeType]
}

export const setRecipeToLocalStorage = (
  recipe: RecipeType | RecipesByCategory
) => {
  const current = localStorage.getItem('bookmarks')
  if (!current) {
    return localStorage.setItem('bookmarks', JSON.stringify([recipe]))
  }
  const bookmarks = [...(JSON.parse(current) as [RecipeType]), recipe]
  const allIDs = bookmarks.map((el) => el.idMeal)
  const uniqueIDS = [...new Set(allIDs)]
  const newBookmarks = uniqueIDS.map((id) =>
    bookmarks.find((el) => el.idMeal === id)
  )
  localStorage.setItem('bookmarks', JSON.stringify(newBookmarks))
}

export const removeRecipeFromLocalStorage = (
  recipe: RecipeType | RecipesByCategory
) => {
  const current = localStorage.getItem('bookmarks')
  if (!current) return null
  const retrived = JSON.parse(current) as [RecipeType]
  const newBookmarks = retrived.filter((b) => b.idMeal !== recipe.idMeal)
  if (newBookmarks.length === 0) {
    localStorage.setItem('bookmarks', '')
    return null
  }
  localStorage.setItem('bookmarks', JSON.stringify(newBookmarks))
}

export const toggleFromLocalStorageBookmarks = (
  action: boolean,
  recipe: RecipesByCategory | RecipeType
) => {
  if (action) return setRecipeToLocalStorage(recipe)
  return removeRecipeFromLocalStorage(recipe)
}

export const checkIfBookmarked = (id: string) => {
  const current = localStorage.getItem('bookmarks')
  if (!current) return false
  const bookmarks = JSON.parse(current) as RecipeType[]
  return bookmarks.find((el) => el.idMeal === id) ? true : false
}

export const objForEach = (
  obj: Record<string, string | null>,
  predicate: PredicateFunction
) => {
  const results: Record<string, unknown> = {}
  const keys = Object.keys(obj)
  keys.forEach((key: string) => {
    if (predicate(key, obj[key])) results[key] = obj[key]
  })
  return results
}

export const mapObjValuesToArray = (obj: Record<string, unknown>) => {
  const results: Array<unknown> = []
  const keys = Object.keys(obj)
  keys.forEach((key: string) => results.push(obj[key]))
  return results as Array<string>
}

export const mapObjKeysToArray = (obj: ObjForEach) => {
  const results: Array<string> = []
  const keys = Object.keys(obj)
  keys.forEach((key: string) => results.push(key))
  return results
}

export const getFlag = (area: string) =>
  countries.find((el) => el.demonyms.eng.f === area)?.flags.svg
