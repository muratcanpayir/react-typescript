//send children as a prop
type HeadingProps = {
  children: string;
};

function Heading(props: HeadingProps) {
  return (
    <div>
      <h2>{props.children}</h2>
    </div>
  );
}

export default Heading;
