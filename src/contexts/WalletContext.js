import React, { createContext, useContext, useState } from 'react'
import * as _ from 'lodash'

const initialWallet = {
  type: localStorage.getItem('type'),
  defaultAddress: localStorage.getItem('defaultAddress'),
}

export const WalletContext = createContext(initialWallet)

export const useWallet = () => useContext(WalletContext)

export default ({ children }) => {
  const [type, setType] = useState(initialWallet.type)
  const [defaultAddress, setDefaultAddress] = useState(
    initialWallet.defaultAddress
  )

  const isLoggedIn = () => {
    return !_.isEmpty(defaultAddress)
  }

  const logOut = () => {
    localStorage.removeItem('type')
    localStorage.removeItem('defaultAddress')
    setType('')
    setDefaultAddress('')
  }

  const logIn = (type, defaultAddress) => {
    localStorage.setItem('type', type)
    localStorage.setItem('defaultAddress', defaultAddress)
    setType(type)
    setDefaultAddress(defaultAddress)
  }

  return (
    <WalletContext.Provider
      value={{
        type,
        setType,
        defaultAddress,
        setDefaultAddress,
        isLoggedIn,
        logOut,
        logIn,
      }}
    >
      {children}
    </WalletContext.Provider>
  )
}
