import React, { Component } from "react";
import { Card, Button, notification } from "antd";

class NotificationUI extends Component {
  // 4.5s后自动关闭
  openNotification = () => {
    notification.open({
      message: "Notification Title",
      description:
        "This is the content of the notification. This is the content of the notification. This is the content of the notification.",
      onClick: () => {
        console.log("Notification Clicked!");
      },
      onClose: () => {
        console.log("Notification Closed!");
      },
    });
  };
  //控制通知方向
  openNotification2 = placement => {
    notification.info({
      message: `Notification${placement}`,
      description:
        "This is the content of the notification. This is the content of the notification. This is the content of the notification.",
      placement,
      onClick: () => {
        console.log("Notification Clicked!");
      },
      onClose: () => {
        console.log("Notification Closed!");
      },
    });
  };
  render() {
    return (
      <div>
        <Card title="通知提醒框">
          <Button type="primary" onClick={this.openNotification}>
            open
          </Button>
        </Card>
        <Card title="通知提醒框方向">
          <Button
            type="primary"
            onClick={() => this.openNotification2("topLeft")}
          >
            topLeft
          </Button>
          <Button
            type="primary"
            onClick={() => this.openNotification2("topRight")}
          >
            topRight
          </Button>
          <Button
            type="primary"
            onClick={() => this.openNotification2("bottomLeft")}
          >
            bottomLeft
          </Button>
          <Button
            type="primary"
            onClick={() => this.openNotification2("bottomRight")}
          >
            bottomRight
          </Button>
        </Card>
      </div>
    );
  }
}

export default NotificationUI;
