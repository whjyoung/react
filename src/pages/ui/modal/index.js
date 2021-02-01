import React, { Component } from "react";
import { Card, Button, Modal } from "antd";
import "../ui.less";

class ModalUI extends Component {
  state = {
    showModal1: false,
    showModal2: false,
    showModal3: false,
    showModal4: false,
    loading:false
  };
  handleOpen = (type) => {
    this.setState({
      [type]: true,
    });
  };
  handleOk = (type) => {
    debugger;
    this.setState({
      [type]: false,
    });
  };
  handleCancel = (type) => {
    this.setState({
      [type]: false,
    });
  };
  render() {
    return (
      <div>
        <Card title="基础模态框" bordered={false}>
          {/* 当要传参时需要写成箭头函数  */}
          <Button type="primary" onClick={() => this.handleOpen("showModal1")}>
            Open
          </Button>
          <Button type="primary" onClick={() => this.handleOpen("showModal2")}>
            自定义页脚
          </Button>
          <Button type="primary" onClick={() => this.handleOpen("showModal3")}>
            顶部20px弹框
            {/* style={{ top: 320 }} */}
          </Button>
          <Button type="primary" onClick={() => this.handleOpen("showModal4")}>
            水平垂直剧中
          {/* centered */}
          </Button>
        </Card>
        {/* 默认弹框 */}
        <Modal
          title="React"
          visible={this.state.showModal1}
          okText="提交"
          cancelText="取消"
          onOk={() => this.handleOk("showModal1")}
          onCancel={() => this.handleCancel("showModal1")}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
        {/* 自定义页脚 */}
        <Modal
          style={{ top: 320 }}
          title="React"
          visible={this.state.showModal2}
          onOk={() => this.handleOk("showModal2")}
          onCancel={() => this.handleCancel("showModal2")}
          footer={[
            <Button key="back" onClick={() => this.handleOk("showModal2")}>
              取消
            </Button>,
            <Button key="submit" type="primary" loading={this.state.loading} onClick={() => this.handleOk("showModal2")}>
              确定
            </Button>,
          ]}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
      </div>
    );
  }
}

export default ModalUI;
