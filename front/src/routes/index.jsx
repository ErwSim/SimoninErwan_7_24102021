import Signup from "../components/Signup/Signup";
import Login from "../components/Login/Login";
import NotFound from "../components/NotFound/NotFound";
import Logout from "../components/Logout/Logout";
import { Home } from "../components/Home/Home";
import { Profile } from "../components/Profile/Profile";

function routeAuth(isAuthenticated, component) {
  return isAuthenticated ? (
    component
  ) : (
    <Login from={window.location.pathname} />
  );
}

export const routes = (isAuthenticated) => [
  {
    path: "/",
    element: routeAuth(isAuthenticated, <Home />),
  },
  {
    path: "/profile",
    element: routeAuth(isAuthenticated, <Profile />),
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
