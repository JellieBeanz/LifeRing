import React from 'react'
import styled from 'styled-components'
import { Image, Row, Col, Typography, Button } from 'antd'
import Tabs from './Tabs'

const { Title, Paragraph } = Typography

const PrimaryTitle = styled.span`
  color: var(--primary-color);
  font-weight: 700;
`

const Home = () => {
  return (
    <>
      <Row gutter={48}>
        <Col span={24} md={12}>
          <Title>CryptoFlow (cF) - Even your mom start earn with crypto</Title>
          <Paragraph>
            Trusted decentralizd place where you can start invest your
            crypto-assets in 1-click in different profit strategies
            (cryptoFlows), which are uploaded by trusted developers
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
      <Row gutter={48} style={{ marginBottom: '2rem' }}>
        <Col span={24} md={8}>
          <Image src="/images/i1.png" height="200px" />
          <Title level={3} style={{ textAlign: 'center', fontSize: '1.1rem' }}>
            One place all flows
          </Title>
          <Paragraph style={{ textAlign: 'center' }}>
            Our platform allows to have one entrance to all possible investment
            products
          </Paragraph>
        </Col>
        <Col span={24} md={8}>
          <Image src="/images/i2.png" height="200px" />
          <Title level={3} style={{ textAlign: 'center', fontSize: '1.1rem' }}>
            Invest in 1-click
          </Title>
          <Paragraph style={{ textAlign: 'center' }}>
            Today it is really complicated to make an investement in crypto, we
            developed a platform where you can do it in 1 click
          </Paragraph>
        </Col>
        <Col span={24} md={8}>
          <Image src="/images/i3.png" height="200px" />
          <Title level={3} style={{ textAlign: 'center', fontSize: '1.1rem' }}>
            Place for casual users
          </Title>
          <Paragraph style={{ textAlign: 'center' }}>
            Our team developed a platform for casual users not for
            crypto-enthusiast, that's why even your mom can invest here in easy
            way
          </Paragraph>
        </Col>
      </Row>
      <Tabs />
    </>
  )
}

export default Home
