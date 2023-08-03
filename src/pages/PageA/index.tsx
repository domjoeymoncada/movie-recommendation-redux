import { Row, Col, Form, Typography, Input, Button } from "antd";
import { useDispatch } from "react-redux";
import { addMovieRecommendation } from "../../redux/features/movieListSlice";

const { Title } = Typography;
const { TextArea } = Input;

const MovieRecommendationForm = () => {
  const dispatch = useDispatch();

  const onFormSubmit = (values) => {
    dispatch(addMovieRecommendation(values));
  };
  
  return (
    <Form name="recommendation-form" layout="vertical" onFinish={onFormSubmit}>
      <Row align="middle" justify="space-around">
        <Col span={18}>
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
        </Col>
      </Row>
    </Form>
  );
};

export default MovieRecommendationForm;
