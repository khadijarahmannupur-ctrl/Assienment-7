import { createBrowserRouter } from "react-router";
import RootLayout from "../layOut/RootLayout";
import HomePage from "../pages/HomePage";
import StatsPage from "../pages/StatsPage";
import TimeLinePage from "../pages/TimeLinePage";
import FriendsDetails from "../component/homePageItem/FriendsDetails";
import ErrorPage from "../pages/ErrorPage";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout></RootLayout>,
        children: [
            {
                index: true,
                element: <HomePage></HomePage>,
            },
            {
                path: '/friends/:id',
                element: <FriendsDetails></FriendsDetails>
            },
            {
                path: '/timelinepage',
                element: <TimeLinePage></TimeLinePage>
            },
            {
                path: '/statspage',
                element: <StatsPage></StatsPage>
            },
            {
                path: '*',
                element: <ErrorPage />
            }
        ]
    }
])