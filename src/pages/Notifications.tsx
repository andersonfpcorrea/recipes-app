import Footer from '../components/Footer'
import NotificationsCards from '../components/NotificationsCards'
import TopNavigationBar from '../components/TopNavigationBar'
import { today, yesterday } from '../data/notifications'

function Notifications() {
  return (
    <main className="page-container-with-footer">
      <div className="page-container flex flex-col flex-gap-20 overflow-y-scroll">
        <TopNavigationBar
          withTitle={{ title: 'Notifications' }}
          condition={false}
        />
        <div>
          <NotificationsCards heading="Today" notifications={today} />
        </div>
        <div>
          <NotificationsCards heading="Yesterday" notifications={yesterday} />
        </div>
      </div>
      <Footer />
    </main>
  )
}

export default Notifications
