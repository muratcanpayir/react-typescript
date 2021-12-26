import React, { useState } from "react";
type AuthUser = {
  name: string;
  email: string;
};

function User() {
  //user can not be an object because i set the default value null. <AuthUser | null> solve this. It says user must be an AuthUser or null.
  const [user, setUser] = useState<AuthUser | null>(null);
  const handleLogin = () => {
    setUser({
      name: "muratcan",
      email: "muratcanpayir@gmail.com",
    });
  };
  const handleLogout = () => {
    setUser(null);
  };
  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      {/* Question mark says optional. if you dont put question mark, it will error "object is possible null" */}
      <div>User name is {user?.name}</div>
      <div>User email is {user?.email}</div>
    </div>
  );
}

export default User;
