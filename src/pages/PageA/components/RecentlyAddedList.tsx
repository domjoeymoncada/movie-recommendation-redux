import { Typography, Row, Col } from "antd";

const { Title, Text } = Typography;

type RecentlyAddedListProps = {
  movieList: object[];
};

const RecentlyAddedList = ({ movieList }: RecentlyAddedListProps) => {
  return (
    <div>
      <Title level={3}>Recently added:</Title>
      {movieList.length > 0 &&
        movieList?.slice(0,3).map((movie, index) => (
          <Row key={index}>
            <Col>
              <Text strong>{movie.title}</Text>
            </Col>
          </Row>
        ))}
    </div>
  );
};

export default RecentlyAddedList;
