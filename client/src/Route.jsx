import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import NotFound from "./page/NotFound";

function route() {
  const route = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <NotFound />,
    },
  ]);

  return <RouterProvider router={route} />;
}

export default route;
