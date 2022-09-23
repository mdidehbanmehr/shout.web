import { StyleSheet } from "../models/StyleSheet";
import { Button, Form, Input } from "antd";
import React from "react";
import { postPostShouts } from "../hooks/shout";

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
/* eslint-enable no-template-curly-in-string */

export const SubmitShout: React.FC = () => {
  const onFinish = (values: any) => {
    postPostShouts(values);
  };

  return (
    <Form
      {...layout}
      name="nest-messages"
      onFinish={onFinish}
      validateMessages={validateMessages}
      style={styles.container}>
      <Form.Item name={["author"]} label="Name" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item
        name={["email"]}
        label="Email"
        rules={[{ type: "email", required: true }]}>
        <Input />
      </Form.Item>
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
