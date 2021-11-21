import React from "react";

const MessageContext = React.createContext({
  message: {},
  setMessage: () => {},
});

export { MessageContext };
