import { useState } from 'react'
import { AiOutlineStar, AiFillStar } from 'react-icons/ai'
import { PropsModal } from '../utils/interfaces'

function RateModal(props: PropsModal) {
  const { closeModal } = props
  const [stars, setStars] = useState(0)
  const [rated, setRated] = useState(false)

  return (
    <div
      className="rate-modal flex flex-col flex-center flex-gap-08"
      onClick={(e) => e.stopPropagation()}
    >
      <p className="fs-14">Rate recipe</p>
      <div className="flex flex-gap-06 fs-20 color-grad-1">
        <div
          onClick={() => {
            if (!rated) setStars(1)
          }}
        >
          {stars >= 1 ? <AiFillStar /> : <AiOutlineStar />}
        </div>
        <div
          onClick={() => {
            if (!rated) setStars(2)
          }}
        >
          {stars >= 2 ? <AiFillStar /> : <AiOutlineStar />}
        </div>
        <div
          onClick={() => {
            if (!rated) setStars(3)
          }}
        >
          {stars >= 3 ? <AiFillStar /> : <AiOutlineStar />}
        </div>
        <div
          onClick={() => {
            if (!rated) setStars(4)
          }}
        >
          {stars >= 4 ? <AiFillStar /> : <AiOutlineStar />}
        </div>
        <div
          onClick={() => {
            if (!rated) setStars(5)
          }}
        >
          {stars >= 5 ? <AiFillStar /> : <AiOutlineStar />}
        </div>
      </div>
      <div className="rate-modal__btn-container">
        {rated ? (
          <p className="fs-12 rate-on-link">Thanks for rating! 😃</p>
        ) : (
          <button
            type="button"
            className={`rate-modal__btn fs-14 rate-modal__btn--${
              stars ? 'on' : 'off'
            }`}
            onClick={() => {
              if (stars === 0) return null
              setRated(true)
              setTimeout(() => closeModal((prev) => !prev), 2500)
            }}
          >
            Send
          </button>
        )}
      </div>
    </div>
  )
}

export default RateModal
