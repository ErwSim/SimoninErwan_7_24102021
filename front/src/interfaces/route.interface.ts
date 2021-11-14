import React from "react";

export interface IRoute {
  path: string;
  element?: React.ReactElement;
  routes?: IRoute[];
}
