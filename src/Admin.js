// 主页
import React, { Component } from 'react'
import { Row, Col } from 'antd'
import Header from './components/Header' // 头部组件
import Footer from './components/Footer' // 底部组件
import NavLeft from './components/NavLeft' // 左侧菜单栏组件
import './style/common.less'

class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <div>
        {/* antd栅格系统布局 */}
        <Row className="container">
          <Col span={4} className="nav_left">
            <NavLeft />
          </Col>
          <Col span={20} className="right_con">
            <Header />
            <Row className="content">
              Content
            </Row>
            <Footer />
          </Col>
        </Row>
      </div>
    );
  }
}

export default Admin;