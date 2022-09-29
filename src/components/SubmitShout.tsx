import { StyleSheet } from "../models/StyleSheet";
import { Button, Form, Input } from "antd";
import React from "react";
import { submitShouts } from "../hooks/shout";

interface User {
  name: string;
  email: string;
  avatar: string;
}

const layout = {
  labelCol: { span: 7 },
  wrapperCol: { span: 10 },
};

/* eslint-disable no-template-curly-in-string */
const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
  },
};
export const SubmitShout: React.FC<{
  change: Boolean;
  setChange: React.Dispatch<React.SetStateAction<boolean>>;
  user: User | undefined;
}> = ({
  change,
  setChange,
  user,
}: {
  change: Boolean;
  setChange: React.Dispatch<React.SetStateAction<boolean>>;
  user: User | undefined;
}) => {
  const onFinish = (values: {message: string}) => {
    submitShouts({
      ...values, author: user ? user.name : "", email: user ? user.email : "",
      profilePicture: user ? user.avatar : ""
    });
    setChange(!change)
  };

  return (
    <Form
      {...layout}
      name="nest-messages"
      onFinish={onFinish}
      validateMessages={validateMessages}
      style={styles.container}>
      <Form.Item
        name={["message"]}
        label="Comment"
        rules={[{ required: true }]}>
        <Input.TextArea />
      </Form.Item>
      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 11 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

const styles = StyleSheet.create({
  container: {},
});
