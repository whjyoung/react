// 主页
import React, { Component } from 'react'
import HeaderNav from './components/Header' // 头部组件
import Footer from './components/Footer' // 底部组件
import NavLeft from './components/NavLeft' // 左侧菜单栏组件
import Home from './pages/home' // 首页页面
import { Scrollbars } from 'react-custom-scrollbars' // 滚动条插件
import { Layout } from 'antd';

import './style/container.less'
const { Sider, Content } = Layout;

class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false // 默认不折叠菜单栏
    }
  }
  // 点击折叠展开按钮
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return (
      <div className="container">
        {/* Layout布局 实现整体布局*/}
        <Layout>
          <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
            {/* //侧边栏的logo的文字显示与否，通过collapsed的值来判断 */}
            <NavLeft collapsed={this.state.collapsed} />
          </Sider>
          <Layout>
            <Scrollbars>
              {/* 将父组件里的方法、参数传给子组件 */}
              <HeaderNav collapsed={this.state.collapsed} toggle={this.toggle} />
              <Content
                style={{
                  margin: '24px 16px',
                  // padding: 24,
                  background: '#fff',
                  // minHeight: 280,
                  // height: 'calc(60vh)'
                }}
              >
                {/* {this.props.children} */}
                <Home/>
              </Content>
              <Footer />
            </Scrollbars>
          </Layout>
        </Layout>
      </div>
    );
  }
}

export default Admin;