import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import NotFound from "./page/NotFound";
import Login from "./page/Login";

function route() {
  const route = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <NotFound />,
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);

  return <RouterProvider router={route} />;
}

export default route;
