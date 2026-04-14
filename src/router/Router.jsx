import { createBrowserRouter } from "react-router";
import RootLayout from "../layOut/RootLayout";
import HomePage from "../pages/HomePage";
import StatsPage from "../pages/StatsPage";
import TimeLinePage from "../pages/TimeLinePage";
import FriendsDetails from "../component/homePageItem/FriendsDetails";

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
                        path: '/:id',
                        element: <FriendsDetails></FriendsDetails>
            },        
            {
                path: '/timelinepage',
                element: <TimeLinePage></TimeLinePage>
            },
            {
                path: '/statspage',
                element: <StatsPage></StatsPage>
            }
        ]
    }
])