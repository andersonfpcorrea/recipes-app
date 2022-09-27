function CommentBox() {
  return (
    <div>
      <p>Leave a comment</p>
      <textarea rows={5} cols={22} defaultValue="Say something..." />
      <button type="button">Send</button>
    </div>
  )
}

export default CommentBox
