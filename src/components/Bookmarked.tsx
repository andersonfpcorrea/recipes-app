import Icons from '../assets/icons.svg'

function Bookmarked() {
  return (
    <button type="button" className="bookmark-btn">
      <svg>
        <use xlinkHref={`${Icons}#icon-bookmark-fill`} />
      </svg>
    </button>
  )
}

export default Bookmarked
