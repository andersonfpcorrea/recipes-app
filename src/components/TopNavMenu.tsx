import { useState } from 'react'
import {
  IoIosShareAlt,
  IoMdStar,
  IoMdText,
  IoIosBookmark,
} from 'react-icons/io'
import ShareModal from './ShareModal'

interface Props {
  condition: boolean
}

function TopNavMenu({ condition }: Props) {
  const [share, setShare] = useState(false)
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
            onClick={() => setShare((prev) => !prev)}
          >
            <IoIosShareAlt className="fs-20" />
            <p>Share</p>
          </div>
          <div className="flex flex-gap-06 flex-align">
            <IoMdStar className="fs-20" />
            <p>Rate Recipe</p>
          </div>
          <div className="flex flex-gap-06 flex-align">
            <IoMdText className="fs-20" />
            <p>Review</p>
          </div>
          <div className="flex flex-gap-06 flex-align">
            <IoIosBookmark className="fs-20" />
            <p>Bookmark</p>
          </div>
        </div>
        {share && <ShareModal closeModal={setShare} />}
      </div>
    )
  return <></>
}

export default TopNavMenu
