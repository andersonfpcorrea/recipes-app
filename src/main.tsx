import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { AppProvider } from './context/AppProvider'
import App from './App'
import './style/style.css'
import '@fontsource/nunito-sans'
import Amplify from 'aws-amplify'
import config from './aws-exports.js'
import AppNotes from './AppNotes'
Amplify.configure(config)

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <AppProvider>
        {/* <App /> */}
        <AppNotes />
      </AppProvider>
    </BrowserRouter>
  </React.StrictMode>
)
