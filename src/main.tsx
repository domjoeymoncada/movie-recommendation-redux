import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./redux/store.ts";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MovieRecommendationForm from "./pages/PageA/index.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <h1>Welcome to home screen</h1>
            </div>
          }
        />
        <Route
          path="/send-movie-recommendation-form"
          element={<MovieRecommendationForm />}
        />
      </Routes>
    </BrowserRouter>
  </Provider>
);
