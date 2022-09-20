import Image from '../assets/faces/tessa-wilson-1KuiLuha2aU-unsplash.jpg'

const Figures = (props: { title: string; figures: number }) => (
  <div className="ta-center">
    <p className="fs-14 color-grey-dark-2">{props.title}</p>
    <p className="fw-600 fs-22">{props.figures}</p>
  </div>
)

const Description = (props: {
  name: string
  title: string
  description: string
}) => (
  <div className="flex flex-col flex-gap-04">
    <div className="l-h-20">
      <h3 className="fs-18">{props.name}</h3>
      <p className="fs-12 color-grey-dark-2">{props.title}</p>
    </div>
    <div className="l-h-20">
      <p className="fs-14 color-grey-dark-1">{props.description}</p>
      <button
        type="button"
        style={{
          border: 'none',
          backgroundColor: 'inherit',
          fontSize: '1.4rem',
          color: '#f38e82',
          fontWeight: '600',
          padding: '0',
        }}
      >
        More...
      </button>
    </div>
  </div>
)

interface ProfileSummaryProps {
  numberOfRecipes: number
}

function ProfileSummary(props: ProfileSummaryProps) {
  return (
    <div className="flex flex-col flex-gap-20">
      <div className="flex flex-jc-sb flex-align">
        <img
          src={Image}
          alt="beatiful woman"
          style={{ height: '9rem', width: '9rem', borderRadius: '50%' }}
        />
        <Figures title="Recipe" figures={props.numberOfRecipes} />
        <Figures title="Followers" figures={350} />
        <Figures title="Following" figures={120} />
      </div>
      <div>
        <Description
          name="Tessa Wilson"
          title="Chef"
          description={`Private Chef based on England.\n Passionate about food and life 🥘🥗🍝🍣`}
        />
      </div>
    </div>
  )
}

export default ProfileSummary
