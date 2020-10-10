import React from 'react'
import { Tooltip, Row, Col, Card, Statistic, Image } from 'antd'
import {
  PlusOutlined,
  EyeOutlined,
  ArrowUpOutlined,
  ArrowDownOutlined,
} from '@ant-design/icons'

const Marketplace = () => {
  const flows = [
    { deposited: 0.3, intereset: 2.5, fee: 12124, developedBy: 'CF Team' },
    { deposited: 522, intereset: 3.5, fee: 1924, developedBy: 'CF Team' },
    { deposited: 3.3, intereset: 1.32, fee: 1444, developedBy: 'Third Party' },
    { deposited: 52.1, intereset: 4, fee: 1124, developedBy: 'AAVE' },
    { deposited: 0.25, intereset: 2.82, fee: 17814, developedBy: 'Z-PAY' },
  ]

  return (
    <Row gutter={24} style={{ padding: '2rem' }}>
      {flows.map(flow => (
        <Col md={8} style={{ marginBottom: '2rem' }}>
          <Card
            style={{ boxShadow: '0px 0px 18px 0px rgba(0,0,0,0.1)' }}
            actions={[
              <PlusOutlined key="deposit" />,
              <EyeOutlined key="details" />,
            ]}
          >
            <div style={{ float: 'right' }}>
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
          </Card>
        </Col>
      ))}
    </Row>
  )
}

export default Marketplace
