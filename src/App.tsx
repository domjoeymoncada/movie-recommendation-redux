import { Button, Typography } from "antd";
import { Link } from "react-router-dom";

const { Title } = Typography;

const App = () => {
  return (
    <div>
      <Title level={2}>Redux Toolkit (RTK) sample application</Title>
      <Button style={{ marginTop: 24 }}>
        <Link to={{ pathname: "/send-movie-recommendation-form" }}>
          Click here to start
        </Link>
      </Button>
    </div>
  );
};

export default App;
