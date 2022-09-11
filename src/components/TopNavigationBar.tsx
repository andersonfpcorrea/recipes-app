import Icons from '../assets/icons.svg'
import { BsThreeDots } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'
import TopNavMenu from '../components/TopNavMenu'

interface TopBarProps {
  backgroundHandler?: () => undefined
  condition: boolean
}

function TopNavigationBar(props: TopBarProps) {
  const { backgroundHandler, condition } = props
  const navigate = useNavigate()

  function navigateBack() {
    navigate(-1)
  }

  return (
    <nav>
      <div className="flex flex-jc-sb pos-rel">
        <svg className="top-nav-left-arrow" onClick={navigateBack}>
          <use xlinkHref={`${Icons}#icon-arrow-left`} />
        </svg>
        <BsThreeDots
          className="fs-22 top-nav-dots-menu"
          onClick={() => {
            backgroundHandler?.()
          }}
        />
      </div>
      {TopNavMenu?.(condition)}
    </nav>
  )
}

export default TopNavigationBar
