import { useState } from 'react';
import {
  IoIosShareAlt,
  IoMdStar,
  IoMdText,
  IoIosBookmark,
} from 'react-icons/io';

// function renderModal() {}   Createa function for rendering a modal for share and rate
// Create a link for the review page
// Createa functionality of bookmarking

function TopNavMenu(condition: boolean) {
  const [clicked, setClicked] = useState('');
  if (condition)
    return (
      <div className="nav-menu-bg">
        <div
          className="flex flex-col flex-gap-16 nav-menu"
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <div
            className="flex flex-gap-06 flex-align"
            onClick={() => setClicked('share')}
          >
            <IoIosShareAlt className="fs-20" />
            <p>Share</p>
          </div>
          <div
            className="flex flex-gap-06 flex-align"
            onClick={() => setClicked('rate')}
          >
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
      </div>
    );
  return <p>{''}</p>;
}

export default TopNavMenu;
