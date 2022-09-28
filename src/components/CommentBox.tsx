import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getMealByID } from '../utils/fetch'

function CommentBox() {
  const { id } = useParams()

  const [recipe, setRecipe] = useState('')

  useEffect(() => {
    const controller = new AbortController()
    const signal = controller.signal
    getMealByID(id as string, signal)
      .then((res) => {
        console.log(res)
        setRecipe(res?.[0].strMeal as string)
      })
      .catch((err: Error) => console.error(err.message))
  }, [id])

  return (
    <div className="comment-box flex flex-col flex-gap-04">
      <p className="fw-600 fs-14">{`Leave a comment on "${recipe}"`}</p>
      <div className="flex flex-col flex-gap-08">
        <textarea placeholder="Say something..." draggable={false} />
        <button className="btn comment-box__btn" type="button">
          Send
        </button>
      </div>
    </div>
  )
}

export default CommentBox
