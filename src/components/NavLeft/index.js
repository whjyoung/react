// 左侧菜单栏组件
import React, { Component } from 'react'
import './index.less'
import MenuConfig from '../../resource/menuConfig'
import { Menu, Icon } from 'antd'
import { Scrollbars } from 'react-custom-scrollbars' // 滚动条插件
const { SubMenu } = Menu

class NavLeft extends Component {
  constructor(props) {
    super(props);
    this.state = {}
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

  // 菜单渲染
  renderMenu = (data) => {
    // 遍历菜单
    return data.map((item) => {
      if (item.children) {// 如果有子节点children，就用submenu包裹起来,遍历子节点里的菜单
        return (
          <SubMenu title={<span><Icon type="mail" /><span>{item.title}</span></span>} key={item.key}>
            {/* // 再次遍历 */}
            {this.renderMenu(item.children)}
          </SubMenu>
        )
      }
      // 如果没有子节点，直接父级菜单
      return (
        <Menu.Item key={item.key}>
          <Icon type="user" />
          <span>{item.title}</span>
        </Menu.Item>
      )
    })
  }

  render() {
    return (
      <Scrollbars>
        <div className="navLeft">
          {/* logo */}
          <div className="logo" style={{height:'60px'}}>
            <img src="/assets/logo-ant.svg" alt="" />
            <h1 style={{ visibility: (this.props.collapsed) ? 'hidden' : 'visible'}}>React MS</h1>
          </div>
          {/* 菜单 theme:dart主题为深色 submenu包裹的说明有子节点，直接Menu.item说明没有子菜单了*/}
          <Menu theme="dark" onClick={this.handleClick} mode="inline" defaultSelectedKeys={['/admin/home']}>
            {/* 一开始进来时先遍历菜单，存到state里，然后这边获取 */}
            {this.state.menuTreeNode}
          </Menu>
        </div>
      </Scrollbars>
    );
  }
}

export default NavLeft;