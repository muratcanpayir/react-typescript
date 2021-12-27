//rfce function, rafc arrow function
//you can extract another components props here.
//(props:React.ComponentProps<typeof Greet>) it will take Greet component's props

import React from "react";
import Greet from "./Greet";

export const CustomExtractComponent = (
  props: React.ComponentProps<typeof Greet>
) => {
  return (
    <div>
      {props.isLoggedIn}
      {props.messageCount}
      {props.name}
    </div>
  );
};
