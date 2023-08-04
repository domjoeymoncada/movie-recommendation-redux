import { Typography } from "antd";

const { Title, Text } = Typography;

type RecentlyAddedListProps = {
  movieList: object[];
};

const RecentlyAddedList = ({ movieList }: RecentlyAddedListProps) => {
  console.log("mobilist", movieList);
  return (
    <div>
      <Title level={3}>Recently added:</Title>
      {movieList?.length > 0 &&
        movieList?.map((movie, index) => <Text key={index} strong>{movie.title}</Text>)}
    </div>
  );
};

export default RecentlyAddedList;
