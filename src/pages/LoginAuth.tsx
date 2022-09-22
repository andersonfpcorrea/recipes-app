import logo from '../assets/favicon.png'
import '@aws-amplify/ui-react/styles.css'
import {
  withAuthenticator,
  Button,
  Heading,
  Image,
  View,
  Card,
} from '@aws-amplify/ui-react'

function App(props: { signOut?: () => void }) {
  const { signOut } = props
  return (
    <View className="App">
      <Card>
        <Image src={logo} className="App-logo" alt="logo" />
        <Heading level={1}>We now have Auth!</Heading>
      </Card>
      <Button onClick={signOut}>Sign Out</Button>
    </View>
  )
}

export default withAuthenticator(App)
