import React from "react";
import "./SingleJob.css";

import { Typography } from "antd";
import { Row, Col } from "antd";
import { List, Card } from "antd";
import { Modal, Button } from "antd";

const { Title } = Typography;
const { Paragraph } = Typography;

export default class SingleJob extends React.Component {
  state = { visible: false };

  showModal = () => {
    this.setState({
      visible: true
    });
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false
    });
  };

  render() {
    return (
      <Row>
        <Col span={6} />
        <Col span={12} className="job">
          <Card
            title={this.props.job.title}
            extra={
              <Button type="primary" onClick={this.showModal}>
                Show Info
              </Button>
            }
          >
            <Modal
              title={this.props.job.title}
              visible={this.state.visible}
              onOk={this.handleOk}
              onCancel={this.handleCancel}
            >
              <div style={{ textAlign: "center" }}>
                <img
                  src={this.props.job.company_logo}
                  style={{ width: "100px" }}
                />
                <p>{this.props.job.company}</p>
              </div>

              <div
                dangerouslySetInnerHTML={{ __html: this.props.job.description }}
              />
              <a href={this.props.job.url}>Apply Here</a>
            </Modal>
            <span> {this.props.job.company}</span>
            <span style={{ float: "right" }}>
              {this.props.job.created_at
                .split(" ")
                .slice(0, 3)
                .join(" ")}
            </span>
            <Paragraph> {this.props.job.location}</Paragraph>
          </Card>
        </Col>
        <Col span={6} />
      </Row>
    );
  }
}
