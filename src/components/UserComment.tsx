import Thumbs from './Thumbs'

interface UserCommentProps {
  photo: string
  name: string
}

function UserComment(props: UserCommentProps) {
  const { photo, name } = props
  return (
    <div className="flex flex-col user-comment flex-gap-02">
      <div className="flex flex-gap-10">
        <img src={photo} alt="woman's face" className="user-comment__img" />
        <div>
          <p className="fw-600 fs-14">{name}</p>
          <p className="fs-12 color-grey-dark-1">September 27, 2022 - 10:30</p>
        </div>
      </div>
      <p className="fs-14">
        Lorem ipsum dolor sit amet consectutor adipisicing elit.
      </p>
      <div className="flex flex-gap-06">
        <Thumbs votesUp={3} votesDown={1} prevVote={undefined} />
      </div>
    </div>
  )
}

export default UserComment
