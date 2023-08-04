import { Row, Col, Form, Typography, Input, Button } from "antd";

const { Title } = Typography;
const { TextArea } = Input;

type MovieFormProps = {
  handleFormSubmit?: () => void;
};

const MovieForm = ({ handleFormSubmit }: MovieFormProps) => {
  return (
    <Form
      name="recommendation-form"
      layout="vertical"
      onFinish={handleFormSubmit}
    >
      <div>
        <Row>
          <Col span={8}>
            <Form.Item
              name="title"
              label={<Title level={4}>Movie title</Title>}
            >
              <Input placeholder="Movie title..." />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={12}>
            <Form.Item
              name="description"
              label={<Title level={3}>Description</Title>}
            >
              <TextArea
                showCount
                maxLength={500}
                placeholder="Write a short description"
                style={{ height: 200 }}
              />
            </Form.Item>
          </Col>
        </Row>
        <Button htmlType="submit" style={{ marginTop: 18 }}>
          Send recommendation
        </Button>
      </div>
    </Form>
  );
};

export default MovieForm;
