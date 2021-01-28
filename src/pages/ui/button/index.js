import React, { Component } from "react";
import { Card, Button, Radio } from "antd";
import "../ui.less";

class ButtonUi extends Component {
  state = {
    size: "small",
  };
  onChange = (e) => {
    this.setState({
      size: e.target.value,
    });
  };
  render() {
    return (
      <div>
        <Card title="基础按钮" bordered={false}>
          <Button type="primary">Imooc</Button>
          <Button>Imooc</Button>
          <Button type="dashed">Imooc</Button>
          <Button type="danger">Imooc</Button>
          <Button disabled>Imooc</Button>
        </Card>
        <Card title="图形按钮" bordered={false}>
          <Button icon="plus">创建</Button>
          <Button icon="edit">编辑</Button>
          <Button shape="circle" icon="download"></Button>
          <Button icon="delete">删除</Button>
          <Button icon="search">搜索</Button>
          <Button icon="download">下载</Button>
        </Card>
        <Card title="按钮尺寸" bordered={false}>
          <Radio.Group onChange={this.onChange} value={this.state.size}>
            <Radio value="small">小</Radio>
            <Radio value="middle">中</Radio>
            <Radio value="large">大</Radio>
          </Radio.Group>
          <Button type="primary" size={this.state.size}>
            Imooc
          </Button>
        </Card>
      </div>
    );
  }
}

export default ButtonUi;
