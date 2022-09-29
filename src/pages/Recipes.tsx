import TopNavigationBar from '../components/TopNavigationBar'
import { mealsCategoryArray } from '../data/mealsCategories'
import areas from '../data/mealsAreas'
import { SyntheticEvent, useEffect, useState } from 'react'
import { MdDelete, MdEdit, MdSave } from 'react-icons/md'

function Recipes() {
  const [step, setStep] = useState(1)
  const [instruction, setInstruction] = useState('')
  const [ingredient, setIngredient] = useState('')
  const [procedures, setProcedures] = useState<string[]>([])
  const [ingredients, setIngredients] = useState<string[]>([])
  const [editing, setEditing] = useState<number | null>(null)
  const [editingIng, setEditingIng] = useState<number | null>(null)
  const [editedStep, setEditedStep] = useState<string | null>(null)
  const [editedIng, setEditedIng] = useState<string | null>(null)

  const deleteItem = (index: number) => {
    const list = [...procedures]
    list.splice(index, 1)
    setProcedures(list)
  }

  const deleteIngredient = (index: number) => {
    const list = [...ingredients]
    list.splice(index, 1)
    setIngredients(list)
  }

  const updateItem = (index: number) => {
    if (editedStep === null) return null
    const list = [...procedures].map((el, i, a) => {
      if (a.indexOf(el) === index) {
        return editedStep
      }
      return el
    })
    setProcedures(list)
  }

  const updateIng = (index: number) => {
    if (editedIng === null) return null
    const list = [...ingredients].map((el, _i, a) => {
      if (a.indexOf(el) === index) {
        return editedIng
      }
      return el
    })
    setIngredients(list)
  }

  useEffect(() => {
    setStep(procedures.length + 1)
  }, [procedures])

  return (
    <main className="page-container flex flex-col flex-gap-24 fs-14 recipes">
      <TopNavigationBar
        withTitle={{ title: 'Add a recipe' }}
        condition={false}
      />
      <div className="flex flex-col flex-gap-10">
        <form className="flex flex-col flex-gap-10">
          <fieldset className="flex flex-col flex-gap-08 ">
            <label htmlFor="recipe-name" className="flex flex-jc-sb">
              <span>Recipe Name</span>{' '}
              <input
                type="text"
                id="recipe-name"
                maxLength={55}
                placeholder="max 55 chars"
              />
            </label>
            <label htmlFor="recipe-category" className="flex flex-jc-sb">
              <span>Recipe Category</span>
              <select id="recipe-category">
                {mealsCategoryArray.map((cat) => (
                  <option value={cat} key={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </label>
            <label htmlFor="recipe-area" className="flex flex-jc-sb">
              <span>Recipe Nationality</span>
              <select id="recipe-area">
                {areas.map((area) => (
                  <option value={area.strArea} key={area.strArea}>
                    {area.strArea}
                  </option>
                ))}
              </select>
            </label>
          </fieldset>
          <fieldset className="flex flex-col flex-gap-02">
            <p className="fw-600">Write here how to prepare the meal:</p>
            <label htmlFor="instruction">
              <p>{`Type the step no. ${step} `}</p>
              <textarea
                id="instruction"
                className="width-100percent"
                value={instruction}
                onChange={(e) => setInstruction(e.target.value)}
                placeholder="Add all ingredients into a bowl and mix them."
              />
            </label>
            <button
              type="button"
              className="btn btn-step fs-12 fw-600"
              onClick={() => {
                setProcedures((prev) => [...prev, instruction])
                setInstruction('')
              }}
            >
              Add step
            </button>
            <ul className="flex flex-col flex-gap-04 pad-1 ls-none">
              {procedures?.map((inst, i) => (
                <li key={inst} className="flex flex-jc-sb">
                  {editing === i ? (
                    <input
                      type="text"
                      defaultValue={procedures[i]}
                      onChange={(e) => setEditedStep(e.target.value)}
                    />
                  ) : (
                    <p>{`${i + 1}. ${inst}`}</p>
                  )}
                  <div className="flex flex-gap-04">
                    <button
                      type="button"
                      className="btn btn--del"
                      onClick={() => deleteItem(i)}
                    >
                      <MdDelete />
                    </button>
                    {editing === i ? (
                      <button
                        type="button"
                        className="btn btn-save"
                        onClick={() => {
                          setEditing(null)
                          updateItem(i)
                          setEditedStep(null)
                        }}
                      >
                        <MdSave />
                      </button>
                    ) : (
                      <button
                        type="button"
                        className="btn btn--edit"
                        onClick={() => setEditing(i)}
                      >
                        <MdEdit />
                      </button>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </fieldset>
          <fieldset className="flex flex-col flex-gap-04">
            <p className="fw-600 fs-14">Write here all the ingredients:</p>
            <div className="flex flex-col flex-gap-08">
              <label
                htmlFor="instruction"
                className="flex flex-col flex-gap-02"
              >
                <p>{`Write the ingredient with measure (separated by comma)`}</p>
                <textarea
                  rows={1}
                  id="instruction"
                  className="width-100percent"
                  placeholder="Brown sugar, 1/4 cup"
                  value={ingredient}
                  onChange={({ target }: SyntheticEvent) => {
                    const { value } = target as HTMLTextAreaElement
                    setIngredient(value)
                  }}
                />{' '}
              </label>
              <button
                type="button"
                className="btn btn-step fs-12 fw-600"
                onClick={() => {
                  setIngredients((prev) => [...prev, ingredient])
                  setIngredient('')
                }}
              >
                Add ingredient
              </button>
            </div>
            <ul className="flex flex-col flex-gap-04 pad-1 ls-none">
              {ingredients?.map((ing, i) => (
                <li key={ing} className="flex flex-jc-sb">
                  {editingIng === i ? (
                    <input
                      type="text"
                      defaultValue={ingredients[i]}
                      onChange={(e) => setEditedIng(e.target.value)}
                    />
                  ) : (
                    <p>{`${i + 1}. ${ing}`}</p>
                  )}
                  <div className="flex flex-gap-04">
                    <button
                      type="button"
                      className="btn btn--del"
                      onClick={() => deleteIngredient(i)}
                    >
                      <MdDelete />
                    </button>
                    {editingIng === i ? (
                      <button
                        type="button"
                        className="btn btn-save"
                        onClick={() => {
                          setEditingIng(null)
                          updateIng(i)
                          setEditedIng(null)
                        }}
                      >
                        <MdSave />
                      </button>
                    ) : (
                      <button
                        type="button"
                        className="btn btn--edit"
                        onClick={() => setEditingIng(i)}
                      >
                        <MdEdit />
                      </button>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </fieldset>
          <fieldset>
            <label htmlFor="imgUp">
              <p>Upload a good photo of your recipe</p>
              <input type="file" id="imgUp" />
            </label>
          </fieldset>
          <button
            type="submit"
            className="btn fw-600 width-100percent pad-1 mt-1 btn--shadow"
          >
            Submit
          </button>
        </form>
      </div>
    </main>
  )
}

export default Recipes
