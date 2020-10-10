import React from 'react'
import { Tabs as AntTabs, Empty } from 'antd'
import {
  LineChartOutlined,
  HourglassOutlined,
  HistoryOutlined,
} from '@ant-design/icons'

import Marketplace from './Marketplace'
import ActiveFlows from './ActiveFlows'

const { TabPane } = AntTabs

const Tabs = () => (
  <AntTabs defaultActiveKey="1">
    <TabPane
      tab={
        <span>
          <LineChartOutlined />
          Marketplace
        </span>
      }
      key="1"
    >
      <Marketplace />
    </TabPane>
    <TabPane
      tab={
        <span>
          <HourglassOutlined />
          Active
        </span>
      }
      key="2"
    >
      <ActiveFlows />
    </TabPane>
    <TabPane
      tab={
        <span>
          <HistoryOutlined />
          History
        </span>
      }
      key="3"
    >
      <Empty description={<span>No records</span>} />
    </TabPane>
  </AntTabs>
)

export default Tabs
