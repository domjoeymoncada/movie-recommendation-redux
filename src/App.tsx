import { Row, Col, Form, Input, Button, Typography } from "antd";

const { TextArea } = Input;
const { Title } = Typography;

const App = () => {
  return (
    <Form name="recommendation-form" layout="vertical">
      <Row align="middle" justify="space-around">
        <Col span={18}>
          <div>
            <Row>
              <Col span={8}>
                <Form.Item label={<Title level={4}>Movie title</Title>}>
                  <Input placeholder="Movie title..." />
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <Col span={12}>
                <Form.Item label={<Title level={3}>Description</Title>}>
                  <TextArea
                    showCount
                    maxLength={500}
                    placeholder="Write a short description"
                    style={{ height: 200 }}
                  />
                </Form.Item>
              </Col>
            </Row>
            <Button style={{ marginTop: 18 }}>Send recommendation</Button>
          </div>
        </Col>
      </Row>
    </Form>
  );
};

export default App;
