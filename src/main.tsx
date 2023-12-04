import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './redux/store.tsx'
import { Theme } from './context/theme.context.tsx'
// import 'https://fonts.googleapis.com/css2?family=Balsamiq+Sans&display=swap'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
<Provider store={store}>
    <BrowserRouter>
    <Theme>
    <App />
    </Theme>
    
    </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)
