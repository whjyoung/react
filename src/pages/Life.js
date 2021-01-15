// 父组件
import React, { Component } from "react";
import Child from "./Child";
import { Button } from "antd";

class Life extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      name: "whj",
    };
  }
  handleAdd = () => {
    //es6写法
    this.setState({
      count: this.state.count + 1,
    });
  };
  handleDel() {
    // 正常写法，只是下面声明时多了个bind绑定
    this.setState({
      count: this.state.count - 1,
    });
  }
  render() {
    return (
      <div style={{ padding: "50px" }}>
        <div>{this.state.count}</div>
        <Child content={this.state.name} />
        <button onClick={this.handleAdd}>增加</button>
        <Button onClick={this.handleAdd}>增加</Button>
        <button onClick={this.handleDel.bind(this)}>减少</button>
      </div>
    );
  }
}

export default Life;
