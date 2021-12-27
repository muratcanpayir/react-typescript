type CustomInputProps = React.ComponentProps<"input">;

function CustomInput(props: CustomInputProps) {
  return <input {...props} />;
}

export default CustomInput;
