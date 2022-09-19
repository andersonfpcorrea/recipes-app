import Icons from '../assets/icons.svg'

interface RecipeTimeProps {
  color?: string
}

function RecipeTime(props: RecipeTimeProps) {
  const { color } = props
  return (
    <div
      className="color-grey-dark-2
      heigth-30 flex flex-align flex-gap-04"
      style={{ color: `${color as string}` }}
    >
      <svg
        style={{
          height: '1.4rem',
          width: '1.4rem',
          fill: `${(color as string) || '#918581'}`,
        }}
      >
        <use xlinkHref={`${Icons}#icon-clock`} />
      </svg>
      <p className="fs-12 ">20 mins</p>
    </div>
  )
}

export default RecipeTime
