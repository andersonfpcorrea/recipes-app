import Icons from '../assets/icons.svg'
import { BsThreeDots } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'
import TopNavMenu from '../components/TopNavMenu'

interface TopBarProps {
  backgroundHandler?: () => void
  condition: boolean
  withTitle?: { title: string }
}

function TopNavigationBar(props: TopBarProps) {
  const { backgroundHandler, condition, withTitle } = props

  const navigate = useNavigate()

  function navigateBack() {
    navigate(-1)
  }

  const NoTitleMarkup = () => (
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
      {condition && <TopNavMenu condition={condition} />}
    </nav>
  )

  const WithTitleMarkup = () => (
    <nav className="grid-6-cols">
      <svg className="search--top-left-arrow" onClick={navigateBack}>
        <use xlinkHref={`${Icons}#icon-arrow-left`} />
      </svg>
      <h3 className="ta-center fs-24 center-on-grid-6-cols">
        {withTitle?.title}
      </h3>
    </nav>
  )

  return withTitle ? <WithTitleMarkup /> : <NoTitleMarkup />
}

export default TopNavigationBar
