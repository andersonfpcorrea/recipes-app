import { useState } from 'react'
import {
  IoIosShareAlt,
  IoMdStar,
  IoMdText,
  IoIosBookmark,
} from 'react-icons/io'
import { Link, useParams } from 'react-router-dom'
import RateModal from './RateModal'
import ShareModal from './ShareModal'

interface Props {
  condition: boolean
}

function TopNavMenu({ condition }: Props) {
  const [share, setShare] = useState(false)
  const [rate, setRate] = useState(false)
  const { id } = useParams()

  if (condition)
    return (
      <div className="nav-menu-bg">
        <div
          className="flex flex-col flex-gap-16 nav-menu"
          onClick={(e) => {
            e.stopPropagation()
          }}
        >
          <div
            className="flex flex-gap-06 flex-align"
            onClick={() => {
              if (rate) setRate(false)
              setShare((prev) => !prev)
            }}
          >
            <IoIosShareAlt className="fs-20" />
            <p>Share</p>
          </div>
          <div
            className="flex flex-gap-06 flex-align"
            onClick={() => {
              if (share) setShare(false)
              setRate((prev) => !prev)
            }}
          >
            <IoMdStar className="fs-20" />
            <p>Rate Recipe</p>
          </div>
          <Link to={`/reviews/${id as string}`}>
            <div className="flex flex-gap-06 flex-align">
              <IoMdText className="fs-20" />
              <p>Review</p>
            </div>
          </Link>
          <Link to="/bookmarks">
            <div className="flex flex-gap-06 flex-align">
              <IoIosBookmark className="fs-20" />
              <p>Bookmarks</p>
            </div>
          </Link>
        </div>
        {share && <ShareModal closeModal={setShare} />}
        {rate && <RateModal closeModal={setRate} />}
      </div>
    )
  return <></>
}

export default TopNavMenu
