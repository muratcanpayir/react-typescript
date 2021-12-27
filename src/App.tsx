import "./App.css";
import Greet from "./components/Greet";
import Heading from "./components/Heading";
import Person from "./components/Person";
import PersonList from "./components/PersonList";
import Status from "./components/Status";
import Oscar from "./components/Oscar";
import Button from "./components/Button";
import Input from "./components/Input";
import Container from "./components/Container";
import LoggedIn from "./components/state/LoggedIn";
// import User from "./components/state/User";
import Counter from "./components/state/Counter";
import { ThemeContextProvider } from "./components/context/ThemeContext";
import Box from "./components/context/Box";
import { UserContextProvider } from "./components/context/UserContext";
import User from "./components/context/User";
import DomRef from "./components/ref/DomRef";
import MutableRef from "./components/ref/MutableRef";
import Private from "./components/auth/Private";
import Profile from "./components/auth/Profile";

function App() {
  const personName = {
    first: "Bruce",
    last: "Wayne",
  };
  const nameList = [
    {
      first: "Bruce",
      last: "Wayne",
    },
    {
      first: "Clark",
      last: "Kent",
    },
    {
      first: "PRincess",
      last: "Diana",
    },
  ];
  return (
    <div className="App">
      {/* string, number, boolean and optional props */}
      <Greet name="Vishwas" isLoggedIn={true} />
      {/* object props */}
      <Person name={personName} />
      {/* array props */}
      <PersonList names={nameList} />
      {/* props with only selected strings */}
      <Status status="error" />
      {/* send children as a prop */}
      <Heading>Placeholder</Heading>
      {/* send component as a children prop */}
      <Oscar>
        <Heading>Oscar Goes To Brad Pitt!</Heading>
      </Oscar>
      {/* send function(event) as a prop. send event parameter and number parameter */}
      <Button
        handleClick={(event, id) => {
          console.log("button clicked", event, id);
        }}
      />
      {/* send handleChange function to an input */}
      <Input
        value=""
        handleChange={(event) => {
          console.log("input", event.target.value);
        }}
      />
      {/* send styles(CSS) props */}
      <Container styles={{ border: "1px solid black", padding: "1rem" }} />
      {/* useState */}
      <LoggedIn />
      {/* <User /> */}
      {/* useReducer */}
      <Counter />
      {/* Context */}
      <ThemeContextProvider>
        <Box />
      </ThemeContextProvider>
      <UserContextProvider>
        <User />
      </UserContextProvider>
      {/* Ref */}
      <DomRef />
      <MutableRef />
      {/* component prop */}
      <Private isLoggedIn={true} component={Profile} />
    </div>
  );
}

export default App;
