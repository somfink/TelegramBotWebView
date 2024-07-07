import { RouterProvider } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import { routes } from "@constants/routes";
import NavigationLayout from "@pages/NavigationLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <NavigationLayout />,
    children: [...routes],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
