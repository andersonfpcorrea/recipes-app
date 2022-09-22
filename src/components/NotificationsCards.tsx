import { HiDocumentText, HiChat, HiPencil } from 'react-icons/hi'

interface NotiCardsProps {
  heading: string
  notifications: {
    title: string
    type: string
    body: string
    date: string
    id: string
  }[]
}

const Icon = ({ type }: { type: string }) => {
  switch (type) {
    case 'recipe':
      return <HiDocumentText />
    case 'chat':
      return <HiChat />
    case 'review':
      return <HiPencil />
    default:
      return <p></p>
  }
}

function NotificationsCards(props: NotiCardsProps) {
  const { heading, notifications } = props
  return (
    <section className="flex flex-col flex-gap-10">
      <h4 className="ta-center fs-16 fw-600">{heading}</h4>
      <div className="flex flex-col flex-gap-06">
        {notifications.map((n) => (
          <div key={n.id} className="note-cards">
            <div className="flex flex-jc-sb">
              <p className="fw-600">{n.title}</p>
              <div className="note-cards-icons">
                <Icon type={n.type} />
              </div>
            </div>
            <p className="fs-14 color-grey-dark-1 l-h-14">{n.body}</p>
            <p className="fs-12 color-grey-dark-1">{n.date}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default NotificationsCards
