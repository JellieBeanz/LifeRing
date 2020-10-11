import React, { createContext, useContext, useState } from 'react'
import * as _ from 'lodash'
import Web3 from 'web3'

import abi from '../utils/abi.json'

const web3 = new Web3()

if (window.ethereum) {
  web3.setProvider(window.ethereum)
}

const initialRoot = {
  type: localStorage.getItem('type'),
  defaultAddress: localStorage.getItem('defaultAddress'),
  momsContracts: new web3.eth.Contract(
    abi,
    '0x292c1b22d4e110c0204e2161223ca1e8d0aab66a'
  ),
}

export const RootContext = createContext(initialRoot)

export const useRoot = () => useContext(RootContext)

export default ({ children }) => {
  const [type, setType] = useState(initialRoot.type)
  const [defaultAddress, setDefaultAddress] = useState(
    initialRoot.defaultAddress
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

  const getBalance = () =>
    new Promise((resolve, reject) =>
      web3.eth.getBalance(defaultAddress).then(res => {
        resolve(res)
      })
    )

  return (
    <RootContext.Provider
      value={{
        type,
        setType,
        defaultAddress,
        setDefaultAddress,
        isLoggedIn,
        logOut,
        logIn,
        web3,
        momsContracts: initialRoot.momsContracts,
        getBalance,
      }}
    >
      {children}
    </RootContext.Provider>
  )
}
