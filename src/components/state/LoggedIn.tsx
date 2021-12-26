//typescript useState. Same like javascript. If you define default value as a boolean it must be always a boolean.
import { useState } from "react";

function LoggedIn() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleLogin = () => {
    setIsLoggedIn(true);
  };
  const handleLogout = () => {
    setIsLoggedIn(false);
  };
  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <div>User is {isLoggedIn ? "logged in" : "logged out"}</div>
    </div>
  );
}

export default LoggedIn;
