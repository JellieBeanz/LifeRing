import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './components/App'
import WalletProvider from './contexts/WalletContext'

ReactDOM.render(
  <React.StrictMode>
    <WalletProvider>
      <App />
    </WalletProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
