import { createBrowserRouter, RouteObject } from "react-router-dom";
import App from "../pages/app/App";
import Blog from "../pages/blog/Blog";
import NotFound from "../pages/not-found/NotFound";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/blog",
    element: <Blog />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export const router = createBrowserRouter(routes);

