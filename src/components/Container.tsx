//Style(CSS) Props
type ContainerProps = {
  styles: React.CSSProperties;
};

function Container({ styles }: ContainerProps) {
  return <div style={styles}>Text Content Goes Here</div>;
}

export default Container;
