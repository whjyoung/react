import React, { Component } from 'react'
import './index.less'
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <div className="home">
        <p>首页</p>
        <p>基于react+react router+redux+antd的框架布局</p>
      </div>
    );
  }
}

export default Home;