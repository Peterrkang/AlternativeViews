import Home from "./Home";
import Test from "./Test";

const routes = [
  {
    path: "/",
    exact: true,
    component: Home
  },
  {
    path: "/test",
    exact: true,
    component: Test
  }
];

export default routes;
