import "./App.css";
import Greet from "./components/Greet";
import Heading from "./components/Heading";
import Person from "./components/Person";
import PersonList from "./components/PersonList";
import Status from "./components/Status";
import Oscar from "./components/Oscar";

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
      <Greet name="Vishwas" isLoggedIn={true} />
      <Person name={personName} />
      <PersonList names={nameList} />
      <Status status="error" />
      <Heading>Placeholder</Heading>
      <Oscar>
        <Heading>Oscar Goes To Brad Pitt!</Heading>
      </Oscar>
    </div>
  );
}

export default App;
