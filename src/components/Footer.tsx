import { TbSmartHome } from 'react-icons/tb'
import { HiOutlineBookmark } from 'react-icons/hi'
import { MdOutlineNotifications } from 'react-icons/md'
import { BiUser } from 'react-icons/bi'
import { NavLink } from 'react-router-dom'

function Footer() {
  return (
    <nav className="footer">
      <ul className="flex flex-jc-sa flex-align fs-28">
        <li>
          <NavLink
            to="/home"
            className={({ isActive }) =>
              isActive ? 'footer-icon-active' : 'footer-icon-deact'
            }
          >
            <TbSmartHome />
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/bookmarks"
            className={({ isActive }) =>
              isActive ? 'footer-icon-active' : 'footer-icon-deact'
            }
          >
            <HiOutlineBookmark />
          </NavLink>
        </li>
        <li>
          <NavLink to="/recipes">
            <button type="button" className="footer__add-btn">
              +
            </button>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/notifications"
            className={({ isActive }) =>
              isActive ? 'footer-icon-active' : 'footer-icon-deact'
            }
          >
            <MdOutlineNotifications />
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/profile"
            className={({ isActive }) =>
              isActive ? 'footer-icon-active' : 'footer-icon-deact'
            }
          >
            <BiUser />
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Footer
