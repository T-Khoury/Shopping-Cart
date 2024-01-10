import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./ErrorPage";
import App from "./App";

const Router = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <App />,
            errorElement: <ErrorPage />,
            children: [
                /*
                {
                    path: "/home",
                    element: <Home />,
                },
                {
                    path: "/shop/",
                    element: <Shop />,
                    children: []
                },
                {
                    path: "/cart",
                    element: <Cart />,
                }
                */
            ]
        }
    ]);

    return <RouterProvider router={router} />;
}

export default Router;