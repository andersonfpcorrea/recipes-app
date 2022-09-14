import Icons from '../assets/icons.svg'

function Unbookmarked() {
  return (
    <button type="button" className="bookmark-btn">
      <svg>
        <use xlinkHref={`${Icons}#icon-bookmark`} />
      </svg>
    </button>
  )
}

export default Unbookmarked
