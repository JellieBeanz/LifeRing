import React from 'react'
import styled from 'styled-components'
import { Image, Row, Col, Typography, Button } from 'antd'
import Tabs from './Tabs'

import { useRoot } from '../contexts/RootContext'

const { Title, Paragraph } = Typography

const PrimaryTitle = styled.span`
  color: var(--primary-color);
  font-weight: 700;
`

const Home = () => {
  const cryptoFlows = ['cyFlow 1', 'cyFlow 2', 'cyFlow 3']
  const { momsContracts } = useRoot()

  momsContracts.methods
    .getAvailableCryptoFlows()
    .estimateGas()
    .then(console.log)

  return (
    <>
      <Row gutter={48}>
        <Col span={24} md={12}>
          <Title>Place where even your mom can start to earn with crypto</Title>
          <Paragraph>
            A trusted, decentralized place where you can start investing your
            crypto-assets in one click, using different profit strategies
            (cryptoFlows), uploaded by trusted developers.
          </Paragraph>
          <Button type="primary">Start Investing</Button>
        </Col>
        <Col span={24} md={12}>
          <Image src="/images/moneyflow.png" alt="Money Flow" />
        </Col>
      </Row>

      <Title level={2} style={{ textAlign: 'center', margin: '2rem 0 4rem 0' }}>
        Why <PrimaryTitle>CryptoFlow</PrimaryTitle>?
      </Title>
      <Row gutter={48} style={{ marginBottom: '4rem' }}>
        <Col span={24} md={8}>
          <Image src="/images/i1.png" height="200px" />
          <Title level={3} style={{ textAlign: 'center', fontSize: '1.1rem' }}>
            Invest in 1-click
          </Title>
          <Paragraph style={{ textAlign: 'center' }}>
            Today, we take the complication out of making investments in crypto.
            We developed a platform where you can do it in one click.
          </Paragraph>
        </Col>
        <Col span={24} md={8}>
          <Image src="/images/i2.png" height="200px" />
          <Title level={3} style={{ textAlign: 'center', fontSize: '1.1rem' }}>
            One place all flows
          </Title>
          <Paragraph style={{ textAlign: 'center' }}>
            Our platform allows you to access all possible investment products
            through one entrance.
          </Paragraph>
        </Col>
        <Col span={24} md={8}>
          <Image src="/images/i3.png" height="200px" />
          <Title level={3} style={{ textAlign: 'center', fontSize: '1.1rem' }}>
            Place for casual users
          </Title>
          <Paragraph style={{ textAlign: 'center' }}>
            Our team has developed a platform for casual users, not
            crypto-enthusiasts. That is why even your mom can invest here
            easily.
          </Paragraph>
        </Col>
      </Row>
      <Tabs />
    </>
  )
}

export default Home
