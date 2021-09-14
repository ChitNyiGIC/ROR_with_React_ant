import React from "react";
import { Modal, Form, Input, Space } from "antd";
import { PlusCircleOutlined, CloseCircleOutlined } from "@ant-design/icons";

class ShowModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formValues: [{ h2: "", h3: "" }],
    };
    // this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(i, e) {
    let formValues = this.state.formValues;
    formValues[i][e.target.name] = e.target.value;
    this.setState({ formValues });
  }
  addFormFields() {
    this.setState({
      formValues: [...this.state.formValues, { h2: "", h3: "" }],
    });
  }

  removeFormFields(i) {
    let formValues = this.state.formValues;
    formValues.splice(i, 1);
    this.setState({ formValues });
  }
  render() {
    return (
      <Modal
        title="競合サイトの編集"
        visible={this.props.isModalVisible}
        onCancel={this.props.handleModalClose}
        // onOk={handleOK}
        okText="保存"
        cancelText="新見出し追"
        destroyOnClose={true}
      >
        <Form
          // onFinish={onFinish}
          autoComplete="off"
          initialValues={{
            formValues: this.state.formValues,
          }}
        >
          <Form.List name="formValues">
            {(fields, { add, remove }) => (
              <>
                {console.log("formValues", fields)}
                {fields.map(({ key, name, fieldKey }) => (
                  <div key={key}>
                    <Space
                      style={{ display: "flex", marginBottom: 8 }}
                      align="baseline"
                    >
                      <Form.Item
                        label="h2"
                        name={[name, "h2"]}
                        fieldKey={[fieldKey, "h2"]}
                      >
                        <Input size="large" />
                      </Form.Item>
                      <PlusCircleOutlined onClick={() => add()} />
                      <CloseCircleOutlined onClick={() => remove(name)} />
                    </Space>
                    <Space
                      style={{
                        display: "flex",
                        marginBottom: 8,
                      }}
                      align="baseline"
                    >
                      <Form.Item
                        label="h3"
                        name={[name, "h3"]}
                        fieldKey={[fieldKey, "h3"]}
                      >
                        <Input size="small" />
                      </Form.Item>
                      <PlusCircleOutlined onClick={() => add()} />
                      <CloseCircleOutlined onClick={() => remove()} />
                    </Space>
                  </div>
                ))}
              </>
            )}
          </Form.List>
        </Form>
      </Modal>
    );
  }
}

export default ShowModal;
