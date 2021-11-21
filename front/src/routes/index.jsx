import Signup from "../components/Signup/Signup";
import Login from "../components/Login/Login";
import NotFound from "../components/NotFound/NotFound";

export const routes = [
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];
