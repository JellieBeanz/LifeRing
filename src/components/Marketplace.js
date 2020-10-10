import React from 'react'
import { Row, Col, Card, Statistic, Image } from 'antd'
import {
  PlusOutlined,
  EyeOutlined,
  ArrowUpOutlined,
  ArrowDownOutlined,
} from '@ant-design/icons'

const Marketplace = () => {
  return (
    <Row gutter={24}>
      <Col md={6}>
        <Card
          cover={<Image src="/images/bitcoin.jpg" />}
          actions={[
            <PlusOutlined key="deposit" />,
            <EyeOutlined key="details" />,
          ]}
        >
          <Statistic
            title="Active"
            value={11.28}
            precision={2}
            valueStyle={{ color: '#3f8600' }}
            prefix={<ArrowUpOutlined />}
            suffix="%"
          />
        </Card>
      </Col>
      <Col md={6}>
        <Card
          cover={<Image src="/images/etherium.jpg" />}
          actions={[
            <PlusOutlined key="deposit" />,
            <EyeOutlined key="details" />,
          ]}
        >
          <Statistic
            title="Idle"
            value={9.3}
            precision={2}
            valueStyle={{ color: '#cf1322' }}
            prefix={<ArrowDownOutlined />}
            suffix="%"
          />
        </Card>
      </Col>
    </Row>
  )
}

export default Marketplace
