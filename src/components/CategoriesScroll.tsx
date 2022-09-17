import { Dispatch, useState } from 'react'
import { mealsCategoryArray } from '../data/mealsCategories'

export interface CatScrollProps {
  onClick: Dispatch<string>
}

function CategoriesScroll(props: CatScrollProps) {
  const { onClick } = props
  const [btnOn, setBtnOn] = useState('Beef')

  function renderCategories() {
    const markup = (cat: string) => (
      <button
        key={cat}
        type="button"
        className={`categories-btn categories-btn-${
          cat === btnOn ? 'true' : 'false'
        }`}
        onClick={() => {
          setBtnOn(cat)
          onClick(cat)
        }}
      >
        {cat}
      </button>
    )
    return mealsCategoryArray.map((cat) => markup(cat))
  }

  return (
    <div className="flex flex-gap-02 categories-scroll">
      {renderCategories()}
    </div>
  )
}

export default CategoriesScroll
