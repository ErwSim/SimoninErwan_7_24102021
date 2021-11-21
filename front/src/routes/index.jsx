import Signup from "../components/Signup/Signup";
import Login from "../components/Login/Login";
import NotFound from "../components/NotFound/NotFound";
import Logout from "../components/Logout/Logout";
import Home from "../components/Home/Home";
import Profile from "../components/Profile/Profile";
import UserContextHelper from "../components/helper-components/UserContextHelper/UserContextHelper";

const LoginFrom = () => <Login from={window.location.pathname} />;

export const routes = (isAuthenticated) => [
  {
    path: "/",
    element: isAuthenticated ? (
      <UserContextHelper>
        <Home />
      </UserContextHelper>
    ) : (
      <LoginFrom />
    ),
  },
  {
    path: "/profile",
    element: isAuthenticated ? (
      <UserContextHelper>
        <Profile />
      </UserContextHelper>
    ) : (
      <LoginFrom />
    ),
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
