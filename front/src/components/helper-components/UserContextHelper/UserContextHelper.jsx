import React from "react";
import { UserContext } from "../../../contextes";

export default function UserContextHelper({ children }) {
  const childrenWithProps = (currentUser) =>
    React.Children.map(children, (child) => {
      if (React.isValidElement(child)) {
        return React.cloneElement(child, { currentUser });
      }
    });
  return (
    <UserContext.Consumer>
      {({ currentUser }) => <>{childrenWithProps(currentUser)}</>}
    </UserContext.Consumer>
  );
}
