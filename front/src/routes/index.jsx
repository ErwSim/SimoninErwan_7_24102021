import Signup from "../components/Signup/Signup";
import Login from "../components/Login/Login";
import NotFound from "../components/NotFound/NotFound";
import Logout from "../components/Logout/Logout";
import { Home } from "../components/Home/Home";

export const routes = (isAuthenticated) => [
  {
    path: "/",
    element: isAuthenticated ? <Home /> : <Login />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/logout",
    element: <Logout />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];
