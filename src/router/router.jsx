import { createBrowserRouter } from "react-router-dom";
import Home from '../pages/Home';
import LayoutPublic from '../layout/LayoutPublic';
import Detail from '../pages/Detail'
import Contact from "../pages/Contact";

const router = createBrowserRouter([
    {
        path: "/",
        element: <LayoutPublic />,
        children: [
          {
            index: true,
            element: <Home />, 
          },
          {
            path: "/detail/:id",
            element: <Detail/>
          },
          {
            path: "/contact",
            element: <Contact/>
          }
        ]
        },

]);

export default router;