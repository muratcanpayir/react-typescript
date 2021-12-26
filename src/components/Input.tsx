import React from "react";
//send handleChange function to an input
type InputProps = {
  value: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

function Input(props: InputProps) {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
  };
  return (
    <div>
      <input value={props.value} onChange={handleInputChange} type="text" />
    </div>
  );
}

export default Input;
