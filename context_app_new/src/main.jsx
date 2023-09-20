import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles.css'
import PrimaryContext from './context/index.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter.Provider>
    <PrimaryContext.Provider>
      <App/>
      </PrimaryContext.Provider>

    </BrowserRouter>
  </React.StrictMode>,
)
