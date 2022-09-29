import TopNavigationBar from '../components/TopNavigationBar'
import { mealsCategoryArray } from '../data/mealsCategories'
import areas from '../data/mealsAreas'
import { useState } from 'react'

function Recipes() {
  const [step, setStep] = useState(1)
  const [instruction, setInstruction] = useState('')
  return (
    <main className="page-container flex flex-col flex-gap-24 component-fix-100 ">
      <TopNavigationBar
        withTitle={{ title: 'Add a recipe' }}
        condition={false}
      />
      <div className="flex flex-col flex-gap-10">
        <form className="flex flex-col flex-gap-10">
          <fieldset className="flex flex-col flex-gap-08">
            <label htmlFor="recipe-name" className="flex flex-jc-sb">
              <span>Recipe Name</span> <input type="text" id="recipe-name" />
            </label>
            <label htmlFor="recipe-category" className="flex flex-jc-sb">
              <span>Recipe Category</span>
              <select>
                {mealsCategoryArray.map((cat) => (
                  <option value={cat} key={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </label>
            <label htmlFor="recipe-category" className="flex flex-jc-sb">
              <span>Recipe Nationality</span>
              <select>
                {areas.map((area) => (
                  <option value={area.strArea} key={area.strArea}>
                    {area.strArea}
                  </option>
                ))}
              </select>
            </label>
          </fieldset>
          <fieldset>
            <p>
              Here you will write a step by step guide on how to prepare the
              meal
            </p>
            <label htmlFor="instruction">
              {`Type the step no. ${step} `}
              <input
                type="text"
                value={instruction}
                onChange={(e) => setInstruction(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    setStep((prev) => prev++)
                    setInstruction('')
                  }
                }}
              />
            </label>
          </fieldset>
        </form>
      </div>
    </main>
  )
}

export default Recipes
