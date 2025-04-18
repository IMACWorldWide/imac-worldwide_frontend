import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home/Home";
import Relations from "./pages/Relations/Relations";
import Experiences from "./pages/Experiences/Experiences";
import Relation from "./pages/Relation/Relation";
import Experience from "./pages/Experience/Experience";
import Search from "./pages/Search/Search";

// eslint-disable-next-line react-refresh/only-export-components
export default createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/relations",
        element: <Relations />
    },
    {
        path: "/relation/:code",
        element: <Relation />,
    },
    {
        path: "/experiences",
        element: <Experiences />,
    },
    {
        path: "/experience/:id",
        element: <Experience />,
    },
    {
        path: "/search",
        element: <Search />,
    }
]);