import React from "react";

export interface IRoute {
  name: string;
  path: string;
  element?: React.ReactElement;
  routes?: IRoute[];
}
