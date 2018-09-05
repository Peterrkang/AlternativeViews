import Home from "./Home";
import Topic from "./Topic";
import { fetchNews } from "./api";

const routes = [
  {
    path: "/",
    exact: true,
    component: Home
  },
  {
    path: "/topics/:name",
    component: Topic,
    fetchInitialData: (path = "") => fetchNews(path.split("/").pop())
  }
];

export default routes;
