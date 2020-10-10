import React from 'react'

import WalletInfo from './WalletInfo'
import WalletLogins from './WalletLogins'

import { useWallet } from '../contexts/WalletContext'

const ConnectWallet = () => {
  const { isLoggedIn } = useWallet()

  return isLoggedIn() ? <WalletInfo /> : <WalletLogins />
}

export default ConnectWallet
