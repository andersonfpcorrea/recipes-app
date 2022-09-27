import CommentBox from '../components/CommentBox'
import TopNavigationBar from '../components/TopNavigationBar'
import UserComment from '../components/UserComment'

function Reviews() {
  return (
    <main className="page-container">
      <TopNavigationBar withTitle={{ title: 'Reviews' }} condition={false} />
      <div>
        <p>200 comments</p>
        <p>155 saved</p>
      </div>
      <CommentBox />
      <UserComment />
    </main>
  )
}

export default Reviews
