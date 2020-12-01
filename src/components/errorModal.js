import React from "react";
import { Modal, Alert } from "antd";


class ErrorModal extends React.Component {

  render() {
    return (
      <>
        <Modal
          title={null}
          className="errorModal"
          visible={this.props.visible}
          footer={null}
          onCancel={this.props.onCancel}
        >
        <Alert
          message="Please enter all fields"
          type="error"
          showIcon
        />
        </Modal>
      </>
    );
  }
}
export default ErrorModal;
