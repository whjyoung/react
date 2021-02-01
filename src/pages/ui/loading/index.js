import React, { Component } from "react";
import { Card, Button, Alert, Spin } from "antd";
import { LoadingOutlined } from '@ant-design/icons';

// 自定义加载图标
const antdSpin = <LoadingOutlined />

class Loading extends Component {
  state = {
    spinning: false,
  };
  handleSpin = () => {
    this.setState({
      spinning: !this.state.spinning,
    });
  };
  render() {
    const { spinning } = this.state;
    return (
      <div>
        <Card title="Spin用法">
          <Spin indicator={antdSpin} spinning={spinning} tip="Loading..." style={{ width: "50%" }}>
            <Alert
              style={{ width: "50%" }}
              message="Alert message title"
              description="Further details about the context of this alert."
              type="info"
            />
          </Spin>
          <Button
            style={{ marginTop: "10px" }}
            type="primary"
            onClick={this.handleSpin}
          >
            加载
          </Button>
        </Card>
      </div>
    );
  }
}

export default Loading;
