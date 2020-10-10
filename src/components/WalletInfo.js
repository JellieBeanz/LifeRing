import React from 'react'
import { useHistory } from 'react-router-dom'
import { Box, Button, Heading, Blockie, EthAddress, Text } from 'rimble-ui'

import Wallet from '../wallets'

import { useWallet } from '../contexts/WalletContext'

const WalletInfo = () => {
  const history = useHistory()
  const { type, defaultAddress } = useWallet()

  const _logout = async () => {
    await Wallet.instance().disconnect()
    history.push('/')
  }

  return (
    <>
      <Heading as={'h3'}>
        <Blockie
          opts={{
            seed: defaultAddress,
            color: `#${defaultAddress.slice(2, 8)}`,
            bgcolor: `#${defaultAddress.slice(-6)}`,
            size: 15,
            scale: 3,
            spotcolor: '#000',
          }}
        />
        &nbsp;&nbsp;Main App &nbsp;&nbsp;
        <small>(using {Wallet.getName(type)})</small>
      </Heading>

      <Box mt={20}>
        <Text>
          <EthAddress address={defaultAddress} />
        </Text>
      </Box>

      <Box mt={40}>
        <Text.p>
          <Button onClick={_logout}>log out</Button>
        </Text.p>
      </Box>
    </>
  )
}

export default WalletInfo
