import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MAinLayout";
import Home from "../Pages/Home";

const router = createBrowserRouter([
{
    path:'/',
    element: <MainLayout></MainLayout>,
    children: [
        {
            path: '/',
            element: <Home></Home>
           }
    ]
}
])

export default router;