import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./ErrorPage";
import App from "./App";
import { Shop } from "./Shop";
import GamePage from "./GameDetail";
import Home from "./Home"

const Router = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <App />,
            errorElement: <ErrorPage />,
            children: [
                {
                    index: true,
                    element: <Home />,
                },
                {
                    path: "/shop/",
                    element: <Shop />,
                    children: []
                },
                {
                    path: "/cart",
                    /*element: <Cart />,*/
                },
                {
                    path: "/product/:id",
                    element: <GamePage />
                }
            ]
        }
    ]);

    return <RouterProvider router={router} />;
}

export default Router;