import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Blog from "../Pages/Blog/Blog";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import AddServices from "../Pages/AddServices/AddServices";
import Register from "../Pages/Register/Register";
import ServiceDetails from "../Pages/ServiceDetails/ServiceDetails";
import Services from "../Pages/Services/Services";
import MyReviews from "../Pages/MyReviews/MyReviews";
import PrivateRoute from "./PrivateRoute";
import UpdateReview from "../Pages/UpdateReview/UpdateReview";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";


export const route = createBrowserRouter([
    {
        path: '/', element: <Main></Main>, children: [
            {
                path: '/', element: <Home></Home>, loader: () => {
                    return fetch("https://diana-spa-server.vercel.app/");
                }
            },
            {
                path: '/services', element: <Services></Services>
                
            },
            {
                path: '/login', element: <Login></Login>
            },
            {
                path: '/register', element: <Register></Register>
            },
            {
                path: '/service-details/:id', element: <ServiceDetails></ServiceDetails>,
                loader: ({ params }) => {
                    return fetch(`https://diana-spa-server.vercel.app/service-details/${params.id}`)
                }
            },

            {
                path: "/blog", element: <Blog></Blog>
            },
            {
                path: '/add-services', element: <PrivateRoute><AddServices></AddServices></PrivateRoute>
            },
            {
                path: '/my-reviews', element: <PrivateRoute><MyReviews></MyReviews></PrivateRoute>
            },
            {
                path: '/update-review/:id', element: <UpdateReview></UpdateReview>,
                loader: ({ params }) => params.id

            },
            {
                path: '*', element: <ErrorPage></ErrorPage>
            }
        ]

    },

    



])