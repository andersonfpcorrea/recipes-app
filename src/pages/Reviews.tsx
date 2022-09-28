import CommentBox from '../components/CommentBox'
import TopNavigationBar from '../components/TopNavigationBar'
import UserComment from '../components/UserComment'
import { persons } from '../data/persons'

function Reviews() {
  return (
    <main className="page-container flex flex-col flex-gap-24 reviews">
      <TopNavigationBar withTitle={{ title: 'Reviews' }} condition={false} />
      <div className="flex flex-col flex-gap-10">
        <div className="flex flex-jc-sb fs-12 color-grey-dark-1">
          <p>200 comments</p>
          <p>155 saved</p>
        </div>
        <CommentBox />
      </div>
      <div className="flex flex-col flex-gap-20 reviews__comments">
        {persons.map((p) => (
          <UserComment
            photo={p.photoUrl}
            name={p.name}
            key={`${p.name}${p.photoUrl}`}
          />
        ))}
      </div>
    </main>
  )
}

export default Reviews
