import React from "react";

//send function(event) as a prop
type ButtonProps = {
  //this is how you sent event parameter and id parameter as a number
  handleClick: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void;
};

function Button({ handleClick }: ButtonProps) {
  return <button onClick={(event) => handleClick(event, 1)}>Click</button>;
}

export default Button;
