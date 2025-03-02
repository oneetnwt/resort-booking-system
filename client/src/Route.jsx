import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";

function route() {
  const route = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: (
        <h1 className="italic text-3xl text-[#ff0000] font-bold flex justify-center items-center h-screen">
          404 Not Found
        </h1>
      ),
    },
  ]);
  return <RouterProvider router={route} />;
}

export default route;
