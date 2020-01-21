// 子组件
import React, { Component } from 'react'
class Child extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }
  }
  //生命周期新的写法
  UNSAFE_componentWillMount() {
    console.log('will mount')
  }
  componentDidMount() {
    // console.log(this.props.content)
    console.log('did mount')
  }
  UNSAFE_componentWillReceiveProps(nextProps) {
    console.log('接收传过来的属性', nextProps)
  }
  render() {
    console.log('接收传过来的属性', this.props.content)
    return (
      <div>{this.props.content}</div>
    );
  }
}

export default Child;