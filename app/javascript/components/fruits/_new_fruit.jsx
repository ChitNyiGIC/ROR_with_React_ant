import React from "react";
import { Form, Input, Button } from "antd";
class NewFruit extends React.Component {
  form = React.createRef();

  onFinish = (values) => {
    if (this.props.mode == "update") {
      this.props.handleUpdate(values);
    } else {
      this.props.handleFormSubmit(values);
    }

    this.form.current.resetFields();
  };

  onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  setEditValue() {
    if (this.props.mode == "update") {
      this.form.current.setFieldsValue({
        id: this.props.fruit.key,
        name: this.props.fruit.name,
        description: this.props.fruit.description,
      });
    }
  }

  componentDidUpdate() {
    this.setEditValue();
  }

  render() {
    return (
      <Form
        ref={this.form}
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        onFinish={this.onFinish}
        onFinishFailed={this.onFinishFailed}
        autoComplete="off"
        layout="vertical"
      >
        <Form.Item label="" name="id">
          <Input type="hidden" />
        </Form.Item>

        <Form.Item
          label="Fruit Name :"
          name="name"
          rules={[
            {
              required: true,
              message: "Please input your fruit name!",
            },
          ]}
        >
          <Input allowClear placeholder="Fruit Name" />
        </Form.Item>

        <Form.Item
          label="Description :"
          name="description"
          rules={[
            {
              required: true,
              message: "Please input your description!",
            },
          ]}
        >
          <Input allowClear placeholder="Description" />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            {this.props.mode == "update" ? "Update Fruit" : "Add Fruit"}
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

export default NewFruit;
