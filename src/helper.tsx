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
    `https://www.themealdb.com/images/ingredients/`,
};

const fetchFromMealdb = (url: string) => {
  fetch(url)
    .then((res) => res.json())
    .then((data) => console.log(data.meals))
    .catch((err) => console.log('SOMETHING WAS WRONG! 💣🤯:', err));
};

const NAME = 'Name';
const FIRST_LETTER = 'First Letter';
const MAIN_INGREDIENT = 'Main Ingredient';

export const getMeals = (
  basicFilter: string | null = null,
  category: string | null = null,
  query: string | null = null
) => {
  switch (basicFilter) {
    case NAME:
      fetchFromMealdb(searchMealsdb.byName(query as string));
  }
};
