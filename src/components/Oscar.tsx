//pass another component as a children
type OscarProps = {
  children: React.ReactNode;
};

function Oscar(props: OscarProps) {
  return (
    <div>
      <h2>{props.children}</h2>
    </div>
  );
}

export default Oscar;
