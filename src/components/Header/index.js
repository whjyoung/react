import React, { Component } from 'react'
import moment from 'moment' //日期格式化控件
import { Row, Col, Divider } from 'antd'
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import axios from '../../axios/index' //jsonp axios请求天气
import './index.less'

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: ''//系统时间
    }
  }
  // 当将要挂载时，请求天气api,获取当前系统时间
  UNSAFE_componentWillMount() {
    this.getWeatherAPIData()
    // 系统时间计时
    setInterval(() => {
      let sysTime = moment().format('YYYY-MM-DD HH:mm:ss')
      this.setState({
        date: sysTime
      })
    }, 1000)
  }

  // 请求天气api
  getWeatherAPIData = () => {
    axios.jsonp({
      url: 'http://api.map.baidu.com/telematics/v3/weather?location=shanghai&output=json&ak=3p49MVra6urFRGOT9s8UBWr2'
    }).then(res => {
      // if (res.status === "success") {
      //   debugger
      //   console.log(res)
      //   let data = res.results[0].weather_data[0] //获取当天的天气信息
      //   this.setState({
      //     dayPictureUrl: data.dayPictureUrl,
      //     weather: data.weather
      //   })
      // }
      console.log(res)
    })
    .catch(err => {
      console.log(err)
    })
  }

  //调用父组件里的toggle方法
  toggle = () => {
    this.props.toggle()
  }
  render() {
    return (
      <div className="header">
        {/* 头部上边内容 ->个人信息&退出 */}
        <Row className="header_top">
          <Col span={24}>
            <span className="username">欢迎，河畔一角</span>
            <a href="/">退出</a>
          </Col>
        </Row>
        <Divider className="divider" />
        {/* 头部下侧内容：面包屑导航栏&天气信息 */}
        <Row className="breadCrumb">
          <Col span={4}>
            <span onClick={this.toggle} style={{ marginBottom: 16 }}>
              {this.props.collapsed ? <MenuUnfoldOutlined/> : <MenuFoldOutlined/>}
            </span>
            <span className="breadCrumb_title">首页</span>
          </Col>
          <Col span={20} className="weather">
            <span className="date">{this.state.date}</span>
            <span className="detail">
              <img src={this.state.dayPictureUrl} alt="" />
              <span>{this.state.weather}</span>
            </span>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Header;