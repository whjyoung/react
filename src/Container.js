// 主页,入口文件
import React, { Component } from 'react'
import HeaderNav from './components/Header' // 头部组件
import Footer from './components/Footer' // 底部组件
import NavLeft from './components/NavLeft' // 左侧菜单栏组件
import Home from './pages/home' // 首页页面
import Button from './pages/ui/button' // 首页页面
import Modal from './pages/ui/modal' // 首页页面
import Loading from './pages/ui/loading' // 首页页面
import Notification from './pages/ui/notification' // 首页页面
import Message from './pages/ui/message' // 首页页面
import Tab from './pages/ui/tab' // 首页页面
import Gallery from './pages/ui/gallery' // 首页页面
import Carousel from './pages/ui/carousel' 
import Login from './pages/form/login' 
import Reg from './pages/form/reg' 
import BasicTable from './pages/table/basic' 
import HighTable from './pages/table/high' 
import Rich from './pages/rich' 
import City from './pages/city' 
import Order from './pages/order' 
import User from './pages/user' 
import BikeMap from './pages/bikeMap' 
import BarCharts from './pages/charts/bar' 
import LineCharts from './pages/charts/line' 
import PieCharts from './pages/charts/pie' 
import Permission from './pages/permission' 
import { Scrollbars } from 'react-custom-scrollbars' // 滚动条插件
import {Route} from 'react-router-dom'
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
                {/* <Home/> */}
                {/* 这边可以直接写路由遍历或直接写也行 */}
                <Route path = '/' exact component = {Home}></Route>
                <Route path = '/ui/buttons' component = {Button}></Route>
                <Route path = '/ui/modals' component = {Modal}></Route>
                <Route path = '/ui/loading' component = {Loading}></Route>
                <Route path = '/ui/notification' component = {Notification}></Route>
                <Route path = '/ui/messages' component = {Message}></Route>
                <Route path = '/ui/tabs' component = {Tab}></Route>
                <Route path = '/ui/gallery' component = {Gallery}></Route>
                <Route path = '/ui/carousel' component = {Carousel}></Route>
                <Route path = '/form/login' component = {Login}></Route>
                <Route path = '/form/reg' component = {Reg}></Route>
                <Route path = '/table/basic' component = {BasicTable}></Route>
                <Route path = '/table/high' component = {HighTable}></Route>
                <Route path = '/rich' component = {Rich}></Route>
                <Route path = '/city' component = {City}></Route>
                <Route path = '/order' component = {Order}></Route>
                <Route path = '/user' component = {User}></Route>
                <Route path = '/bikeMap' component = {BikeMap}></Route>
                <Route path = '/charts/bar' component = {BarCharts}></Route>
                <Route path = '/charts/pie' component = {PieCharts}></Route>
                <Route path = '/charts/line' component = {LineCharts}></Route>
                <Route path = '/permission' component = {Permission}></Route>
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