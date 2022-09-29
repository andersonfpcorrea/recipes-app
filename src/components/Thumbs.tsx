import { useState, SyntheticEvent } from 'react'

interface ThumbsProps {
  prevVote: undefined | string
  votesUp: number
  votesDown: number
}

function Thumbs(props: ThumbsProps) {
  const { prevVote, votesUp, votesDown } = props

  const [active, setActive] = useState(prevVote)
  const [votes, setVotes] = useState({ up: votesUp, down: votesDown })

  const handleActive = ({ target }: SyntheticEvent) => {
    const {
      dataset: { value },
    } = target as HTMLButtonElement | HTMLParagraphElement
    if (active === undefined) return setActive(value)
    if (active === value) return setActive(undefined)
    return setActive(value)
  }

  const handleVote = ({ target }: SyntheticEvent) => {
    const {
      dataset: { value },
    } = target as HTMLButtonElement | HTMLParagraphElement
    if (active === undefined)
      return setVotes((prev) => ({
        ...prev,
        [value as string]: value === 'up' ? prev.up + 1 : prev.down + 1,
      }))
    if (active === value) {
      return setVotes((prev) => ({
        ...prev,
        [value]: value === 'up' ? prev.up - 1 : prev.down - 1,
      }))
    }
    if (value === 'up')
      return setVotes((prev) => ({ up: prev.up + 1, down: prev.down - 1 }))
    if (value === 'down')
      setVotes((prev) => ({ down: prev.down + 1, up: prev.up - 1 }))
  }

  return (
    <div
      className="flex flex-gap-06"
      onClick={(e) => {
        handleVote(e)
        handleActive(e)
      }}
    >
      <button
        className={`flex flex-gap-06 fs-12 fw-600 thumbs ${
          active === 'up' ? 'thumbs--clicked' : ''
        }`}
        data-value="up"
      >
        <p data-value="up">👍</p>
        <p data-value="up">{votes.up}</p>
      </button>
      <button
        className={`flex flex-gap-06 fs-12 fw-600 thumbs ${
          active === 'down' ? 'thumbs--clicked' : ''
        }`}
        data-value="down"
      >
        <p data-value="down">👎</p>
        <p data-value="down">{votes.down}</p>
      </button>
    </div>
  )
}

export default Thumbs
