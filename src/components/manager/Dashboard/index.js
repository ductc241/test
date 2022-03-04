import React from 'react'
import { Routes, Route } from 'react-router-dom'

import { Layout } from 'antd';

import Product from '../../../containers/Product'
import SideBar from '../SideBar';

const Admin = () => {
  const { Content } = Layout;

  return (
    <div className='dashboard'>
      <Layout style={{ minHeight: '100vh' }}>
          <SideBar />
          <Layout className="site-layout">
            <Content style={{ margin: '0 16px' }}>
              <div className="site-layout-background" style={{ margin: '16px 0', padding: 24, minHeight: 360 }}>
                <Routes>
                  <Route path="product/*" element={<Product />} />
                </Routes>
              </div>
            </Content>
          </Layout>
        </Layout>
    </div>
  )
}

export default Admin