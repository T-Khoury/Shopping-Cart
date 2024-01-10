import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";

const Router = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <App />,
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