//pass another component as a children
type OscarProps = {
  children: React.ReactNode;
};

function Oscar({ children }: OscarProps) {
  return (
    <div>
      <h2>{children}</h2>
    </div>
  );
}

export default Oscar;
