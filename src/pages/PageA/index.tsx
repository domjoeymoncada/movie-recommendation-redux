import { useDispatch, useSelector } from "react-redux";
import { addMovieRecommendation } from "../../redux/features/movieListSlice";
import RecentlyAddedList from "./components/RecentlyAddedList";
import MovieForm from "./components/MovieForm";
import { Row, Col, Button } from "antd";
import { Link } from "react-router-dom";

const MovieRecommendationForm = () => {
  const dispatch = useDispatch();
  const movies = useSelector(
    (state) => state.movieListRecommendations.recommendations
  );

  const onFormSubmit = (values) => {
    dispatch(addMovieRecommendation(values));
  };

  return (
    <Row align="middle" justify="space-around">
      <Col span={16}>
        <Link to={{ pathname: "/actions" }}>Go to actions page</Link>
        <MovieForm handleFormSubmit={onFormSubmit} />
        <RecentlyAddedList movieList={movies} />
      </Col>
    </Row>
  );
};

export default MovieRecommendationForm;
