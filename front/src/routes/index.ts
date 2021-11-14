import { Login } from "../components/Login/Login";
import { Signup } from "../components/Signup/Signup";
import { IRoute } from "../interfaces";

const routes: IRoute[] = [
  { name: "Login", path: "/login", element: Login() },
  { name: "Signup", path: "/signup", element: Signup() },
];

const compile = (parentRoute: IRoute, subRoutes: IRoute[]): IRoute[] => {
  return subRoutes.flatMap((subRoute) => {
    const newRoute: IRoute = {
      name: subRoute.name,
      path: parentRoute.path + subRoute.path,
      element: subRoute.element,
    };

    return subRoute.routes ? [...compile(newRoute, subRoute.routes)] : newRoute;
  });
};

export const getRoutes = () => {
  const parentRoute = {
    name: "",
    path: "",
  };

  const flatRoutes = compile(parentRoute, routes);
  return flatRoutes;
};
