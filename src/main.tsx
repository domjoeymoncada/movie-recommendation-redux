import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./redux/store.ts";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MovieRecommendationForm from "./pages/PageA/index.tsx";
import DefaultActions from "./pages/PageB/index.tsx";
import App from "./App.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route
          path="/send-movie-recommendation-form"
          element={<MovieRecommendationForm />}
        />
        <Route path="/actions" element={<DefaultActions />} />
      </Routes>
    </BrowserRouter>
  </Provider>
);
