import React from "react";
import { notification } from "antd";

const CustomNotification = ({ type, message, description, pauseOnHover }) => {
  const [api, contextHolder] = notification.useNotification();

  const openNotification = () => {
    api[type]({
      message: message || "Notification Title",
      description: description || "This is the content of the notification.",
      pauseOnHover: pauseOnHover ?? true,
    });
  };

  return (
    <>
      {contextHolder}
      {openNotification()}
    </>
  );
};

export default CustomNotification;
