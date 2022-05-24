import React from "react";
import { Card, Col, Row } from "antd";

export default function guess() {
  return (
    <div className="site-card-wrapper">
      <Row gutter={16} style={{ marginLeft: "20", marginRight: "20" }}>
        <Col span={12}>
          <Card title="Card title" bordered={false}>
            <center>
              <img
                alt="example"
                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"/>
              <br></br>
              <p>
                Los osos o úrsidos (Ursidae) son una familia de mamíferos
                omnívoros. Son animales de gran tamaño, generalmente omnívoros
                ya que, a pesar de su temible dentadura, comen frutos,{" "}
              </p>
            </center>
          </Card>
        </Col>
        <Col span={12}>
          <Card title="Card title" bordered={false}>
            <center>
              <img
                alt="example"
                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"/>
              <br></br>
              <p>
                Los osos o úrsidos (Ursidae) son una familia de mamíferos
                omnívoros. Son animales de gran tamaño, generalmente omnívoros
                ya que, a pesar de su temible dentadura, comen frutos,{" "}
              </p>
            </center>
          </Card>
        </Col>
      </Row>
      <br></br>
      <Row gutter={16} style={{ marginLeft: "20", marginRight: "20" }}>
        <Col span={12}>
          <Card title="Card title" bordered={false}>
            <center>
              <img
                alt="example"
                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"/>
              <br></br>
              <p>
                Los osos o úrsidos (Ursidae) son una familia de mamíferos
                omnívoros. Son animales de gran tamaño, generalmente omnívoros
                ya que, a pesar de su temible dentadura, comen frutos,{" "}
              </p>
            </center>
          </Card>
        </Col>
        <Col span={12}>
          <Card title="Card title" bordered={false}>
            <center>
              <img
                alt="example"
                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"/>
              <br></br>
              <p>
                Los osos o úrsidos (Ursidae) son una familia de mamíferos
                omnívoros. Son animales de gran tamaño, generalmente omnívoros
                ya que, a pesar de su temible dentadura, comen frutos,{" "}
              </p>
            </center>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
