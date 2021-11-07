import { IRoute } from "../interfaces";

const routes: IRoute[] = [];

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
