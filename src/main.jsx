import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css'
import App from './App.jsx'
import { AccountProvider } from './context/AccountContext'; // adjust path
import { ApplicationProvider } from './context/ApplicationContext';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AccountProvider>
      <BrowserRouter>
        <ApplicationProvider>

          <App />
        </ApplicationProvider>

      </BrowserRouter>
    </AccountProvider>
  </StrictMode >
)
