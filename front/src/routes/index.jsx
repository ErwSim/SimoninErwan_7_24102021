import Signup from "../components/Signup/Signup";
import Login from "../components/Login/Login";
import NotFound from "../components/NotFound/NotFound";
import Logout from "../components/Logout/Logout";
import Home from "../components/Home/Home";
import Profile from "../components/Profile/Profile";
import UserContextHelper from "../components/helper-components/UserContextHelper/UserContextHelper";
import { ManageCategories } from "../components/ManageCategories/ManageCategories";
import Unauthorized from "../components/Unauthorized/Unauthorized";
import Posts from "../components/Posts/Posts";

const LoginFrom = () => <Login from={window.location.pathname} />;

export const routes = ({ isAuthenticated = false, isAdmin = false }) => [
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
    path: "/manage-categories",
    element: isAdmin ? <ManageCategories /> : <Unauthorized />,
  },
  {
    path: "/c/:categoryId",
    element: isAuthenticated ? <Posts /> : <LoginFrom />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];
