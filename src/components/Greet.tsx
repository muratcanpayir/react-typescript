//string, number, boolean props
type GreetProps = {
  name: string;
  //if there is question mark, it would be optional prop. you don't have to send from app.tsx
  messageCount?: number;
  isLoggedIn: boolean;
};

function Greet(props: GreetProps) {
  //if there is no message count, it will be 0 as default
  const { messageCount = 0 } = props;
  return (
    <div>
      {props.isLoggedIn ? (
        <h2>
          Welcome {props.name}! You have {messageCount} unread messages!
        </h2>
      ) : (
        <h2>Welcome Guest!</h2>
      )}
    </div>
  );
}

export default Greet;
