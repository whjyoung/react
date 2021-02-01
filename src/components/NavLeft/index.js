// 左侧菜单栏组件
import React, { Component } from 'react'
import './index.less'
import MenuConfig from '../../resource/menuConfig'
import { Menu } from 'antd'
import { Scrollbars } from 'react-custom-scrollbars' // 滚动条插件
import {Link,withRouter } from 'react-router-dom'
import { MailOutlined, UserOutlined} from '@ant-design/icons';
const { SubMenu } = Menu

const rootSubmenuKeys = ['/ui', '/table', '/form','/charts'];// 父级菜单

class NavLeft extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openKeys:[],
      // selectedKeys:[]
    }
  }

  componentDidMount() {
    // 防止页面刷新侧边栏又初始化了
    debugger
    const pathname = this.props.location.pathname
    //获取当前所在的目录层级
    // const rank = pathname.split('/')
    // switch (rank.length) {
    //   case 2 :  //一级目录
    //     // this.setState({
    //     //   selectedKeys: [pathname]
    //     // })
    //     break;
    //   case 5 : //三级目录，要展开两个subMenu
    //     this.setState({
    //       // selectedKeys: [pathname],
    //       openKeys: [rank.slice(0, 3).join('/'), rank.slice(0, 4).join('/')]
    //     })
    //     break;
    //   default :
        this.setState({
          // selectedKeys: [pathname],
          openKeys: [pathname.substr(0, pathname.lastIndexOf('/'))]
        })
    // }
  }

  // 生命周期 componentWillMount()=>旧版本，react 16.4不会报warning
  UNSAFE_componentWillMount() {
    console.log(MenuConfig)
    const menuTreeNode = this.renderMenu(MenuConfig)
    this.setState({
      menuTreeNode: menuTreeNode
    })
  }

  handleClick = e => {
    console.log('click', e)
  }
  
  // 只展开点击的父级菜单
  onOpenChange = e => {
    console.log(e)
    const {openKeys} = this.state
    debugger
    const latestOpenKey = e.find(key => openKeys.indexOf(key) === -1);
    if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      this.setState({
        openKeys:e
      })
    } else {
      this.setState({
        openKeys:latestOpenKey ? [latestOpenKey] : []
      })
    }
  }
  // 菜单渲染
  renderMenu = (data) => {
    // 遍历菜单
    return data.map((item) => {
      if (item.children) {// 如果有子节点children，就用submenu包裹起来,遍历子节点里的菜单
        return (
          <SubMenu title={<span><MailOutlined /><span>{item.title}</span></span>} key={item.key}>
            {/* // 再次遍历 */}
            {this.renderMenu(item.children)}
          </SubMenu>
        )
      }
      // 如果没有子节点，直接父级菜单
      return (
        <Menu.Item key={item.key}>
          <Link to={item.key}>
          <UserOutlined />
          <span>{item.title}</span>
          </Link>
        </Menu.Item>
      )
    })
  }

  render() {
    const {openKeys} = this.state
    return (
      <Scrollbars>
        <div className="navLeft">
          {/* logo */}
          <div className="logo" style={{height:'60px'}}>
            <img src="/assets/logo-ant.svg" alt="" />
            <h1 style={{ visibility: (this.props.collapsed) ? 'hidden' : 'visible'}}>React MS</h1>
          </div>
          {/* 菜单 theme:dart主题为深色 submenu包裹的说明有子节点，直接Menu.item说明没有子菜单了*/}
          <Menu theme="dark" openKeys={openKeys} onOpenChange={this.onOpenChange} onClick={this.handleClick} mode="inline" defaultSelectedKeys={[this.props.history.location.pathname]} selectedKeys={[this.props.history.location.pathname]}>
            {/* 一开始进来时先遍历菜单，存到state里，然后这边获取 */}
            {this.state.menuTreeNode}
          </Menu>
        </div>
      </Scrollbars>
    );
  }
}

export default withRouter(NavLeft);