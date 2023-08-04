import { Row, Col, Typography, Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { removeAllMovieRecommendations } from "../../redux/features/movieListSlice";

const { Text, Title } = Typography;

const DefaultActions = () => {
  const dispatch = useDispatch();
  const movieList = useSelector(
    (state) => state.movieListRecommendations.recommendations
  );

  return (
    <Row justify="space-evenly">
      <Col span={16}>
        <Row>
          <Link to={{ pathname: "/send-movie-recommendation-form" }}>
            Go back...
          </Link>
        </Row>
        <Row>
          <Button
            style={{ marginTop: 18 }}
            onClick={() => dispatch(removeAllMovieRecommendations())}
          >
            Remove all items
          </Button>
        </Row>
        <Row style={{ marginTop: 12 }}>
          {movieList?.length > 0 ? (
            <div>
              <Title level={3}>Items added:</Title>
              {movieList?.map((movie) => (
                <Row>
                  <Col>
                    <Text strong>{movie.title}</Text>
                  </Col>
                </Row>
              ))}
            </div>
          ) : (
            <Text>Nothing added yet</Text>
          )}
        </Row>
      </Col>
    </Row>
  );
};

export default DefaultActions;
