import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Layout from './Layout'
import Home from './Home'
import NotFound from './NotFound'
import ConnectWallet from './ConnectWallet'
import Wallet from '../wallets'

import { useWallet } from '../contexts/WalletContext'

const App = () => {
  const walletContext = useWallet()
  const wallet = Wallet.instance()

  wallet
    .prepare({
      context: walletContext,
      site: { title: 'CryptoFlow', logoUrl: 'to be added' },
    })
    .catch(err => {
      console.log(err)
    })

  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/connect-wallet" component={ConnectWallet} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  )
}

export default App
