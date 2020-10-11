import React from 'react'
import styled from 'styled-components'
import { Row, Col, Card, Statistic, Button } from 'antd'
import { PlusOutlined, EyeOutlined } from '@ant-design/icons'

const CardButton = styled(Button)`
  border-radius: 20px;
  display: block;
  margin: 1rem 0;
  width: 150px;
`

const Marketplace = () => {
  const flows = [
    { deposited: 0.3, intereset: 2.5, fee: 12124, developedBy: 'CF Team' },
  ]

  return (
    <Row gutter={24} style={{ padding: '2rem' }}>
      {flows.map(flow => (
        <Col span={24} sm={12} md={8} style={{ marginBottom: '2rem' }}>
          <Card style={{ boxShadow: '1px 5px 15px 0px rgba(0,0,0,0.1)' }}>
            <div style={{ float: 'right', fontSize: '0.7rem' }}>
              Invest via <strong>AAVE</strong>
            </div>
            <Statistic
              title="Total Deposited"
              value={flow.deposited}
              precision={2}
              suffix="ETH"
            />
            <Statistic
              title="Annual Interest Rate"
              value={flow.intereset}
              precision={2}
              suffix="%"
            />
            <Statistic title="Fee" value={flow.fee} precision={2} />
            <Statistic
              title="Developed By"
              value={flow.developedBy}
              valueStyle={{ fontSize: '1rem' }}
            />

            <CardButton type="primary">
              <PlusOutlined />
              Deposit
            </CardButton>
            <CardButton type="default">
              <EyeOutlined />
              Details
            </CardButton>
          </Card>
        </Col>
      ))}
      {new Array(5).fill(1).map(() => (
        <Col span={24} sm={12} md={8} style={{ marginBottom: '2rem' }}>
          <Card
            style={{
              height: '100%',
              boxShadow: '1px 5px 15px 0px rgba(0,0,0,0.1)',
              display: 'flex',
              alignContent: 'center',
              alignItems: 'center',
              minHeight: '400px',
            }}
          >
            <span
              style={{
                color: '#888',
                fontSize: '0.8rem',
                textAlign: 'center',
              }}
            >
              Here will be another CryptoFlow when it will be created by some
              trusted partner.
            </span>
          </Card>
        </Col>
      ))}
    </Row>
  )
}

export default Marketplace
