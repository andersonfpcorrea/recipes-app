import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { AppProvider } from './context/AppProvider';
import App from './App';
import './style/style.css';
import '@fontsource/nunito-sans';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <AppProvider>
        <App />
      </AppProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// Aparrently there is an error on React regarding typing of functional components: https://github.com/chakra-ui/chakra-ui/issues/5896
