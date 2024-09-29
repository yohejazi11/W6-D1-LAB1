

import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import ErrorPage from "/src/assets/component/Errorpage.jsx";

import Campinfo from '/src/assets/component/Campinfo.jsx'
import Register from '/src/assets/component/Register.jsx'
import Nav from '/src/assets/component/Nav.jsx'

import App from '/src/App.jsx'

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />
    },
    {
        path: "/home",
        element: <App></App>
    },
    {
        path: "/camp",
        element: <Campinfo></Campinfo>
    },
    {
        path: "/register",
        element: <Register></Register>
    },
]);
function Router() {
    return (
        <div>
            <RouterProvider router={router} />

        </div>
    )
}

export default Router